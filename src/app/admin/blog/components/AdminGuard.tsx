'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
    const [checked, setChecked] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetch('/api/admin/auth-check')
            .then(res => {
                if (!res.ok) router.replace('/admin/login');
                else setChecked(true);
            })
            .catch(() => router.replace('/admin/login'));
    }, [router]);

    if (!checked) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-slate-400">Chargement...</div>
            </div>
        );
    }

    return <>{children}</>;
}
