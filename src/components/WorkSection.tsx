import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowRight, ArrowUpRight, X, ExternalLink } from 'lucide-react';

interface WorkSectionProps {
  projects: Project[];
  onNavigateToNote?: (slug: string) => void;
  onNavigateToBuildLog?: (id: string) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({
  projects,
  onNavigateToNote,
  onNavigateToBuildLog
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="w-full border-b border-[#1C1C1C] py-16 sm:py-24 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#222222] pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-semibold tracking-widest text-[#1A9E6E] uppercase">
              // 06
            </span>
            <h2 className="font-mono-code text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF]">
              WORK
            </h2>
          </div>
          <span className="font-mono-code text-xs text-[#555555]">
            FOUNDED INFRASTRUCTURE · 2026
          </span>
        </div>

        {/* Horizontal Project Rows */}
        <div className="divide-y divide-[#1C1C1C] border-y border-[#1C1C1C]">
          {projects.map((project) => {
            const isHovered = hoveredId === project.id;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative transition-all duration-300 py-10 sm:py-14 px-4 sm:px-8 ${
                  isHovered ? 'bg-[#111111]' : 'bg-transparent'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-10">
                  
                  {/* Left: Number + Title + Tagline + Core Principle */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`font-mono-code text-xs sm:text-sm tracking-widest transition-colors ${
                        isHovered ? 'text-[#1A9E6E]' : 'text-[#555555]'
                      }`}>
                        {isHovered ? `[${project.number}]` : project.number}
                      </span>
                      <span className="font-mono-code text-[11px] text-[#555555] uppercase tracking-wider">
                        {project.status}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-4 flex-wrap">
                      <h3 className={`text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFFFF] transition-transform duration-200 ${
                        isHovered ? 'translate-x-1 sm:translate-x-2 text-[#FFFFFF]' : ''
                      }`}>
                        {project.title}
                      </h3>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-mono-code text-xs text-[#1A9E6E] hover:underline"
                        >
                          <span>VISIT LIVE</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>

                    <p className="mt-2 text-lg sm:text-xl text-[#A3A3A3] font-editorial italic">
                      {project.tagline}
                    </p>

                    {project.corePrinciple && (
                      <div className="mt-3 p-3 border-l-2 border-[#1A9E6E] bg-[#141414] text-xs font-mono-code text-[#E5E5E5]">
                        <span className="text-[#888888]">CORE PRINCIPLE: </span>
                        <span>{project.corePrinciple}</span>
                      </div>
                    )}

                    <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#777777] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metadata strip & Knowledge Graph Links */}
                    <div className="mt-6 flex flex-wrap items-center gap-3 font-mono-code text-xs text-[#666666]">
                      <span className="text-[#A3A3A3]">{project.year}</span>
                      <span>·</span>
                      <span className="text-[#A3A3A3]">{project.role}</span>
                      <span>·</span>
                      <span>{project.categories.join(' · ')}</span>

                      {project.relatedArticleSlug && onNavigateToNote && (
                        <>
                          <span>·</span>
                          <button
                            onClick={() => onNavigateToNote(project.relatedArticleSlug!)}
                            className="text-[#1A9E6E] hover:underline"
                          >
                            [READ ESSAY]
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right: Technical preview schematic on hover + Action Trigger */}
                  <div className="flex flex-col items-start lg:items-end justify-between self-stretch gap-6">
                    
                    {/* Interactive Architectural Blueprint Snippet */}
                    <div className={`hidden lg:block border border-[#222222] bg-[#0E0E0E] p-3 text-left w-64 transition-opacity duration-300 font-mono-code text-[10px] text-[#888888] ${
                      isHovered ? 'opacity-100 border-[#1A9E6E]/40' : 'opacity-40'
                    }`}>
                      <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#202020] text-[#1A9E6E]">
                        <span>SYSTEM SPEC</span>
                        <span>{project.number}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[#A3A3A3] font-medium">{project.architectureDetails[0]?.label}</div>
                        <div className="text-[#555555] truncate">{project.architectureDetails[0]?.desc}</div>
                      </div>
                    </div>

                    {/* Action Trigger */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group/btn flex items-center gap-2 border border-[#2A2A2A] group-hover:border-[#1A9E6E] bg-[#141414] px-4 py-2.5 font-mono-code text-xs text-[#E5E5E5] group-hover:text-[#FFFFFF] transition-all focus:outline-none"
                    >
                      <span>VIEW FULL ARCHITECTURE</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#666666] group-hover/btn:text-[#1A9E6E] group-hover/btn:translate-x-1 transition-all" />
                    </button>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal / Architectural Inspection Sheet */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#2A2A2A] bg-[#0E0E0E] p-6 sm:p-10 shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#222222] pb-5">
              <div>
                <div className="flex items-center gap-3 font-mono-code text-xs text-[#1A9E6E] mb-2">
                  <span>{selectedProject.number}</span>
                  <span>//</span>
                  <span className="text-[#888888]">{selectedProject.year} · {selectedProject.role}</span>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.url && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono-code text-xs border border-[#1A9E6E]/50 bg-[#1A9E6E]/10 text-[#1A9E6E] px-2.5 py-1 hover:bg-[#1A9E6E]/20 transition-colors"
                    >
                      <span>{selectedProject.url.replace('https://', '')}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
                <p className="mt-1 text-base sm:text-lg text-[#A3A3A3] font-editorial italic">
                  {selectedProject.tagline}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 text-[#888888] hover:text-white border border-[#262626] bg-[#141414] hover:bg-[#202020] transition-colors focus:outline-none"
                aria-label="Close project modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Core Principle Callout */}
            {selectedProject.corePrinciple && (
              <div className="my-6 p-4 border border-[#1A9E6E]/40 bg-[#121814]">
                <span className="block font-mono-code text-xs text-[#1A9E6E] uppercase tracking-widest mb-1">
                  Core Principle
                </span>
                <p className="text-sm font-mono-code text-[#E5E5E5]">
                  {selectedProject.corePrinciple}
                </p>
              </div>
            )}

            {/* Core Thesis */}
            <div className="py-6 border-b border-[#222222]">
              <span className="block font-mono-code text-xs uppercase tracking-widest text-[#666666] mb-2">
                Core Thesis &amp; Problem
              </span>
              <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
                {selectedProject.thesis}
              </p>
            </div>

            {/* Sub-system Architectural Details */}
            <div className="py-6 border-b border-[#222222]">
              <span className="block font-mono-code text-xs uppercase tracking-widest text-[#666666] mb-4">
                Architectural Subsystems
              </span>
              <div className="grid grid-cols-1 gap-4">
                {selectedProject.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="border border-[#222222] bg-[#121212] p-4">
                    <div className="font-mono-code text-xs text-[#1A9E6E] font-medium mb-1">
                      0{idx + 1}. {detail.label}
                    </div>
                    <p className="text-sm text-[#999999] leading-relaxed">
                      {detail.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Stack */}
            <div className="pt-6">
              <span className="block font-mono-code text-xs uppercase tracking-widest text-[#666666] mb-3">
                Implementation Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono-code text-xs border border-[#222222] bg-[#141414] px-2.5 py-1 text-[#A3A3A3]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Close / Action Footer */}
            <div className="mt-8 pt-4 border-t border-[#222222] flex items-center justify-between font-mono-code text-xs">
              <span className="text-[#555555]">BUILDING FROM KERALA, INDIA</span>
              <button
                onClick={() => setSelectedProject(null)}
                className="border border-[#333333] hover:border-[#1A9E6E] bg-[#161616] px-4 py-2 text-white transition-colors"
              >
                CLOSE SPEC
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

