import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize Gemini
// Note: In production, use process.env.GEMINI_API_KEY
const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY || '');

export async function POST(req: Request) {
    try {
        const { query, lang } = await req.json();

        if (!query) {
            return NextResponse.json({ error: 'Query is required' }, { status: 400 });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `
        You are an intelligent Visa Analyst for 'SiamVisaPro'.
        
        Available Visa IDs:
        - 'dtv': Digital Nomad, Remote Worker, Freelancer, Soft Power (Muay Thai, Cooking). 5 Years validity.
        - 'setv': Tourist, short stay (60 days). No work allowed.
        - 'voa': Short tourist stay (15-30 days) for eligible countries.
        - 'metv': Multiple Entry Tourist (6 months total validity).
        - 'non-o-ret': Retirement (Age 50+), need 800k THB bank.
        - 'non-oa-ret': Long Stay Retirement, requires insurance.
        - 'ltr-wgc': LTR Wealthy Global Citizen ($1M+ assets).
        - 'ltr-wp': LTR Wealthy Pensioner (Age 50+).
        - 'ltr-wft': LTR Work From Thailand (Remote employee for big corp).
        - 'ltr-hsp': LTR Highly Skilled Professional.
        - 'elite-gold': Elite Visa 5 Years (Paid membership).
        - 'elite-plat': Elite Visa 10-20 Years (Paid membership).
        - 'non-b': Working for a THAI company (local employment).
        - 'non-ed-uni': Studying at University.
        - 'non-ed-muay': Learning Muay Thai or Language (often used for stay).
        - 'smart-t', 'smart-i': Startup / Tech Talent / Investor.

        User Query: "${query}"
        User Language: "${lang || 'en'}"

        Task:
        1. Analyze the user's profile and intent.
        2. Select the ONE BEST matching Visa ID from the list above.
        3. Provide a brief, professional explanation in the user's language (${lang || 'en'}).
        4. Return ONLY a valid JSON object. Do not include markdown formatting like \`\`\`json.
        
        Format:
        {
            "recommendationId": "dtv" | "setv" | "non-o-ret" | ... | null,
            "explanation": "Your explanation here..."
        }
        
        If the query is too vague to decide (e.g. "visa"), set recommendationId to null and ask clarifying questions in the explanation.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().replace(/```json|```/g, '').trim(); // Clean up potential markdown

        return NextResponse.json(JSON.parse(text));
    } catch (error) {
        console.error('Gemini API Error:', error);
        return NextResponse.json(
            { error: 'Failed to process with AI', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
