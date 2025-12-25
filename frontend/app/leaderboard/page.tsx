'use client';

import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeaderboardRow from "../components/LeaderboardRow";

const mockLeaderboard = Array.from({ length: 40 }, (_, i) => ({
    rank: i + 1,
    username: [
        "Vercel", "DanAbramov", "Shadcn", "ThePrimeagen", "LeeRobinson", "RichHarris", "TannerLinsley",
        "KentCDodds", "SarahDrasner", "CassieCodes", "JasonLengstorf", "AddyOsmani", "WesBos", "ScottTolinski",
        "JenSimmons", "RachelAndrew", "LeaVerou", "ChrisCoyier", "UnaKravets", "AdamArgyle"
    ][i % 20] + (i >= 20 ? `_v${Math.floor(i / 20) + 1}` : ""),
    avatar: `https://i.pravatar.cc/150?u=${i}`,
    level: Math.max(1, 15 - Math.floor(i / 3)),
    xp: 50000 - (i * 1200),
    cr: 15000 - (i * 350),
    totalBounties: Math.max(1, 35 - i)
}));

const currentUser = { rank: 42, username: "Yugabharathi", avatar: "https://github.com/Yugabharathi21.png", level: 5, xp: 8500, cr: 2100, totalBounties: 4 };

export default function LeaderboardPage() {
    const [expandedRank, setExpandedRank] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const toggleRow = (rank: number) => {
        setExpandedRank(prev => prev === rank ? null : rank);
    };

    const isUserInTopList = mockLeaderboard.some(user => user.username === currentUser.username);

    // Pagination Logic
    const totalPages = Math.ceil(mockLeaderboard.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentList = mockLeaderboard.slice(startIndex, startIndex + itemsPerPage);

    const isUserOnCurrentPage = currentList.some(user => user.username === currentUser.username);
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
                        {currentList.map((user) => (
                            <LeaderboardRow
                                key={user.rank}
                                rank={user.rank}
                                username={user.username}
                                avatar={user.avatar}
                                level={user.level}
                                xp={user.xp}
                                cr={user.cr}
                                totalBounties={user.totalBounties}
                                isExpanded={expandedRank === user.rank}
                                onToggle={() => toggleRow(user.rank)}
                            />
                        ))}

                        {/* Sticky User Rank */}
                        {!isUserOnCurrentPage && (
                            <>
                                <div className="flex items-center gap-4 px-6 py-2 mt-4">
                                    <div className="h-[1px] flex-1 bg-white/5"></div>
                                    <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.3em]">Your Position</span>
                                    <div className="h-[1px] flex-1 bg-white/5"></div>
                                </div>
                                <LeaderboardRow
                                    rank={currentUser.rank}
                                    username={currentUser.username}
                                    avatar={currentUser.avatar}
                                    level={currentUser.level}
                                    xp={currentUser.xp}
                                    cr={currentUser.cr}
                                    totalBounties={currentUser.totalBounties}
                                    isExpanded={expandedRank === currentUser.rank}
                                    onToggle={() => toggleRow(currentUser.rank)}
                                    isCurrentUser={true}
                                />
                            </>
                        )}
                    </div>

                    {/* Controls Footer */}
                    <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-8">
                        {/* Rows Per Page */}
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Rows per page:</span>
                            <div className="flex gap-2">
                                {[10, 20, 30].map(count => (
                                    <button
                                        key={count}
                                        onClick={() => {
                                            setItemsPerPage(count);
                                            setCurrentPage(1); // Reset to first page
                                        }}
                                        className={`px-3 py-1 text-[10px] font-bold rounded transition-all ${itemsPerPage === count
                                                ? 'bg-white/10 text-[#D3E97A] border border-[#D3E97A]/20'
                                                : 'text-zinc-500 hover:text-white border border-transparent'
                                            }`}
                                    >
                                        {count}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="text-[10px] font-bold uppercase text-zinc-500 hover:text-white transition-colors disabled:opacity-20 disabled:pointer-events-none"
                            >
                                Previous
                            </button>

                            <div className="flex gap-2">
                                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                    // Simple pagination logic to show around current page
                                    let pageNum = i + 1;
                                    if (totalPages > 5 && currentPage > 3) {
                                        pageNum = currentPage - 2 + i;
                                        if (pageNum > totalPages) pageNum = totalPages - (4 - i);
                                    }

                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => setCurrentPage(pageNum)}
                                            className={`w-8 h-8 flex items-center justify-center text-[10px] font-bold rounded transition-all ${currentPage === pageNum
                                                    ? 'bg-[#D3E97A] text-black'
                                                    : 'border border-white/5 text-zinc-500 hover:text-white hover:border-white/10'
                                                }`}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}
                            </div>

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="text-[10px] font-bold uppercase text-zinc-500 hover:text-white transition-colors disabled:opacity-20 disabled:pointer-events-none"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
