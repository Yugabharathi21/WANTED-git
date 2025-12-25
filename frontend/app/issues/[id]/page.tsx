'use client';

import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
    Zap, Shield, Target, Clock, ExternalLink,
    Github, MessageSquare, Code2, ArrowLeft,
    Trophy, Users, Activity
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function IssueDetailPage() {
    const params = useParams();
    const id = params.id as string;

    // Mock data for the issue
    const issue = {
        id: id,
        repo: "facebook/react",
        title: "Fix hydration error in Suspense boundaries with server components",
        description: "A critical bug in the React 19 alpha branch is causing hydration mismatches when Suspense boundaries are used in conjunction with Server Components and partial prerendering. The mismatch occurs specifically when a suspense boundary is nested within another suspense boundary and the inner one is pre-rendered on the server but partially hydrated on the client.",
        requirements: [
            "Root cause analysis of the hydration mismatch in the fiber tree.",
            "Implement a stable fix that preserves the React 18 behavior.",
            "Add regression tests in the React core test suite.",
            "Ensure parity between Fizz and Fiber implementations."
        ],
        xp: 5000,
        cr: 1250,
        difficulty: 'Expert',
        status: 'OPEN',
        tags: ['React', 'Bug', 'Core'],
        claimedBy: [
            { name: "Vercel", avatar: "https://github.com/vercel.png" },
            { name: "DanAbramov", avatar: "https://github.com/gaearon.png" }
        ],
        createdAt: "2 days ago",
        impact: "CRITICAL"
    };

    return (
        <main className="min-h-screen bg-[#060606] text-[#EDEDED] font-clash selection:bg-[#D3E97A] selection:text-black flex flex-col">
            <Navbar />

            <div className="flex-1 px-8 md:px-32 lg:px-60 py-12 md:py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Breadcrumbs */}
                    <Link href="/issues" className="flex items-center gap-2 text-[10px] font-bold text-zinc-600 hover:text-[#D3E97A] uppercase tracking-[0.2em] mb-12 transition-all group">
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                        Back to Grid
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Main Content */}
                        <div className="flex-1 space-y-12">
                            {/* Title Section */}
                            <div>
                                <div className="flex items-center gap-3 text-zinc-500 font-mono text-xs mb-4">
                                    <Github className="w-4 h-4" />
                                    <span>{issue.repo}</span>
                                    <span className="text-zinc-800">/</span>
                                    <span className="text-zinc-400">#4829</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-technor font-bold text-white mb-6 leading-tight tracking-tighter">
                                    {issue.title}
                                </h1>
                                <div className="flex flex-wrap gap-2">
                                    {issue.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-400 rounded-full uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                    <span className="px-3 py-1 bg-[#D3E97A]/10 border border-[#D3E97A]/20 text-[10px] font-bold text-[#D3E97A] rounded-full uppercase tracking-widest flex items-center gap-1.5">
                                        <div className="w-1 h-1 bg-[#D3E97A] rounded-full animate-pulse"></div>
                                        {issue.status}
                                    </span>
                                </div>
                            </div>

                            {/* Dossier Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-[1px] flex-1 bg-white/5"></div>
                                    <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.3em]">Technical Dossier</span>
                                    <div className="h-[1px] flex-1 bg-white/5"></div>
                                </div>

                                <div className="prose prose-invert max-w-none">
                                    <p className="text-lg text-zinc-400 leading-relaxed font-clash italic">
                                        "{issue.description}"
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                                    <div className="p-8 border border-white/5 bg-[#0A0A0A] rounded-xl space-y-6">
                                        <div className="flex items-center gap-3 text-[#D3E97A]">
                                            <Shield className="w-5 h-5" />
                                            <h3 className="text-xs font-bold uppercase tracking-widest">Requirements</h3>
                                        </div>
                                        <ul className="space-y-4">
                                            {issue.requirements.map((req, i) => (
                                                <li key={i} className="flex gap-4 text-xs text-zinc-500 leading-relaxed">
                                                    <span className="text-[#D3E97A] font-mono">{i + 1}.</span>
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-8 border border-white/5 bg-[#0A0A0A] rounded-xl space-y-6">
                                        <div className="flex items-center gap-3 text-[#D3E97A]">
                                            <Users className="w-5 h-5" />
                                            <h3 className="text-xs font-bold uppercase tracking-widest">Active Hunters</h3>
                                        </div>
                                        <div className="space-y-4">
                                            {issue.claimedBy.map((user, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.02] rounded-lg">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
                                                            <img src={user.avatar} alt={user.name} />
                                                        </div>
                                                        <span className="text-xs font-bold text-white">{user.name}</span>
                                                    </div>
                                                    <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">84% Progress</div>
                                                </div>
                                            ))}
                                            <div className="pt-4 text-center">
                                                <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">3 other attempts failed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full lg:w-96 space-y-8">
                            {/* Reward Card */}
                            <div className="p-8 border border-[#D3E97A]/20 bg-[#D3E97A]/[0.02] rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Target className="w-32 h-32 text-[#D3E97A] rotate-12" />
                                </div>

                                <div className="relative z-10 space-y-8">
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Total Reward Pool</div>
                                        <div className="text-5xl font-technor font-bold text-white tracking-tighter">
                                            {issue.cr.toLocaleString()} <span className="text-[#D3E97A]">CR</span>
                                        </div>
                                        <div className="text-sm font-bold text-[#D3E97A]/60 font-technor">
                                            + {issue.xp.toLocaleString()} XP Points
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 border border-white/5 bg-black/40 rounded-xl space-y-1">
                                            <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                                                <Activity className="w-3 h-3" /> Impact
                                            </div>
                                            <div className="text-xs font-bold text-white uppercase">{issue.impact}</div>
                                        </div>
                                        <div className="p-4 border border-white/5 bg-black/40 rounded-xl space-y-1">
                                            <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                                                <Trophy className="w-3 h-3" /> Difficulty
                                            </div>
                                            <div className="text-xs font-bold text-white uppercase">{issue.difficulty}</div>
                                        </div>
                                    </div>

                                    <button className="w-full py-5 bg-[#D3E97A] text-black font-bold text-[10px] tracking-[0.3em] uppercase flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(211,233,122,0.2)]">
                                        CLAIM BOUNTY
                                        <Zap className="w-4 h-4 fill-black" />
                                    </button>

                                    <div className="text-center">
                                        <p className="text-[9px] text-zinc-600 font-medium uppercase tracking-widest leading-relaxed">
                                            Claims are exclusive to contributors level 10+.
                                            Verification takes 24-48 hours.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Actions */}
                            <div className="space-y-4">
                                <button className="w-full py-4 border border-white/5 bg-white/[0.02] text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white/5 hover:text-white transition-all">
                                    <Github className="w-4 h-4" /> View on GitHub
                                </button>
                                <button className="w-full py-4 border border-white/5 bg-white/[0.02] text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white/5 hover:text-white transition-all">
                                    <MessageSquare className="w-4 h-4" /> Join Discussion
                                </button>
                            </div>

                            {/* Metadata */}
                            <div className="pt-8 border-t border-white/5 space-y-4">
                                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                    <span className="text-zinc-600">Posted on</span>
                                    <span className="text-zinc-400 italic">{issue.createdAt}. Protocol v1.4</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                    <span className="text-zinc-600">Verification</span>
                                    <span className="text-[#D3E97A]">AUTOMATED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
