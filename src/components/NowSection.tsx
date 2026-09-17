import React from 'react';
import { Clock } from 'lucide-react';

export const NowSection: React.FC = () => {
  return (
    <section id="now" className="w-full border-b border-[#1C1C1C] py-14 sm:py-20 bg-[#0B0B0B]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#222222] pb-4 mb-8 gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-semibold tracking-widest text-[#1A9E6E] uppercase">
              // 05
            </span>
            <h2 className="font-mono-code text-lg sm:text-xl font-bold tracking-tight text-[#FFFFFF]">
              NOW
            </h2>
            <span className="hidden sm:inline text-xs font-mono-code text-[#444444]">
              — CURRENT RUNTIMES &amp; FOCUS
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono-code text-[11px] text-[#777777]">
            <Clock className="h-3.5 w-3.5 text-[#555555]" />
            <span>Last updated · <strong className="text-[#A3A3A3] font-medium">September 2026</strong></span>
          </div>
        </div>

        {/* 3-Column Focus Layout: BUILDING, THINKING ABOUT, WRITING ABOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 01: BUILDING */}
          <div className="border border-[#202020] bg-[#101010] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono-code text-xs mb-4 pb-2 border-b border-[#1A1A1A]">
                <span className="text-[#1A9E6E] font-medium uppercase tracking-wider">
                  BUILDING
                </span>
                <span className="text-[#444444] text-[10px]">01</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#FFFFFF] tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#1A9E6E]" />
                    THRYVIX
                  </h3>
                  <p className="mt-1.5 text-sm text-[#A3A3A3] leading-relaxed">
                    Organisational intelligence infrastructure. Health is the first vertical.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1C1C]">
                  <h3 className="text-xl font-bold text-[#FFFFFF] tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#1A9E6E]" />
                    COGEXT
                  </h3>
                  <p className="mt-1.5 text-sm text-[#A3A3A3] leading-relaxed">
                    Accountability infrastructure for machine intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 02: THINKING ABOUT */}
          <div className="border border-[#202020] bg-[#101010] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono-code text-xs mb-4 pb-2 border-b border-[#1A1A1A]">
                <span className="text-[#1A9E6E] font-medium uppercase tracking-wider">
                  THINKING ABOUT
                </span>
                <span className="text-[#444444] text-[10px]">02</span>
              </div>

              <ul className="space-y-3.5 text-sm text-[#D4D4D4] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-mono-code text-xs text-[#555555] mt-0.5">→</span>
                  <span>Useful intelligence per unit of compute.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono-code text-xs text-[#555555] mt-0.5">→</span>
                  <span>AI agents and external verification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono-code text-xs text-[#555555] mt-0.5">→</span>
                  <span>Organisational memory.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono-code text-xs text-[#555555] mt-0.5">→</span>
                  <span>Infrastructure for machine intelligence.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 03: WRITING ABOUT */}
          <div className="border border-[#202020] bg-[#101010] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono-code text-xs mb-4 pb-2 border-b border-[#1A1A1A]">
                <span className="text-[#1A9E6E] font-medium uppercase tracking-wider">
                  WRITING ABOUT
                </span>
                <span className="text-[#444444] text-[10px]">03</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 font-mono-code text-xs">
                {['AI', 'Systems', 'Engineering', 'Startups', 'Infrastructure', 'India'].map((topic) => (
                  <div
                    key={topic}
                    className="border border-[#222222] bg-[#141414] p-2.5 text-[#CCCCCC] flex items-center justify-between"
                  >
                    <span>{topic}</span>
                    <span className="text-[10px] text-[#555555]">/</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#1C1C1C] font-mono-code text-[11px] text-[#666666]">
              Cataloged in public notes &amp; field dispatches.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

