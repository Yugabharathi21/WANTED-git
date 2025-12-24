import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ConnectPage() {
    return (
        <main className="min-h-screen bg-[#060606] text-[#EDEDED] font-clash selection:bg-[#D3E97A] selection:text-black flex flex-col">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center px-8 md:px-32 lg:px-60 py-20 text-center">
                <div className="w-16 h-16 mb-8 rounded-full bg-[#D3E97A]/10 flex items-center justify-center border border-[#D3E97A]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D3E97A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </div>

                <h1 className="text-5xl md:text-7xl font-technor font-bold mb-6 tracking-tight">
                    JOIN THE <span className="text-[#D3E97A]">HUNT</span>
                </h1>

                <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-12 font-light">
                    Connect your GitHub account to start claiming issues, earning XP, and getting paid for your contributions.
                </p>

                <div className="space-y-4 w-full max-w-sm">
                    <button className="w-full text-sm font-bold bg-[#D3E97A] text-black px-8 py-4 rounded-full hover:bg-white transition-colors uppercase tracking-wide flex items-center justify-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        Connect with GitHub
                    </button>
                    <p className="text-xs text-zinc-600">
                        By connecting, you agree to our <span className="text-zinc-400 hover:text-white cursor-pointer underline">Terms of Service</span>.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
