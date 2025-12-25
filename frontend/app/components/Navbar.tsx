import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8 px-8 md:px-32 lg:px-60 border-b border-white/5 sticky top-0 bg-[#060606]/80 backdrop-blur-md z-50">
      <Link href="/" className="text-2xl font-technor font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
        WANTED.git<span className="text-[10px] align-top ml-1 text-[#D3E97A]">BETA</span>
      </Link>

      <div className="hidden md:flex gap-12 text-sm font-medium text-zinc-400">
        <Link href="/issues" className="hover:text-white transition-colors cursor-pointer relative group">
          <span className="group-hover:text-[#D3E97A] transition-colors">Issues</span>
        </Link>
        <Link href="/claims" className="hover:text-white transition-colors cursor-pointer relative group">
          <span className="group-hover:text-[#D3E97A] transition-colors">Claims</span>
        </Link>
        <Link href="/profile" className="hover:text-white transition-colors cursor-pointer relative group">
          <span className="group-hover:text-[#D3E97A] transition-colors">Profile</span>
        </Link>
      </div>

      <div className="flex gap-6 items-center">
        <Link href="/connect">
          <button className="text-xs font-bold bg-[#D3E97A] text-black px-4 py-2 rounded-full hover:bg-white transition-colors">
            Connect Github
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
