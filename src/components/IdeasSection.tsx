import React, { useState } from 'react';
import { IdeaItem } from '../types';
import { Copy, Check, MessageSquare } from 'lucide-react';

interface IdeasSectionProps {
  ideas: IdeaItem[];
}

export const IdeasSection: React.FC<IdeasSectionProps> = ({ ideas }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCopy = (statement: string, id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`"${statement}" — Yamin Bin Yoosuf`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="ideas" className="w-full border-b border-[#1C1C1C] py-16 sm:py-24 bg-[#0B0B0B]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#222222] pb-4 mb-10 gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-semibold tracking-widest text-[#1A9E6E] uppercase">
              // 10
            </span>
            <h2 className="font-mono-code text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF]">
              IDEAS
            </h2>
            <span className="hidden sm:inline text-xs font-mono-code text-[#444444]">
              — PUBLIC IDEA WALL
            </span>
          </div>

          <span className="font-mono-code text-xs text-[#666666]">
            NOT FINISHED ARTICLES · SYSTEM OBSERVATIONS
          </span>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {ideas.map((idea) => {
            const isExpanded = expandedId === idea.id;
            return (
              <div
                key={idea.id}
                onClick={() => toggleExpand(idea.id)}
                className="group cursor-pointer border border-[#202020] hover:border-[#333333] bg-[#0E0E0E] hover:bg-[#121212] p-6 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono-code text-[11px] text-[#666666] mb-4">
                    <span className="text-[#1A9E6E] font-medium">{idea.category}</span>
                    <div className="flex items-center gap-2">
                      <span>{idea.date}</span>
                      <button
                        onClick={(e) => handleCopy(idea.statement, idea.id, e)}
                        className="p-1 hover:text-white transition-colors"
                        title="Copy statement"
                      >
                        {copiedId === idea.id ? (
                          <Check className="h-3 w-3 text-[#1A9E6E]" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </button>
                    </div>
                  </div>

                  <blockquote className="font-editorial text-xl sm:text-2xl text-[#E5E5E5] leading-snug group-hover:text-[#FFFFFF] transition-colors italic">
                    “{idea.statement}”
                  </blockquote>

                  {idea.context && (
                    <div className="mt-4 pt-3 border-t border-[#1C1C1C]">
                      <p className={`text-xs sm:text-sm text-[#888888] leading-relaxed ${
                        isExpanded ? '' : 'line-clamp-2'
                      }`}>
                        {idea.context}
                      </p>
                      <span className="mt-2 inline-block font-mono-code text-[10px] text-[#1A9E6E]">
                        {isExpanded ? '[ COLLAPSE THOUGHT ]' : '[ READ EXPANDED CONTEXT ]'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
