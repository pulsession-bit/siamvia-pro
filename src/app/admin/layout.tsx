import type { Metadata } from 'next';
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
            </body>
        </html>
    );
}
