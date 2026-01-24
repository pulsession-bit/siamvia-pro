
import { NextRequest, NextResponse } from "next/server";
import { notifyIndexNow } from "@/lib/indexnow";

/**
 * Route API pour notifier IndexNow manuellement.
 * POST /api/indexnow
 * Body: { "urls": ["https://siamvisapro.com/fr/dtv", ...] }
 */
export async function POST(req: NextRequest) {
    try {
        const { urls } = await req.json();

        if (!urls || !Array.isArray(urls) || urls.length === 0) {
            return NextResponse.json({ error: "Invalid URLs provided" }, { status: 400 });
        }

        await notifyIndexNow(urls);

        return NextResponse.json({ success: true, message: `Notification sent for ${urls.length} URLs` });
    } catch (error) {
        console.error("API IndexNow Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
