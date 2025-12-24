import React from 'react';

const FilterSidebar = () => {
    return (
        <aside className="w-full md:w-64 space-y-8">
            {/* Search */}
            <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">Search</h4>
                <input
                    type="text"
                    placeholder="Search issues..."
                    className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-[#D3E97A] transition-colors placeholder:text-zinc-600"
                />
            </div>

            {/* Language */}
            <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">Language</h4>
                <div className="space-y-2">
                    {['TypeScript', 'Python', 'Rust', 'Go', 'Solidity'].map(lang => (
                        <label key={lang} className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white cursor-pointer group">
                            <div className="w-4 h-4 border border-white/20 group-hover:border-[#D3E97A] transition-colors"></div>
                            {lang}
                        </label>
                    ))}
                </div>
            </div>

            {/* Difficulty */}
            <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">Difficulty</h4>
                <div className="space-y-2">
                    {['Rookie', 'Contributor', 'Specialist', 'Expert', 'Architect'].map(level => (
                        <label key={level} className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white cursor-pointer group">
                            <div className="w-4 h-4 border border-white/20 group-hover:border-[#D3E97A] transition-colors"></div>
                            {level}
                        </label>
                    ))}
                </div>
            </div>

            {/* Framework */}
            <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">Framework</h4>
                <div className="space-y-2">
                    {['React', 'Vue', 'Svelte', 'Next.js', 'Django'].map(framework => (
                        <label key={framework} className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white cursor-pointer group">
                            <div className="w-4 h-4 border border-white/20 group-hover:border-[#D3E97A] transition-colors"></div>
                            {framework}
                        </label>
                    ))}
                </div>
            </div>

            {/* XP Range */}
            <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">XP Range</h4>
                <div className="space-y-2">
                    {['0 - 100 XP', '100 - 500 XP', '500 - 1000 XP', '1000+ XP'].map(range => (
                        <label key={range} className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white cursor-pointer group">
                            <div className="w-4 h-4 rounded-full border border-white/20 group-hover:border-[#D3E97A] transition-colors"></div>
                            {range}
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default FilterSidebar;
