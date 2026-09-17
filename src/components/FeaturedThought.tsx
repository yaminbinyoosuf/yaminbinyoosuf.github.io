import React from 'react';
import { ArrowRight, ShieldAlert } from 'lucide-react';

interface FeaturedThoughtProps {
  onExploreIdea: () => void;
}

export const FeaturedThought: React.FC<FeaturedThoughtProps> = ({ onExploreIdea }) => {
  return (
    <section className="relative w-full border-b border-[#1C1C1C] py-20 sm:py-28 bg-[#0C0C0C] overflow-hidden">
      {/* Subtle architectural backdrop grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Editorial Sub-header Strip */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-1.5 w-1.5 rounded-full bg-[#1A9E6E]" />
          <span className="font-mono-code text-xs uppercase tracking-[0.25em] text-[#888888]">
            FEATURED THESIS // COGEXT · SEPTEMBER 2026
          </span>
        </div>

        {/* Large Editorial Statement */}
        <div className="max-w-4xl">
          <blockquote className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#FFFFFF] leading-[1.18] font-editorial italic">
            “the agent’s output is not evidence.
            <br />
            <span className="text-[#1A9E6E] not-italic font-sans font-semibold">
              what happened in the real world is.
            </span>”
          </blockquote>
        </div>

        {/* Visual Bridge Action */}
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <button
            onClick={onExploreIdea}
            className="group flex items-center gap-2.5 border border-[#333333] hover:border-[#1A9E6E] bg-[#141414] hover:bg-[#1A9E6E]/10 px-5 py-3 font-mono-code text-xs sm:text-sm text-[#FFFFFF] transition-all focus:outline-none"
          >
            <span>EXPLORE THE IDEA</span>
            <ArrowRight className="h-4 w-4 text-[#777777] group-hover:text-[#1A9E6E] group-hover:translate-x-1 transition-all" />
          </button>

          <span className="font-mono-code text-xs text-[#555555] hidden sm:inline">
            // CORE VERIFICATION PRINCIPLE OF COGEXT v2.0
          </span>
        </div>

      </div>
    </section>
  );
};
