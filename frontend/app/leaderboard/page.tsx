import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeaderboardRow from "../components/LeaderboardRow";

const mockLeaderboard = [
    { rank: 1, username: "Yugabharathi", avatar: "https://github.com/Yugabharathi21.png", level: 14, xp: 45000, cr: 12500, totalBounties: 32 },
    { rank: 2, username: "DanAbramov", avatar: "https://github.com/gaearon.png", level: 13, xp: 42500, cr: 11200, totalBounties: 28 },
    { rank: 3, username: "Shadcn", avatar: "https://github.com/shadcn.png", level: 12, xp: 38200, cr: 9800, totalBounties: 25 },
    { rank: 4, username: "ThePrimeagen", avatar: "https://github.com/theprimeagen.png", level: 11, xp: 21000, cr: 5400, totalBounties: 15 },
    { rank: 5, username: "LeeRobinson", avatar: "https://github.com/leerob.png", level: 10, xp: 18500, cr: 4200, totalBounties: 12 },
    { rank: 6, username: "RichHarris", avatar: "https://github.com/rich-harris.png", level: 9, xp: 15200, cr: 3100, totalBounties: 9 },
    { rank: 7, username: "TannerLinsley", avatar: "https://github.com/tannerlinsley.png", level: 8, xp: 12400, cr: 2500, totalBounties: 7 },
];

export default function LeaderboardPage() {
    return (
        <main className="min-h-screen bg-[#060606] text-[#EDEDED] font-clash selection:bg-[#D3E97A] selection:text-black flex flex-col">
            <Navbar />

            <div className="flex-1 px-8 md:px-32 lg:px-60 py-12 md:py-20">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-technor font-bold text-white mb-4 tracking-tighter">
                            GLOBAL <br />
                            <span className="text-[#D3E97A]">LEADERBOARD</span>
                        </h1>
                        <p className="text-zinc-500 max-w-lg mb-8">
                            The top contributors building the future of open source.
                            Ranked by XP and total CR earned.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <span className="px-4 py-2 bg-[#D3E97A] text-black text-[10px] font-bold uppercase rounded-full">All Time</span>
                            <span className="px-4 py-2 border border-white/5 text-zinc-500 text-[10px] font-bold uppercase rounded-full hover:border-white/10 cursor-pointer">This Month</span>
                            <span className="px-4 py-2 border border-white/5 text-zinc-500 text-[10px] font-bold uppercase rounded-full hover:border-white/10 cursor-pointer">This Week</span>
                        </div>
                    </div>

                    {/* Table Headers */}
                    <div className="flex px-6 py-4 border-b border-white/5 text-[10px] uppercase font-bold tracking-widest text-zinc-600 mb-4">
                        <div className="w-12 text-center">#</div>
                        <div className="w-20 text-center">Rank</div>
                        <div className="flex-1 ml-4">Contributor</div>
                        <div className="hidden md:block w-28 text-right">Bounties</div>
                        <div className="w-32 text-right">Credits</div>
                        <div className="w-32 text-right">Experience</div>
                    </div>

                    {/* List */}
                    <div className="flex flex-col gap-2">
                        {mockLeaderboard.map((user) => (
                            <LeaderboardRow
                                key={user.rank}
                                rank={user.rank}
                                username={user.username}
                                avatar={user.avatar}
                                level={user.level}
                                xp={user.xp}
                                cr={user.cr}
                                totalBounties={user.totalBounties}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-4 mt-16">
                        <button className="text-xs font-bold uppercase text-zinc-500 hover:text-white transition-colors">Previous</button>
                        <div className="flex gap-2">
                            {[1, 2, 3].map(n => (
                                <button key={n} className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded ${n === 1 ? 'bg-[#D3E97A] text-black' : 'border border-white/5 text-zinc-500 hover:text-white transition-colors'}`}>
                                    {n}
                                </button>
                            ))}
                        </div>
                        <button className="text-xs font-bold uppercase text-zinc-500 hover:text-white transition-colors">Next</button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
