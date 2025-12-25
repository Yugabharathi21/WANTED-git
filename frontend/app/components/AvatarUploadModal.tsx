'use client';

import React, { useState, useRef } from 'react';
import { Upload, X, Camera, ShieldAlert, CheckCircle2, Loader2 } from 'lucide-react';

interface AvatarUploadModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentAvatar: string;
}

const AvatarUploadModal: React.FC<AvatarUploadModalProps> = ({ isOpen, onClose, currentAvatar }) => {
    const [preview, setPreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!isOpen) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleUpload = () => {
        setIsUploading(true);
        // Simulate upload delay
        setTimeout(() => {
            setIsUploading(false);
            onClose();
            setPreview(null);
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 uppercase">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#060606]/90 backdrop-blur-xl animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300 overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5">
                    <div>
                        <div className="text-[10px] font-bold text-[#D3E97A] tracking-[0.2em] mb-1">DATA UPLOAD UI // V1.0</div>
                        <h2 className="text-xl font-technor font-bold text-white tracking-tighter">UPDATE <span className="text-zinc-500">AVATAR.IMG</span></h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/5 transition-colors text-zinc-500 hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={triggerFileInput}
                        className={`relative aspect-square max-w-[280px] mx-auto border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group overflow-hidden ${isDragging
                            ? 'border-[#D3E97A] bg-[#D3E97A]/5'
                            : 'border-white/10 bg-[#060606] hover:border-[#D3E97A]/50'
                            }`}
                    >
                        {preview ? (
                            <>
                                <img src={preview} alt="Preview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-[#D3E97A] text-black px-4 py-2 text-[10px] font-bold tracking-widest">CHANGE FILE</div>
                                </div>
                            </>
                        ) : (
                            <div className="text-center p-6">
                                <Upload className={`w-12 h-12 mx-auto mb-6 transition-all duration-300 ${isDragging ? 'text-[#D3E97A] scale-110' : 'text-zinc-700 group-hover:text-zinc-500'}`} />
                                <div className="text-[10px] font-bold text-zinc-500 tracking-widest leading-relaxed">
                                    DRAG & DROP IMAGE PACKETS<br />
                                    <span className="text-zinc-700">OR CLICK TO BROWSE LOCAL FILES</span>
                                </div>
                            </div>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/*"
                            className="hidden"
                        />
                    </div>

                    <div className="mt-8 flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-lg">
                        <ShieldAlert className="w-4 h-4 text-[#D3E97A]" />
                        <span className="text-[10px] text-zinc-500 font-bold tracking-wider">MAX FILE SIZE: 2MB // SUPPORTED: JPG, PNG, WEBP</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/5 flex gap-4">
                    <button
                        onClick={handleUpload}
                        disabled={!preview || isUploading}
                        className={`flex-1 py-4 bg-[#D3E97A] text-black font-bold text-xs tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${(!preview || isUploading) ? 'opacity-20 grayscale pointer-events-none' : 'hover:scale-[1.02] shadow-[0_10px_30px_rgba(211,233,122,0.15)]'
                            }`}
                    >
                        {isUploading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                TRANSMITTING...
                            </>
                        ) : (
                            <>
                                <CheckCircle2 className="w-4 h-4" />
                                UPLOAD PACKET
                            </>
                        )}
                    </button>
                    <button
                        onClick={onClose}
                        className="px-8 py-4 border border-white/10 text-white font-bold text-[10px] tracking-[0.2em] hover:bg-white/5 transition-colors"
                    >
                        ABORT
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AvatarUploadModal;
