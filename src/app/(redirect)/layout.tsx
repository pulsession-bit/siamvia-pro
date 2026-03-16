import Script from 'next/script';

export default function RedirectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                {children}
                {/* HubSpot Embed Code */}
                <Script 
                    type="text/javascript" 
                    id="hs-script-loader" 
                    async 
                    defer 
                    src="//js-eu1.hs-scripts.com/148041516.js" 
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
