import type { Metadata } from 'next';
import Script from 'next/script';
import '../globals.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Admin | SiamVisa Pro',
    robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-slate-50 text-slate-900 antialiased">
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
