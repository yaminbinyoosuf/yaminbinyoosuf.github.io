import React, { useState } from 'react';
import { ExperimentItem } from '../types';
import { FlaskConical, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperimentsSectionProps {
  experiments: ExperimentItem[];
}

export const ExperimentsSection: React.FC<ExperimentsSectionProps> = ({ experiments }) => {
  const [activeExpId, setActiveExpId] = useState<string>(experiments[0]?.id || '');

  return (
    <section id="experiments" className="w-full border-b border-[#1C1C1C] py-16 sm:py-24 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#222222] pb-4 mb-10 gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-semibold tracking-widest text-[#1A9E6E] uppercase">
              // 11
            </span>
            <h2 className="font-mono-code text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF]">
              EXPERIMENTS
            </h2>
            <span className="hidden sm:inline text-xs font-mono-code text-[#444444]">
              — PROTOTYPES, FAILED IDEAS, &amp; TECHNICAL PROOFS
            </span>
          </div>

          <span className="font-mono-code text-xs text-[#666666]">
            NOT A POLISHED PORTFOLIO · RAW LAB WORK
          </span>
        </div>

        {/* Experiment Grid / Tab selection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Experiment Selection List (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {experiments.map((exp) => {
              const isActive = activeExpId === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`w-full text-left p-4 border transition-all focus:outline-none ${
                    isActive
                      ? 'border-[#1A9E6E] bg-[#121212] text-white'
                      : 'border-[#1E1E1E] bg-[#0E0E0E] text-[#888888] hover:border-[#2A2A2A] hover:text-[#CCCCCC]'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono-code text-[10px] mb-1">
                    <span className={isActive ? 'text-[#1A9E6E]' : 'text-[#555555]'}>
                      {exp.number}
                    </span>
                    <span className="text-[9px] border border-[#222222] px-1 py-0.2">
                      {exp.status}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#666666] line-clamp-1 mt-0.5">
                    {exp.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Experiment Lab Dossier (8 cols) */}
          <div className="lg:col-span-8">
            {(() => {
              const exp = experiments.find(e => e.id === activeExpId) || experiments[0];
              if (!exp) return null;

              return (
                <div className="border border-[#222222] bg-[#0E0E0E] p-6 sm:p-8">
                  
                  {/* Dossier Header */}
                  <div className="border-b border-[#1E1E1E] pb-5 mb-6">
                    <div className="flex items-center justify-between font-mono-code text-xs text-[#1A9E6E] mb-2">
                      <span>{exp.number}</span>
                      <span className="border border-[#1A9E6E]/40 bg-[#1A9E6E]/10 px-2 py-0.5 text-[10px] text-[#1A9E6E]">
                        STATUS: {exp.status}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#A3A3A3] font-editorial italic">
                      {exp.subtitle}
                    </p>
                  </div>

                  {/* 5-Field Breakdown: Problem, Hypothesis, What I built, What happened, What I learned */}
                  <div className="space-y-6 font-mono-code text-xs">
                    
                    {/* Problem */}
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#666666] mb-1">
                        01. THE PROBLEM
                      </span>
                      <p className="font-sans text-sm text-[#C4C4C4] leading-relaxed">
                        {exp.problem}
                      </p>
                    </div>

                    {/* Hypothesis */}
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#666666] mb-1">
                        02. HYPOTHESIS
                      </span>
                      <p className="font-sans text-sm text-[#C4C4C4] leading-relaxed">
                        {exp.hypothesis}
                      </p>
                    </div>

                    {/* What I Built */}
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#666666] mb-1">
                        03. WHAT I BUILT
                      </span>
                      <p className="font-sans text-sm text-[#C4C4C4] leading-relaxed">
                        {exp.whatIBuilt}
                      </p>
                    </div>

                    {/* What Happened */}
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#666666] mb-1">
                        04. WHAT HAPPENED (EXPERIMENTAL OUTCOME)
                      </span>
                      <p className="font-sans text-sm text-[#D4D4D4] leading-relaxed bg-[#141414] p-3 border border-[#202020]">
                        {exp.whatHappened}
                      </p>
                    </div>

                    {/* What I Learned */}
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#1A9E6E] mb-1">
                        05. WHAT I LEARNED
                      </span>
                      <p className="font-sans text-sm text-[#FFFFFF] leading-relaxed font-medium">
                        {exp.whatILearned}
                      </p>
                    </div>

                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-8 pt-5 border-t border-[#1C1C1C] flex flex-wrap items-center gap-2">
                    <span className="font-mono-code text-[10px] text-[#555555] mr-2">TECH LAB:</span>
                    {exp.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="font-mono-code text-[10px] border border-[#222222] bg-[#121212] px-2 py-0.5 text-[#888888]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
};
