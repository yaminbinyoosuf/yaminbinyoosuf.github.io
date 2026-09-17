import React, { useState } from 'react';
import { Terminal, Search, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onNavigate: (tab: string, slug?: string) => void;
  onOpenCommandPalette: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigate,
  onOpenCommandPalette
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'work', label: 'WORK' },
    { id: 'from-x', label: 'FROM X' },
    { id: 'notes', label: 'NOTES' },
    { id: 'build', label: 'BUILD LOG' },
    { id: 'ideas', label: 'IDEAS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleSelect = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#222222] bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        
        {/* Brand & Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSelect('home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
            aria-label="Home"
          >
            <span className="font-mono-code text-xs font-semibold tracking-wider text-[#FFFFFF] transition-colors group-hover:text-[#1A9E6E]">
              YAMIN
            </span>
            <div className="flex items-center gap-1.5 rounded-full border border-[#222222] bg-[#141414] px-2 py-0.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1A9E6E] opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1A9E6E]"></span>
              </span>
              <span className="font-mono-code text-[10px] text-[#1A9E6E] font-medium tracking-widest">
                BUILDING
              </span>
            </div>
            <span className="hidden lg:inline-block font-mono-code text-[10px] text-[#555555]">
              · Kerala, India
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`font-mono-code text-xs tracking-wider transition-all relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-[#FFFFFF] font-medium'
                    : 'text-[#888888] hover:text-[#FFFFFF]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#1A9E6E]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions (⌘K and GitHub) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 border border-[#262626] hover:border-[#404040] bg-[#121212] px-2.5 py-1 text-[#A3A3A3] hover:text-[#FFFFFF] transition-colors focus:outline-none"
            aria-label="Search or Open Command Palette"
            title="Press ⌘K or Ctrl+K to search"
          >
            <Search className="h-3.5 w-3.5 text-[#737373]" />
            <span className="hidden sm:inline font-mono-code text-[11px] text-[#737373]">
              SEARCH
            </span>
            <kbd className="hidden sm:inline font-mono-code text-[10px] bg-[#1C1C1C] px-1 py-0.2 border border-[#2D2D2D] text-[#888888]">
              ⌘K
            </kbd>
          </button>

          <a
            href="https://github.com/yaminbinyoosuf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1 font-mono-code text-xs text-[#888888] hover:text-[#FFFFFF] transition-colors px-2 py-1"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="h-3 w-3 text-[#555555]" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex p-1.5 text-[#A3A3A3] hover:text-white md:hidden border border-[#222222] bg-[#141414] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#222222] bg-[#0E0E0E] px-4 py-4 md:hidden">
          <div className="flex flex-col space-y-3 font-mono-code text-xs">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`flex items-center justify-between py-2 text-left transition-colors border-b border-[#1A1A1A] ${
                  activeTab === item.id ? 'text-[#1A9E6E] font-medium' : 'text-[#A3A3A3]'
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && (
                  <span className="text-[10px] text-[#1A9E6E]">ACTIVE</span>
                )}
              </button>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <a
                href="https://github.com/yaminbinyoosuf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#888888] hover:text-white py-1"
              >
                <span>GITHUB REPOSITORIES</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <span className="text-[10px] text-[#555555]">KERALA, INDIA</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
