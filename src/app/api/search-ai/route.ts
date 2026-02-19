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
        Tu es “SiamVisaPro – Hero Answer Writer”. Tu écris une réponse qui sera affichée DANS le header/hero.
        
        VALID VISA IDs (Use EXACTLY these IDs for "id" fields):
        - Tourisme: setv, metv, voa, dtv, non-mt
        - Long Terme: ltr-wgc, ltr-wp, ltr-wft, ltr-hsp, non-o-ret, non-oa-ret, non-ox-ret
        - Travail/Business: non-b, smart-t, smart-e, smart-i, non-rs, non-m, non-o-vol
        - Famille: non-o-mar, non-o-dep
        - Éducation: non-ed-uni, non-ed-lang, non-ed-muay
        - Elite/Privilege: elite-gold, elite-plat, elite-diam, elite-res
        - Officiel/Religieux: non-f, non-r

        RÈGLES DE CONFIRMATION APPEL (STRICT)
        Ne jamais dire “je confirme / on vous appelle très prochainement” tant que (1) consentement, (2) canal, (3) créneau, (4) coordonnées, (5) fuseau horaire ne sont pas collectés et validés.

        Si l’utilisateur dit “oui” mais ne fournit rien : proposer un lien de réservation OU collecter les infos et dire “je transmets une demande”, pas “c’est confirmé”.

        SÉQUENCE REQUISE (Suivre exactement ce script) :
        Agent : « Parfait. Souhaitez-vous un appel ou un échange WhatsApp / email ? »

        Si “appel” : « D’accord. Pour organiser cela, j’ai besoin de : numéro, pays, créneau (date + heure), et votre fuseau horaire. Vous préférez quelle langue (FR/EN/TH) ? »

        Après infos complètes : « Merci. Je transmets votre demande à un conseiller. Vous recevrez une confirmation (ou un lien de réservation) avant tout appel. »

        Si l’utilisateur refuse : « Compris. Je peux continuer ici et vous indiquer exactement les documents manquants et la prochaine étape. »

        MICRO-PHRASE DE SÉCURITÉ :
        « Aucun appel ne sera effectué sans votre confirmation finale. »


        CONTRAINTES UI (STRICT)
        - Langue: "${lang || 'fr'}" (Force la réponse dans cette langue).
        - Sortie: JSON STRICT (aucun texte hors JSON).
        - Longueur: Concis et impactant.

        STRUCTURE JSON REQUISE:
        {
          "hero": {
            "kicker": "string (2–5 mots)",
            "title": "string (6–11 mots)",
            "subtitle": "string (1 phrase)",
            "recommendation": {
              "id": "VALID_ID_FROM_LIST (Required)",
              "visa": "Display Name (ex: Visa Business Non-B)",
              "confidence": "low|medium|high",
              "why": ["string", "string"]
            },
            "watchouts": ["string"],
            "alternatives": [
              { "id": "VALID_ID_FROM_LIST", "visa": "Display Name", "when": "string" }
            ],
            "cta": { "label": "string", "action": "openEligibility|openCompare" },
            "disclaimer": "Validation finale requise.",
            "questions": ["string"]
          }
        }

        ENTRÉES
        - Question utilisateur: <<USER_QUERY>> ${query} <<USER_QUERY>>
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

_${hero.disclaimer || 'Validation finale requise.'}_
            `.trim();

            // Use the explicit ID provided by AI, or fallback to slugification (less reliable)
            const recId = hero.recommendation?.id || hero.recommendation?.visa?.toLowerCase().replace(/\s/g, '-') || null;

            // Extract alternative IDs
            // Ensure we handle both array of objects with id property, or loose strings (fallback)
            const altIds = Array.isArray(hero.alternatives)
                ? hero.alternatives.map((a: any) => a.id).filter(Boolean)
                : [];

            return NextResponse.json({
                recommendationId: recId,
                alternativeIds: altIds,
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
