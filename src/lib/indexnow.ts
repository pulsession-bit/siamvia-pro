
/**
 * Notifie IndexNow (Bing, Yandex, etc.) de la création, mise à jour ou suppression de pages.
 * @param urls Liste des URLs absolues à indexer
 */
export async function notifyIndexNow(urls: string[]) {
    const key = process.env.INDEXNOW_KEY;
    const host = process.env.NEXT_PUBLIC_SITE_HOST || "siamvisapro.com";

    if (!key) {
        console.error("IndexNow error: INDEXNOW_KEY is not defined in environment variables.");
        return;
    }

    const body = {
        host,
        key,
        keyLocation: `https://${host}/${key}.txt`,
        urlList: urls,
    };

    try {
        const response = await fetch("https://www.bing.com/indexnow", {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            console.log(`IndexNow notification sent successfully for ${urls.length} urls.`);
        } else {
            const errorText = await response.text();
            console.error(`IndexNow notification failed: ${response.status} ${errorText}`);
        }
    } catch (error) {
        console.error("IndexNow fetch error:", error);
    }
}
