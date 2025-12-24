import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8 px-8 md:px-32 lg:px-60 border-b border-white/5 sticky top-0 bg-[#060606]/80 backdrop-blur-md z-50">
      <div className="text-2xl font-technor font-bold tracking-tight text-white">
        WANTED<span className="text-[10px] align-top ml-1 text-[#D3E97A]">BETA</span>
      </div>

      <div className="hidden md:flex gap-12 text-sm font-medium text-zinc-400">
        <Link href="/issues" className="hover:text-white transition-colors cursor-pointer relative group">
          <span className="group-hover:text-[#D3E97A] transition-colors">Issues</span>
        </Link>
        <div className="hover:text-white transition-colors cursor-pointer relative group">
          <span className="group-hover:text-[#D3E97A] transition-colors">Claims</span>
        </div>
        <div className="hover:text-white transition-colors cursor-pointer relative group">
          <span className="group-hover:text-[#D3E97A] transition-colors">Leaderboard</span>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <button className="text-xs font-bold bg-[#D3E97A] text-black px-4 py-2 rounded-full hover:bg-white transition-colors">
          Connect Github
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
