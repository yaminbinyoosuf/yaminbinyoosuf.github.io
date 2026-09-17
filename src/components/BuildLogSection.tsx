import React, { useState } from 'react';
import { BuildLogEntry } from '../types';
import { Terminal, GitCommit, ChevronDown, ChevronUp, Code2 } from 'lucide-react';

interface BuildLogSectionProps {
  logs: BuildLogEntry[];
  onOpenArticle?: (slug: string) => void;
}

export const BuildLogSection: React.FC<BuildLogSectionProps> = ({ logs, onOpenArticle }) => {
  const [expandedId, setExpandedId] = useState<string | null>(logs[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="build" className="w-full border-b border-[#1C1C1C] py-16 sm:py-24 bg-[#0B0B0B]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#222222] pb-4 mb-10 gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-semibold tracking-widest text-[#1A9E6E] uppercase">
              // 07
            </span>
            <h2 className="font-mono-code text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF]">
              BUILD LOG
            </h2>
            <span className="hidden sm:inline text-xs font-mono-code text-[#444444]">
              — PUBLIC ENGINEERING NOTEBOOK
            </span>
          </div>

          <div className="font-mono-code text-xs text-[#666666]">
            RAW PRODUCTION LOGS &amp; ARCHITECTURAL DECISIONS
          </div>
        </div>

        {/* Notebook entries list */}
        <div className="space-y-4">
          {logs.map((log) => {
            const isExpanded = expandedId === log.id;
            return (
              <div
                key={log.id}
                className={`border transition-all duration-200 ${
                  isExpanded
                    ? 'border-[#333333] bg-[#111111]'
                    : 'border-[#1E1E1E] bg-[#0E0E0E] hover:border-[#2A2A2A]'
                }`}
              >
                {/* Clickable Header Bar */}
                <button
                  onClick={() => toggleExpand(log.id)}
                  className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 font-mono-code text-xs mb-2">
                      <span className="text-[#888888] font-medium">{log.date}</span>
                      <span className="text-[#444444]">/</span>
                      <span className="text-[#1A9E6E] text-[11px] tracking-wider uppercase">
                        {log.category}
                      </span>
                      {log.commitRef && (
                        <span className="flex items-center gap-1 text-[11px] text-[#555555] bg-[#161616] px-1.5 py-0.5 border border-[#222222]">
                          <GitCommit className="h-2.5 w-2.5" />
                          <span>{log.commitRef}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-[#FFFFFF] tracking-tight">
                      {log.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#888888] max-w-3xl leading-relaxed">
                      {log.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center font-mono-code text-xs text-[#666666]">
                    <span className="hidden sm:inline">
                      {isExpanded ? 'COLLAPSE' : 'INSPECT'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4 text-[#1A9E6E]" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-[#666666]" />
                    )}
                  </div>
                </button>

                {/* Expanded Details / Notebook content */}
                {isExpanded && (
                  <div className="border-t border-[#1C1C1C] px-5 sm:px-6 pb-6 pt-4 bg-[#0B0B0B]/80 font-mono-code text-xs sm:text-sm">
                    <div className="mb-3 text-[11px] text-[#555555] tracking-wider uppercase">
                      // ENGINEERING DELTAS &amp; DECISION LOG
                    </div>

                    <div className="space-y-3 text-[#B0B0B0] leading-relaxed">
                      {log.detailedLog?.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#1A9E6E] font-bold select-none">&gt;</span>
                          <span className="font-sans text-sm text-[#C8C8C8]">{step}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#181818] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {log.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] text-[#666666] border border-[#222222] bg-[#121212] px-2 py-0.5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {onOpenArticle && (
                        <button
                          onClick={() => {
                            if (log.id === 'log-01') onOpenArticle('the-accountability-problem-with-ai-agents');
                            else if (log.id === 'log-02') onOpenArticle('what-shipping-a-production-system-taught-me');
                            else if (log.id === 'log-03') onOpenArticle('the-difference-between-an-ai-feature-and-an-ai-system');
                            else onOpenArticle('why-i-still-like-building-everything-myself');
                          }}
                          className="text-[11px] text-[#1A9E6E] hover:underline flex items-center gap-1"
                        >
                          READ RELATED PUBLICATION →
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
