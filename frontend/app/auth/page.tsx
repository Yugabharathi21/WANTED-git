'use client';

import { AuthView } from '@neondatabase/auth-ui';

export default function AuthPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <div className="w-full max-w-md p-6 bg-[#111] border border-[#333] rounded-lg">
                <AuthView />
            </div>
        </div>
    );
}
