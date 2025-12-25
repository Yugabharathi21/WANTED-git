import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterSidebar";
import ClaimCard from "../components/ClaimCard";

export default function ClaimsPage() {
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
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-technor font-bold text-white mb-2">YOUR CLAIMS</h1>
                                <p className="text-zinc-500">Managing 3 active claims</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#D3E97A] cursor-pointer">Active</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-white cursor-pointer transition-colors">History</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {/* Mock Data */}
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
                            <ClaimCard
                                repo="tailwindlabs/tailwindcss"
                                title="Add support for container queries in v4 alpha"
                                xp={12000}
                                status="Completed"
                                dateClaimed="Dec 10, 2025"
                            />
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
