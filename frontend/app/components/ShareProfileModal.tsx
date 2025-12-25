'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Twitter, Facebook, Link as LinkIcon, Share2 } from 'lucide-react';

interface ShareProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    username: string;
}

const ShareProfileModal: React.FC<ShareProfileModalProps> = ({ isOpen, onClose, username }) => {
    const [copied, setCopied] = useState(false);
    const profileUrl = typeof window !== 'undefined' ? `${window.location.origin}/profile/${username}` : '';

    if (!isOpen) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(profileUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareTwitter = () => {
        const text = `Check out my bounty hunter profile on WANTED.git! 🚩`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(profileUrl)}`, '_blank');
    };

    const shareLinkedIn = () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`, '_blank');
    };

    const shareFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`, '_blank');
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'WANTED.git Profile',
                    text: `Check out my bounty hunter profile on WANTED.git!`,
                    url: profileUrl,
                });
            } catch (err) {
                console.error('Share failed:', err);
            }
        } else {
            handleCopy();
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 uppercase">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#060606]/90 backdrop-blur-xl animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-[#0A0A0A] border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5">
                    <div>
                        <div className="text-[10px] font-bold text-[#D3E97A] tracking-[0.2em] mb-1">NETWORK PROTOCOL // SHARE</div>
                        <h2 className="text-xl font-technor font-bold text-white tracking-tighter">DISTRIBUTE <span className="text-zinc-500">ID.LINK</span></h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/5 transition-colors text-zinc-500 hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-8 space-y-8">
                    {/* URL Display */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-zinc-500 tracking-widest ml-1">PROFILE SOURCE URL</label>
                        <div className="flex gap-2">
                            <div className="flex-1 bg-white/5 border border-white/10 p-4 text-white text-[10px] font-mono truncate lowercase">
                                {profileUrl}
                            </div>
                            <button
                                onClick={handleCopy}
                                className={`px-4 flex items-center justify-center border transition-all ${copied
                                    ? 'bg-[#D3E97A] border-[#D3E97A] text-black'
                                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                                    }`}
                            >
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-zinc-500 tracking-widest ml-1">BROADCAST VIA</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <button
                                onClick={shareTwitter}
                                className="p-4 bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 text-[8px] font-bold text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all group"
                            >
                                <Twitter className="w-4 h-4 group-hover:text-[#1DA1F2]" />
                                X
                            </button>
                            <button
                                onClick={shareLinkedIn}
                                className="p-4 bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 text-[8px] font-bold text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all group"
                            >
                                <LinkIcon className="w-4 h-4 group-hover:text-[#0077B5]" />
                                LINKEDIN
                            </button>
                            <button
                                onClick={shareFacebook}
                                className="p-4 bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 text-[8px] font-bold text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all group"
                            >
                                <Facebook className="w-4 h-4 group-hover:text-[#1877F2]" />
                                FACEBOOK
                            </button>
                            <button
                                onClick={handleNativeShare}
                                className="p-4 bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 text-[8px] font-bold text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all group"
                            >
                                <Share2 className="w-4 h-4 group-hover:text-[#D3E97A]" />
                                SHARE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/5">
                    <button
                        onClick={onClose}
                        className="w-full py-4 border border-white/10 text-white font-bold text-[10px] tracking-[0.2em] hover:bg-white/5 transition-colors"
                    >
                        HALT TRANSMISSION
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareProfileModal;
