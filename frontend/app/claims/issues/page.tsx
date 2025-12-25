'use client';

import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ChevronRight, Database, Globe, Zap, Shield, AlertCircle, Terminal, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function CreateIssuePage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        repoUrl: '',
        issueId: '',
        xp: 1000,
        difficulty: 'Contributor',
        tags: '',
        description: ''
    });

    const [isTransmitting, setIsTransmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsTransmitting(true);
        // Simulate extraction and transmission
        setTimeout(() => {
            setIsTransmitting(false);
            setIsSuccess(true);
        }, 3000);
    };

    return (
        <main className="min-h-screen bg-[#060606] text-[#EDEDED] font-clash selection:bg-[#D3E97A] selection:text-black flex flex-col">
            <Navbar />

            <div className="flex-1 px-8 md:px-32 lg:px-60 py-12 md:py-20">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 text-[#D3E97A] mb-4">
                            <Terminal className="w-5 h-5" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">System Protocol // v2.04</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-technor font-bold text-white mb-6 tracking-tighter">
                            CREATE <br />
                            <span className="text-[#D3E97A]">BOUNTY</span>
                        </h1>
                        <p className="text-zinc-500 max-w-lg leading-relaxed">
                            Inject a new task into the global grid. AI will analyze the impact
                            coefficient and verify the bounty's cryptographic integrity.
                        </p>
                    </div>

                    {!isSuccess ? (
                        <form onSubmit={handleSubmit} className="space-y-12">
                            {/* Step Indicator */}
                            <div className="flex gap-4 mb-20">
                                {[1, 2, 3].map(s => (
                                    <div
                                        key={s}
                                        className={`h-1 flex-1 transition-all duration-700 ${s <= step ? 'bg-[#D3E97A]' : 'bg-white/5'}`}
                                    ></div>
                                ))}
                            </div>

                            {/* Section 1: Source */}
                            <div className={`space-y-8 transition-all duration-500 ${step === 1 ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">01</div>
                                    <h2 className="text-lg font-bold uppercase tracking-widest text-white">Source Parameters</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Repository URL</label>
                                        <div className="relative group">
                                            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-[#D3E97A] transition-colors" />
                                            <input
                                                type="url"
                                                placeholder="https://github.com/org/repo"
                                                className="w-full bg-[#0A0A0A] border border-white/5 p-4 pl-12 text-sm focus:border-[#D3E97A] focus:outline-none transition-all font-mono placeholder:text-zinc-800"
                                                value={formData.repoUrl}
                                                onChange={e => setFormData({ ...formData, repoUrl: e.target.value })}
                                                disabled={step !== 1}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Issue Index</label>
                                        <div className="relative group">
                                            <Database className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-[#D3E97A] transition-colors" />
                                            <input
                                                type="text"
                                                placeholder="#1234"
                                                className="w-full bg-[#0A0A0A] border border-white/5 p-4 pl-12 text-sm focus:border-[#D3E97A] focus:outline-none transition-all font-mono placeholder:text-zinc-800"
                                                value={formData.issueId}
                                                onChange={e => setFormData({ ...formData, issueId: e.target.value })}
                                                disabled={step !== 1}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {step === 1 && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(2)}
                                        className="mt-4 px-8 py-4 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-[#D3E97A]/30 transition-all flex items-center gap-2"
                                    >
                                        Next Protocol
                                        <ChevronRight className="w-3 h-3" />
                                    </button>
                                )}
                            </div>

                            {/* Section 2: Reward & Difficulty */}
                            <div className={`space-y-8 transition-all duration-500 ${step === 2 ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">02</div>
                                    <h2 className="text-lg font-bold uppercase tracking-widest text-white">Resource Allocation</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Reward Intensity (XP)</label>
                                        <input
                                            type="range"
                                            min="200"
                                            max="20000"
                                            step="100"
                                            className="w-full accent-[#D3E97A]"
                                            value={formData.xp}
                                            onChange={e => setFormData({ ...formData, xp: parseInt(e.target.value) })}
                                            disabled={step !== 2}
                                        />
                                        <div className="flex justify-between items-center p-4 bg-[#0A0A0A] border border-white/5">
                                            <div className="text-2xl font-bold font-technor text-[#D3E97A]">{formData.xp.toLocaleString()} XP</div>
                                            <div className="text-sm font-bold text-zinc-500 font-technor">≈ {(formData.xp / 4).toLocaleString()} CR</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Difficulty Threshold</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {['Rookie', 'Contributor', 'Specialist', 'Expert', 'Architect'].map(level => (
                                                <button
                                                    key={level}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, difficulty: level })}
                                                    className={`px-3 py-2 text-[8px] font-bold uppercase tracking-tighter border transition-all ${formData.difficulty === level
                                                            ? 'bg-[#D3E97A] text-black border-[#D3E97A]'
                                                            : 'bg-[#0A0A0A] text-zinc-500 border-white/5 hover:border-white/20'
                                                        }`}
                                                    disabled={step !== 2}
                                                >
                                                    {level}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {step === 2 && (
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="px-8 py-4 border border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 hover:text-white transition-all"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setStep(3)}
                                            className="px-8 py-4 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-[#D3E97A]/30 transition-all flex items-center gap-2"
                                        >
                                            Validate Params
                                            <ChevronRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Section 3: Finalize */}
                            <div className={`space-y-8 transition-all duration-500 ${step === 3 ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">03</div>
                                    <h2 className="text-lg font-bold uppercase tracking-widest text-white">Execution</h2>
                                </div>

                                <div className="p-8 border border-dashed border-white/10 bg-white/[0.01] rounded-xl space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Shield className="w-5 h-5 text-[#D3E97A] mt-1" />
                                        <div>
                                            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Final Review</h3>
                                            <p className="text-xs text-zinc-500 leading-relaxed">
                                                Reviewing bounty for <span className="text-white font-mono">{formData.repoUrl || 'protocol://unknown'}</span>.
                                                The calculated coefficient is <span className="text-[#D3E97A]">0.842x</span>.
                                                By submitting, you agree to the Automated Payout Protocol.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                                        <div className="flex justify-between text-[10px] font-mono text-zinc-600">
                                            <span>STATUS: READY</span>
                                            <span>CHECKSUM: 4FA3-BABF-2AF1</span>
                                        </div>
                                    </div>
                                </div>

                                {step === 3 && (
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setStep(2)}
                                            className="px-8 py-4 border border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 hover:text-white transition-all"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isTransmitting}
                                            className={`flex-1 py-4 bg-[#D3E97A] text-black font-bold text-[10px] tracking-[0.3em] uppercase flex items-center justify-center gap-3 transition-all ${isTransmitting ? 'opacity-50 cursor-wait' : 'hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_rgba(211,233,122,0.15)]'}`}
                                        >
                                            {isTransmitting ? 'Transmitting...' : 'Initialize Bounty'}
                                            {isTransmitting ? <Cpu className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4 text-black fill-black" />}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </form>
                    ) : (
                        <div className="py-20 text-center space-y-8 animate-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-[#D3E97A]/10 border border-[#D3E97A]/20 rounded-full flex items-center justify-center mx-auto mb-8">
                                <Zap className="w-8 h-8 text-[#D3E97A] fill-[#D3E97A]" />
                            </div>
                            <h2 className="text-4xl font-technor font-bold text-white tracking-tighter">BOUNTY <span className="text-[#D3E97A]">INITIALIZED</span></h2>
                            <p className="text-zinc-500 max-w-sm mx-auto leading-relaxed">
                                The issue has been decrypted and distributed to the global hunter network.
                                Tracking ID: <span className="text-white font-mono uppercase tracking-widest text-xs">WD-7482-TX</span>
                            </p>
                            <div className="pt-8 flex flex-col items-center gap-4">
                                <Link href="/issues" className="px-8 py-4 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all text-white">
                                    View in Grid
                                </Link>
                                <button
                                    onClick={() => {
                                        setIsSuccess(false);
                                        setStep(1);
                                        setFormData({
                                            repoUrl: '',
                                            issueId: '',
                                            xp: 1000,
                                            difficulty: 'Contributor',
                                            tags: '',
                                            description: ''
                                        });
                                    }}
                                    className="text-[10px] font-bold text-zinc-600 hover:text-[#D3E97A] uppercase transition-colors"
                                >
                                    Create Another Task
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
