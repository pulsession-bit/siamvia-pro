'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to French version by default
        router.replace('/fr');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
                <p className="text-slate-600">
                    Redirecting to <a href="/fr" className="text-blue-600 underline">French version</a>
                </p>
            </div>
        </div>
    );
}
