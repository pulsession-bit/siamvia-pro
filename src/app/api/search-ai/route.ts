import { NextResponse } from 'next/server';

// Note: In production, use process.env.GEMINI_SECRET_KEY
// Fallback hardcoded key to bypass Vercel env var propagation issues
const API_KEY = process.env.GEMINI_SECRET_KEY;
console.log("DEBUG: Active Gemini Key Prefix:", API_KEY ? API_KEY.substring(0, 10) : "UNDEFINED");

export async function POST(req: Request) {
    try {
        const { query, lang } = await req.json();

        if (!query) {
            return NextResponse.json({ error: 'Query is required' }, { status: 400 });
        }

        const prompt = `
        RÔLE
        Tu es “SiamVisaPro – Hero Answer Writer”. Tu écris une réponse qui sera affichée DANS le header/hero (fond radial gradient).
        Objectif: impact immédiat + lisibilité. Le hero a une hauteur variable: ta réponse doit rester compacte.

        CONTRAINTES UI (STRICT)
        - Langue: "${lang || 'fr'}" (Force la réponse dans cette langue).
        - Sortie: JSON STRICT (aucun texte hors JSON).
        - Longueur totale visée: 450–900 caractères (max 1 200).
        - Pas de paragraphes longs. Préfère phrases courtes.
        - Pas de jargon légal. Pas de promesses. Toujours inclure une ligne “Validation finale requise”.
        - Évite les listes > 4 items.
        - Si tu manques d’infos: pose au maximum 2 questions courtes dans “questions”.

        STRUCTURE HERO
        Tu dois produire ces champs (tous obligatoires, même vides):
        {
          "hero": {
            "kicker": "string (2–5 mots)",
            "title": "string (6–11 mots)",
            "subtitle": "string (1 phrase, <= 120 caractères)",
            "recommendation": {
              "visa": "string (ex: Non-B, DTV, LTR, Touriste, Elite, etc.)",
              "confidence": "low|medium|high",
              "why": ["string", "string", "string"]  // 2 à 3 raisons maximum
            },
            "watchouts": ["string", "string"],        // 1 à 2 points de vigilance max
            "alternatives": [
              { "visa": "string", "when": "string (<= 70 caractères)" }
            ],                                        // 0 à 2 alternatives max
            "cta": {
              "label": "string (<= 22 caractères)",
              "action": "openEligibility|openCompare|openChat"
            },
            "disclaimer": "string (doit contenir: 'Validation finale requise.')",
            "questions": ["string", "string"]         // 0 à 2 questions max si besoin
          }
        }

        STYLE (HERO)
        - Ton: expert, neutre, direct.
        - “title” doit être actionnable (“Le visa le plus probable: …”).
        - “subtitle” doit résumer l’idée en 1 phrase simple.
        - “why” = bénéfices concrets (droit au séjour / droit au travail / durée / simplicité).
        - “watchouts” = contraintes (employeur, revenus, documents, délais).
        - “alternatives” seulement si pertinentes.
        - “cta.label” doit pousser l’étape suivante (ex: “Vérifier éligibilité”).

        ENTRÉES
        - Question utilisateur: <<USER_QUERY>> ${query} <<USER_QUERY>>

        PRODUIS UNIQUEMENT LE JSON.
        `;

        // Direct fetch to emulate browser request with Referer
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

        const apiRes = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Universal solution: works with both restricted and unrestricted keys
                'Referer': 'https://www.siamvisapro.com',
                'Origin': 'https://www.siamvisapro.com'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }]
            })
        });

        if (!apiRes.ok) {
            const errorText = await apiRes.text();
            console.error('Gemini API Error (Raw):', errorText);
            throw new Error(`Gemini API returned ${apiRes.status}: ${errorText}`);
        }

        const data = await apiRes.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

        // Robust JSON extraction
        let jsonText = rawText;
        const jsonMatch = rawText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            jsonText = jsonMatch[0];
        } else {
            // Clean up basic markdown if no regex match
            jsonText = rawText.replace(/```json|```/g, '').trim();
        }

        try {
            const aiData = JSON.parse(jsonText);
            const hero = aiData.hero || aiData; // Fallback if AI omits root wrapper

            // Map NEW Hero format to a text block for current Frontend compatibility
            const explanation = `
**${hero.kicker || 'Conseil'} : ${hero.title}**

${hero.subtitle}

✅ **Pourquoi ce visa ?**
${hero.recommendation?.why?.map((w: string) => `• ${w}`).join('\n') || ''}

⚠️ **Points de vigilance**
${hero.watchouts?.map((w: string) => `• ${w}`).join('\n') || ''}

${hero.alternatives?.length > 0 ? `🔄 **Alternatives**\n` + hero.alternatives.map((a: any) => `• ${a.visa} : ${a.when}`).join('\n') : ''}

_${hero.disclaimer}_
            `.trim();

            const recId = hero.recommendation?.visa?.toLowerCase().replace(/\s/g, '-') || null;

            return NextResponse.json({
                recommendationId: recId,
                alternativeIds: [], // Not strictly used by new logic but kept for interface
                explanation: explanation,
                // Pass raw hero data for future UI update
                heroData: hero
            });
        } catch (parseError) {
            console.error('JSON Parse Error. Raw text:', rawText);
            // Fallback response for vague or broken AI output
            return NextResponse.json({
                recommendationId: null,
                explanation: "Je n'ai pas pu analyser votre demande précisément. Pourriez-vous donner plus de détails sur votre situation (ex: travail à distance, retraite, tourisme) ?"
            });
        }
    } catch (error: any) {
        console.error('Gemini API Error:', error);
        return NextResponse.json(
            {
                error: 'Failed to process with AI',
                details: error.message || String(error),
                suggestion: "Check API Key restrictions in Google Cloud Console. Ensure 'siamvisapro.com' matches Referer or add 'localhost' for dev."
            },
            { status: 500 }
        );
    }
}
