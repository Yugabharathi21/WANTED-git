import React from 'react';

interface ClaimCardProps {
    repo: string;
    title: string;
    xp: number;
    status: 'In Progress' | 'Under Review' | 'Completed';
    dateClaimed: string;
}

const statusColors = {
    'In Progress': 'text-orange-400 border-orange-900 bg-orange-950/20',
    'Under Review': 'text-blue-400 border-blue-900 bg-blue-950/20',
    'Completed': 'text-[#D3E97A] border-[#D3E97A] bg-[#D3E97A]/5',
};

const ClaimCard: React.FC<ClaimCardProps> = ({ repo, title, xp, status, dateClaimed }) => {
    return (
        <div className="group p-6 border border-white/5 bg-[#0A0A0A] hover:border-[#D3E97A]/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                    <div className="text-xs text-zinc-500 font-mono mb-1">{repo}</div>
                    <div className="text-[10px] text-zinc-600 uppercase">Claimed on {dateClaimed}</div>
                </div>
                <div className={`text-[10px] px-2 py-0.5 border rounded uppercase tracking-wider ${statusColors[status]}`}>
                    {status}
                </div>
            </div>

            <h3 className="text-xl font-technor font-medium text-white mb-6 group-hover:text-[#D3E97A] transition-colors line-clamp-2">
                {title}
            </h3>

            <div className="flex items-end justify-between">
                <div className="text-right ml-auto">
                    <div className="text-[10px] text-zinc-500 uppercase">Reward</div>
                    <div className="flex flex-col items-end">
                        <div className="text-xl font-technor font-bold text-white leading-none">{(xp / 4).toLocaleString()} CR</div>
                        <div className="text-[10px] font-bold text-[#D3E97A] mt-1">{xp.toLocaleString()} XP</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClaimCard;
