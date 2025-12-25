import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileStats from "../components/ProfileStats";
import ClaimCard from "../components/ClaimCard";

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-[#060606] text-[#EDEDED] font-clash selection:bg-[#D3E97A] selection:text-black flex flex-col">
            <Navbar />

            <div className="flex-1 px-8 md:px-32 lg:px-60 py-12 md:py-20">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16 pb-16 border-b border-white/5">
                    <div className="relative group">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#D3E97A]/20 group-hover:border-[#D3E97A] transition-all duration-500">
                            <img
                                src="https://github.com/Yugabharathi21.png"
                                alt="Profile Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-[#D3E97A] text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                            Beta
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-technor font-bold text-white mb-2">YUGABHARATHI</h1>
                        <p className="text-zinc-500 font-mono text-sm mb-6">@yugabharathi21 • Joined Dec 2025</p>

                        <div className="max-w-md">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#D3E97A]">Specialist</span>
                                <span className="text-xs text-zinc-500 uppercase tracking-wider">Level 12 • 24,500 XP</span>
                            </div>
                            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-[#D3E97A] w-3/4 shadow-[0_0_15px_rgba(211,233,122,0.3)]"></div>
                            </div>
                            <p className="text-[10px] text-zinc-600 mt-2 text-right uppercase">5,500 XP until next rank</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="px-6 py-2 border border-white/10 hover:border-[#D3E97A] hover:text-[#D3E97A] transition-all text-xs font-bold uppercase tracking-wider rounded-full">
                            Edit Profile
                        </button>
                        <button className="px-6 py-2 bg-[#D3E97A] text-black hover:bg-white transition-all text-xs font-bold uppercase tracking-wider rounded-full">
                            Share Profile
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mb-16">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-4">
                        Stats Overview
                        <div className="h-[1px] flex-1 bg-white/5"></div>
                    </h2>
                    <ProfileStats />
                </div>

                {/* Recent Activity */}
                <div>
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-4 flex-1">
                            Recent Activity
                            <div className="h-[1px] flex-1 bg-white/5"></div>
                        </h2>
                        <div className="flex gap-6 ml-8">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#D3E97A] cursor-pointer">Bounties</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-white cursor-pointer transition-colors">Contributions</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {/* Reuse ClaimCard for consistency */}
                        <ClaimCard
                            repo="facebook/react"
                            title="Fix hydration error in Suspense boundaries with server components"
                            xp={5000}
                            status="In Progress"
                            dateClaimed="Dec 20, 2025"
                        />
                        <ClaimCard
                            repo="vercel/next.js"
                            title="Optimize image optimization API for better caching performance"
                            xp={2500}
                            status="Under Review"
                            dateClaimed="Dec 18, 2025"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
