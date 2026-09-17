import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onReadNotes: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onReadNotes }) => {
  return (
    <section className="relative w-full pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-[#1C1C1C]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Status / Identifier */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 border border-[#222222] bg-[#111111] px-2.5 py-1 text-[11px] font-mono-code text-[#A3A3A3]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1A9E6E]" />
            <span className="text-[#888888]">STATUS:</span>
            <span className="text-[#E5E5E5] font-medium tracking-wide">YAMIN / ONLINE</span>
          </div>
          <span className="text-xs font-mono-code text-[#444444] hidden sm:inline">
            // FOUNDER · SOFTWARE ENGINEER · INDEPENDENT BUILDER
          </span>
        </div>

        {/* Name */}
        <div className="mb-4">
          <h1 className="font-mono-code text-xs sm:text-sm uppercase tracking-[0.25em] text-[#888888]">
            Yamin Bin Yoosuf
          </h1>
        </div>

        {/* Large Statement */}
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#FFFFFF] leading-[1.12]">
            I build systems, products, and ideas from scratch.
          </h2>
        </div>

        {/* Supporting Text */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#999999] leading-relaxed font-normal">
          Self-taught software engineer and founder building <span className="text-[#F5F5F3] font-medium">THRYVIX</span> and <span className="text-[#F5F5F3] font-medium">COGEXT</span> from Kerala, India.
        </p>

        {/* Action Triggers + Social Links */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-[#181818]">
          
          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono-code text-xs sm:text-sm">
            <button
              onClick={onExploreWork}
              className="group flex items-center gap-2 border border-[#333333] hover:border-[#1A9E6E] bg-[#141414] hover:bg-[#1A9E6E]/10 px-5 py-3 text-[#FFFFFF] transition-all focus:outline-none"
            >
              <span>[ EXPLORE WORK ]</span>
              <ArrowDownRight className="h-4 w-4 text-[#777777] group-hover:text-[#1A9E6E] transition-colors" />
            </button>

            <button
              onClick={onReadNotes}
              className="group flex items-center gap-2 border border-[#222222] hover:border-[#444444] bg-[#0F0F0F] hover:bg-[#181818] px-5 py-3 text-[#888888] hover:text-[#FFFFFF] transition-all focus:outline-none"
            >
              <span>[ READ NOTES ]</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 font-mono-code text-xs text-[#777777]">
            <a
              href="https://x.com/yaminbinyoosuf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFFFFF] transition-colors inline-flex items-center gap-1"
            >
              <span>X</span>
              <ArrowUpRight className="h-3 w-3 text-[#555555]" />
            </a>
            <span className="text-[#333333]">/</span>
            <a
              href="https://github.com/yaminbinyoosuf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFFFFF] transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3 text-[#555555]" />
            </a>
            <span className="text-[#333333]">/</span>
            <a
              href="https://www.linkedin.com/in/yamin-binyoosuf/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFFFFF] transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3 w-3 text-[#555555]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

