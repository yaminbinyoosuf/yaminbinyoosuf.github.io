import React from 'react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full border-t border-[#1C1C1C] bg-[#0A0A0A] py-16 sm:py-20 text-[#888888] font-mono-code text-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          
          {/* Identity & Role */}
          <div className="space-y-2 max-w-sm">
            <div className="text-sm font-bold tracking-wider text-[#FFFFFF] uppercase">
              YAMIN BIN YOOSUF
            </div>
            <p className="text-xs text-[#A3A3A3]">
              Founder · Software Engineer · Independent Builder
            </p>
            <p className="text-xs text-[#666666]">
              Kerala, India
            </p>
            <div className="pt-2 text-xs text-[#1A9E6E] font-medium tracking-wide">
              THRYVIX · COGEXT
            </div>
          </div>

          {/* Quick Section Nav Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <button
              onClick={() => onNavigate('work')}
              className="hover:text-white transition-colors focus:outline-none"
            >
              WORK
            </button>
            <button
              onClick={() => onNavigate('from-x')}
              className="hover:text-white transition-colors focus:outline-none"
            >
              FROM X
            </button>
            <button
              onClick={() => onNavigate('notes')}
              className="hover:text-white transition-colors focus:outline-none"
            >
              NOTES
            </button>
            <button
              onClick={() => onNavigate('build')}
              className="hover:text-white transition-colors focus:outline-none"
            >
              BUILD LOG
            </button>
            <button
              onClick={() => onNavigate('ideas')}
              className="hover:text-white transition-colors focus:outline-none"
            >
              IDEAS
            </button>
            <button
              onClick={() => onNavigate('experiments')}
              className="hover:text-white transition-colors focus:outline-none"
            >
              EXPERIMENTS
            </button>
            <button
              onClick={() => onNavigate('garden')}
              className="hover:text-white transition-colors focus:outline-none"
            >
              GARDEN
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors focus:outline-none"
            >
              ABOUT
            </button>
          </div>

          {/* External Social Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs">
            <a
              href="https://x.com/yaminbinyoosuf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              X
            </a>
            <span className="text-[#333333]">/</span>
            <a
              href="https://www.linkedin.com/in/yamin-binyoosuf/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#333333]">/</span>
            <a
              href="https://github.com/yaminbinyoosuf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-[#333333]">/</span>
            <a
              href="mailto:yamin@thryvixai.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

        </div>

        {/* Minimal Bottom Line Statement */}
        <div className="mt-14 pt-8 border-t border-[#181818] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#666666] text-xs">
          <div className="font-editorial italic text-sm text-[#A3A3A3]">
            “Building systems from first principles.”
          </div>
          <div className="font-mono-code text-[#444444] tracking-widest text-[11px] uppercase">
            Yamin Bin Yoosuf · Kerala, India
          </div>
        </div>

      </div>
    </footer>
  );
};

