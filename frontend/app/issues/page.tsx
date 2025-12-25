import React from 'react';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterSidebar";
import IssueCard from "../components/IssueCard";

export default function IssuesPage() {
    return (
        <main className="min-h-screen bg-[#060606] text-[#EDEDED] font-clash selection:bg-[#D3E97A] selection:text-black flex flex-col">
            <Navbar />

            <div className="flex-1 px-8 md:px-32 lg:px-60 py-12 md:py-20">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    {/* Sidebar */}
                    <div className="flex-shrink-0">
                        <FilterSidebar />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-technor font-bold text-white mb-2 uppercase tracking-tighter">OPEN BOUNTIES</h1>
                                <p className="text-zinc-500 font-medium">Found 24 active opportunities in the grid</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex gap-4 border-r border-white/10 pr-6 mr-6">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D3E97A] cursor-pointer">Newest</span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 hover:text-white cursor-pointer transition-colors">Highest Paid</span>
                                </div>
                                <Link href="/claims/issues">
                                    <button className="px-6 py-3 bg-[#D3E97A] text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_10px_20px_rgba(211,233,122,0.15)] flex items-center gap-2">
                                        POST BOUNTY
                                        <div className="w-1 h-1 bg-black rounded-full"></div>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {/* Mock Data */}
                            <Link href="/issues/react-fix-hydration" className="block outline-none">
                                <IssueCard
                                    repo="facebook/react"
                                    title="Fix hydration error in Suspense boundaries with server components"
                                    xp={5000}
                                    difficulty="Expert"
                                    tags={['React', 'Bug', 'Core']}
                                />
                            </Link>

                            <Link href="/issues/nextjs-optimize-images" className="block outline-none">
                                <IssueCard
                                    repo="vercel/next.js"
                                    title="Optimize image optimization API for better caching performance"
                                    xp={2500}
                                    difficulty="Specialist"
                                    tags={['Next.js', 'Performance']}
                                />
                            </Link>

                            <Link href="/issues/tailwind-container-queries" className="block outline-none">
                                <IssueCard
                                    repo="tailwindlabs/tailwindcss"
                                    title="Add support for container queries in v4 alpha"
                                    xp={12000}
                                    difficulty="Architect"
                                    tags={['CSS', 'Feature']}
                                />
                            </Link>

                            <Link href="/issues/shadcn-datepicker" className="block outline-none">
                                <IssueCard
                                    repo="shadcn/ui"
                                    title="Add DateRangePicker component to registry"
                                    xp={1000}
                                    difficulty="Contributor"
                                    tags={['UI', 'New Component']}
                                />
                            </Link>

                            <Link href="/issues/calcom-typo-fix" className="block outline-none">
                                <IssueCard
                                    repo="calcom/cal.com"
                                    title="Fix typo in onboarding workflow email template"
                                    xp={200}
                                    difficulty="Rookie"
                                    tags={['Good First Issue']}
                                />
                            </Link>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-4 mt-16">
                            <button className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D3E97A] hover:text-[#D3E97A] transition-colors bg-[#0A0A0A] text-zinc-500 rounded">
                                &lt;
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center border border-[#D3E97A] text-[#D3E97A] bg-[#D3E97A]/5 font-bold rounded">
                                1
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D3E97A] hover:text-[#D3E97A] transition-colors bg-[#0A0A0A] text-zinc-500 rounded">
                                2
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D3E97A] hover:text-[#D3E97A] transition-colors bg-[#0A0A0A] text-zinc-500 rounded">
                                3
                            </button>
                            <span className="text-zinc-600">...</span>
                            <button className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D3E97A] hover:text-[#D3E97A] transition-colors bg-[#0A0A0A] text-zinc-500 rounded">
                                8
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D3E97A] hover:text-[#D3E97A] transition-colors bg-[#0A0A0A] text-zinc-500 rounded">
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
