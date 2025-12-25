import React from 'react';

interface LeaderboardRowProps {
    rank: number;
    username: string;
    avatar: string;
    level: number;
    xp: number;
    cr: number;
    totalBounties: number;
    isTopThree?: boolean;
}

const LeaderboardRow: React.FC<LeaderboardRowProps> = ({
    rank,
    username,
    avatar,
    level,
    xp,
    cr,
    totalBounties,
    isTopThree
}) => {
    const rankColors = {
        1: 'text-[#D3E97A] border-[#D3E97A]/20 bg-[#D3E97A]/5',
        2: 'text-zinc-300 border-zinc-700 bg-zinc-800/20',
        3: 'text-orange-400 border-orange-900 bg-orange-950/20',
    };

    return (
        <div className={`flex items-center gap-6 p-4 md:p-6 border transition-all duration-300 group
            ${rank <= 3 ? rankColors[rank as 1 | 2 | 3] : 'border-white/5 bg-[#0A0A0A] hover:border-white/10'}
        `}>
            {/* Rank Number */}
            <div className="w-12 text-center font-technor font-bold text-xl">
                <span className={rank <= 3 ? '' : 'text-zinc-600'}>
                    {rank}
                </span>
            </div>

            {/* Rank Icon Column */}
            <div className="w-20 flex justify-center">
                <img
                    src="/Ranks Icon/Specialist.svg"
                    alt="Specialist"
                    className="w-12 h-12 drop-shadow-[0_0_10px_rgba(211,233,122,0.15)] group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Contributor Info */}
            <div className="flex items-center gap-4 flex-1">
                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 
                    ${rank === 1 ? 'border-[#D3E97A]' : 'border-white/10'}
                `}>
                    <img src={avatar} alt={username} className="w-full h-full object-cover" />
                </div>
                <div>
                    <div className="text-white font-medium group-hover:text-[#D3E97A] transition-colors">{username}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Level {level}</div>
                </div>
            </div>

            {/* Stats */}
            <div className="hidden md:flex flex-col items-end w-28">
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1">Bounties</div>
                <div className="text-white font-bold">{totalBounties}</div>
            </div>

            <div className="flex flex-col items-end w-32">
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1">Total CR</div>
                <div className="text-white font-bold font-technor">{cr.toLocaleString()} CR</div>
            </div>

            <div className="flex flex-col items-end w-32">
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1">Total XP</div>
                <div className="text-[#D3E97A] font-technor font-bold">{xp.toLocaleString()} XP</div>
            </div>
        </div>
    );
};

export default LeaderboardRow;
