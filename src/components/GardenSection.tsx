import React from 'react';
import { GARDEN_QUESTIONS, MENTAL_MODELS } from '../data/garden';
import { Sparkles, HelpCircle, Compass, ArrowRight } from 'lucide-react';

export const GardenSection: React.FC = () => {
  return (
    <section id="garden" className="w-full border-b border-[#1C1C1C] py-16 sm:py-24 bg-[#0B0B0B]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#222222] pb-4 mb-10 gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-semibold tracking-widest text-[#1A9E6E] uppercase">
              // 14
            </span>
            <h2 className="font-mono-code text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF]">
              DIGITAL GARDEN
            </h2>
            <span className="hidden sm:inline text-xs font-mono-code text-[#444444]">
              — INTENTIONALLY UNFINISHED CONCEPTS
            </span>
          </div>

          <span className="font-mono-code text-xs text-[#666666]">
            QUESTIONS · MENTAL MODELS · UNSOLVED PROBLEMS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          
          {/* Left: Questions I'm Exploring (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#888888] mb-4">
              <HelpCircle className="h-4 w-4 text-[#1A9E6E]" />
              <span className="uppercase tracking-wider">QUESTIONS I’M EXPLORING</span>
            </div>

            <div className="space-y-4">
              {GARDEN_QUESTIONS.map((q) => (
                <div
                  key={q.id}
                  className="border border-[#202020] bg-[#0E0E0E] hover:border-[#333333] p-5 transition-colors"
                >
                  <div className="flex items-center justify-between font-mono-code text-[10px] text-[#555555] mb-2">
                    <span className="text-[#1A9E6E]">{q.category}</span>
                    <span>ADDED {q.dateAdded}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF] tracking-tight">
                    → {q.question}
                  </h3>

                  <p className="mt-2 text-sm text-[#888888] leading-relaxed">
                    {q.thought}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Operational Mental Models (5 cols) */}
          <div className="lg:col-span-5 space-y-6 border-t lg:border-t-0 lg:border-l border-[#202020] pt-8 lg:pt-0 lg:pl-8">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#888888] mb-4">
              <Compass className="h-4 w-4 text-[#1A9E6E]" />
              <span className="uppercase tracking-wider">SYSTEM MENTAL MODELS</span>
            </div>

            <div className="space-y-4">
              {MENTAL_MODELS.map((model, idx) => (
                <div
                  key={idx}
                  className="border border-[#1E1E1E] bg-[#111111] p-5"
                >
                  <div className="font-mono-code text-xs font-semibold text-[#E5E5E5] mb-1">
                    {model.name}
                  </div>
                  <p className="text-xs text-[#888888] leading-relaxed">
                    {model.principle}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 border border-[#222222] bg-[#0E0E0E] font-mono-code text-xs text-[#666666]">
              <span className="text-[#1A9E6E] font-medium block mb-1">// GARDEN NOTE</span>
              These concepts are revised continuously as new production insights arrive from THRYVIX and COGEXT runtimes.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
