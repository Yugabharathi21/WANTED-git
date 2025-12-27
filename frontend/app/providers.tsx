'use client';

import { NeonAuthUIProvider } from '@neondatabase/auth-ui';
import { auth } from '@/lib/auth';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NeonAuthUIProvider authClient={auth}>
            {children}
        </NeonAuthUIProvider>
    );
}
