import { NextResponse } from 'next/server';

export async function GET() {
    // Check which key is loaded
    const secretKey = process.env.GEMINI_SECRET_KEY;
    const oldKey = process.env.GEMINI_API_KEY; // Just to check if old one persists

    let activeKey = secretKey;
    let source = "GEMINI_SECRET_KEY";

    if (!activeKey && oldKey) {
        activeKey = oldKey;
        source = "GEMINI_API_KEY (Old)";
    }

    if (!activeKey) {
        return NextResponse.json({
            status: "ERROR",
            message: "No API Key found in environment variables."
        }, { status: 500 });
    }

    // Obfuscate key for safe display
    const visibleKey = activeKey.substring(0, 5) + "..." + activeKey.substring(activeKey.length - 5);

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${activeKey}`;

        // Test with Referer
        const apiRes = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Referer': 'https://siamvisapro.com', // Mimic Prod
                'Origin': 'https://siamvisapro.com'
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "Hello" }] }]
            })
        });

        const data = await apiRes.json();

        if (!apiRes.ok) {
            return NextResponse.json({
                status: "FAILED",
                key_source: source,
                key_used: visibleKey,
                error_code: apiRes.status,
                error_details: data
            }, { status: apiRes.status });
        }

        return NextResponse.json({
            status: "SUCCESS",
            key_source: source,
            key_used: visibleKey,
            message: "Gemini API is working!",
            test_response: data
        });

    } catch (error: any) {
        return NextResponse.json({
            status: "CRITICAL_ERROR",
            error: error.message || String(error)
        }, { status: 500 });
    }
}
