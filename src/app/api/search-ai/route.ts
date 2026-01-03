import { NextResponse } from 'next/server';

// Note: In production, use process.env.GEMINI_API_KEY
const API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: Request) {
    try {
        const { query, lang } = await req.json();

        if (!query) {
            return NextResponse.json({ error: 'Query is required' }, { status: 400 });
        }

        const prompt = `
        ROLE:
        Tu es un agent d’aide à la décision spécialisé en visas pour la Thaïlande.
        Ta mission est de recommander le visa le plus adapté à chaque client, de façon factuelle, neutre et conforme.

        PROCESSUS DE DÉCISION:
        1. Filtrer les visas incompatibles (activité non autorisée, durée insuffisante).
        2. Scorer les visas restants selon : adéquation durée, adéquation activité, budget, complexité, points de vigilance.
        3. Trier par score décroissant.
        4. Générer une recommandation claire.

        SOURCES DE DONNÉES (Visas disponibles et IDs) :
        - 'dtv': Digital Nomad, Remote Worker, Freelancer, Soft Power (Muay Thai, Cooking). 5 ans.
        - 'setv': Touriste, séjour court (60 jours). Travail interdit.
        - 'voa': Exemption / Visa on Arrival (15-60 jours selon pays).
        - 'metv': Touristique entrées multiples (6 mois).
        - 'non-o-ret': Retraite (50 ans +), besoin de 800k THB en banque ou pension.
        - 'elite-gold': Elite Visa 5 ans (Adhésion payante ~900k THB).
        - 'elite-plat': Elite Visa 10-20 ans.
        - 'non-b': Travailleur salarié dans une entreprise THAÏLANDAISE.
        - 'ltr-wft': LTR Work From Thailand (Salarié de grande entreprise étrangère).
        - 'ltr-wp': LTR Wealthy Pensioner (50 ans +, gros revenus).

        CONTRAINTES:
        - Pas d'avis juridique définitif.
        - Expliquer POURQUOI.
        - Exclure explicitement les visas incompatibles.
        - Ne pas utiliser le mot "Risque", utiliser "Point de vigilance", "Point faible" ou "Contrainte".
        - Langue : "${lang || 'en'}".

        QUERY UTILISATEUR: "${query}"

        FORMAT DE SORTIE (JSON STRICT) :
        {
          "recommended_visa_id": "L'ID Technique (ex: dtv)",
          "confidence_level": "high | medium | low",
          "justification": ["raison 1", "raison 2"],
          "points_de_vigilance": ["contrainte ou point d'attention 1"],
          "alternatives": [{"id": "id_visa", "reason_not_optimal": "raison"}],
          "disclaimer": "Recommandation informative. Validation finale requise."
        }
        `;

        // Direct fetch to emulate browser request with Referer
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

        const apiRes = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Important: Mimic the allowed domain
                'Referer': 'https://siamvisapro.com',
                'Origin': 'https://siamvisapro.com'
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

            // Map NEW format to OLD frontend expectation for compatibility
            // but enrich the explanation with the new structured data
            const explanation = `
${aiData.justification && aiData.justification.length > 0 ? aiData.justification.map((j: string) => `• ${j}`).join('\n') : ''}

${(aiData.points_de_vigilance || aiData.risks) && (aiData.points_de_vigilance || aiData.risks).length > 0 ? `🔍 POINTS DE VIGILANCE :\n${(aiData.points_de_vigilance || aiData.risks).map((r: string) => `• ${r}`).join('\n')}` : ''}

${aiData.alternatives && aiData.alternatives.length > 0 ? `🔄 ALTERNATIVES :\n${aiData.alternatives.map((a: any) => `• ${a.id || a.visa} : ${a.reason_not_optimal}`).join('\n')}` : ''}

${aiData.disclaimer || "Recommandation informative. Validation finale requise."}
            `.trim();

            return NextResponse.json({
                recommendationId: aiData.recommended_visa_id,
                alternativeIds: aiData.alternatives ? aiData.alternatives.map((a: any) => a.id) : [],
                explanation: explanation
            });
        } catch (parseError) {
            console.error('JSON Parse Error. Raw text:', rawText);
            // Fallback response for vague or broken AI output
            return NextResponse.json({
                recommendationId: null,
                explanation: "Je n'ai pas pu analyser votre demande précisément. Pourriez-vous donner plus de détails sur votre situation (ex: travail à distance, retraite, tourisme) ?"
            });
        }
    } catch (error) {
        console.error('Gemini API Error:', error);
        return NextResponse.json(
            { error: 'Failed to process with AI', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
