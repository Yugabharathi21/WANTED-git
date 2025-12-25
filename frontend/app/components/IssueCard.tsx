import React from 'react';

interface IssueCardProps {
    repo: string;
    title: string;
    xp: number;
    difficulty: 'Rookie' | 'Contributor' | 'Specialist' | 'Expert' | 'Architect';
    tags: string[];
}

const difficultyColors = {
    Rookie: 'text-zinc-400 border-zinc-700',
    Contributor: 'text-blue-400 border-blue-900',
    Specialist: 'text-purple-400 border-purple-900',
    Expert: 'text-orange-400 border-orange-900',
    Architect: 'text-[#D3E97A] border-[#D3E97A]',
};

const IssueCard: React.FC<IssueCardProps> = ({ repo, title, xp, difficulty, tags }) => {
    return (
        <div className="group p-6 border border-white/5 bg-[#0A0A0A] hover:border-[#D3E97A]/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
                <div className="text-xs text-zinc-500 font-mono mb-1">{repo}</div>
                <div className={`flex items-center gap-2 text-[10px] px-2 py-0.5 border rounded uppercase tracking-wider ${difficultyColors[difficulty]}`}>
                    <img
                        src={`/Ranks Icon/${difficulty === 'Architect' ? 'Expert-1' : difficulty}.svg`}
                        alt={difficulty}
                        className="w-6 h-6 border border-white/10 rounded-sm"
                    />
                    {difficulty}
                </div>
            </div>

            <h3 className="text-xl font-technor font-medium text-white mb-6 group-hover:text-[#D3E97A] transition-colors line-clamp-2">
                {title}
            </h3>

            <div className="flex items-end justify-between">
                <div className="flex gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 text-zinc-400 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="text-right">
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

export default IssueCard;
