import React, { useState } from 'react';
import { Article } from '../types';
import { ArrowRight, Clock } from 'lucide-react';

interface NotesSectionProps {
  articles: Article[];
  onSelectArticle: (slug: string) => void;
}

export const NotesSection: React.FC<NotesSectionProps> = ({ articles, onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'AI',
    'ENGINEERING',
    'SYSTEMS',
    'STARTUPS',
    'INFRASTRUCTURE',
    'INDIA',
    'BUILDING',
    'SOCIETY'
  ];

  const filteredArticles = selectedCategory === 'ALL'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <section id="notes" className="w-full border-b border-[#1C1C1C] py-16 sm:py-24 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Publication Header */}
        <div className="border-b border-[#222222] pb-8 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono-code text-xs font-semibold tracking-widest text-[#1A9E6E] uppercase">
              // 08
            </span>
            <h2 className="font-mono-code text-xs sm:text-sm uppercase tracking-[0.2em] text-[#888888]">
              INDEPENDENT PUBLICATION
            </h2>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFFFF]">
            NOTES
          </h1>
          <p className="mt-2 text-base sm:text-lg text-[#888888] font-editorial italic">
            Things I’m thinking about while building.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2 font-mono-code text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 border transition-all focus:outline-none ${
                  selectedCategory === cat
                    ? 'border-[#1A9E6E] bg-[#1A9E6E]/10 text-[#FFFFFF]'
                    : 'border-[#222222] bg-[#111111] text-[#777777] hover:border-[#333333] hover:text-[#CCCCCC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Chronological Archive Grouped by Year */}
        <div className="mt-6">
          <div className="font-mono-code text-xs font-semibold tracking-widest text-[#555555] mb-6 flex items-center gap-3">
            <span>CHRONOLOGICAL INDEX · 2026</span>
            <div className="flex-1 h-[1px] bg-[#1C1C1C]" />
          </div>

          <div className="divide-y divide-[#1C1C1C] border-y border-[#1C1C1C]">
            {filteredArticles.map((article) => {
              // Parse month & day for the aesthetic list display
              const parts = article.formattedDate.split(' ');
              const month = parts[0]?.substring(0, 3).toUpperCase() || 'SEP';
              const day = parts[1]?.replace(',', '') || '17';

              return (
                <article
                  key={article.slug}
                  onClick={() => onSelectArticle(article.slug)}
                  className="group cursor-pointer py-6 sm:py-8 px-2 sm:px-4 hover:bg-[#101010] transition-colors flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8 flex-1">
                    {/* Date Block */}
                    <div className="font-mono-code text-xs text-[#666666] w-16 shrink-0 group-hover:text-[#1A9E6E] transition-colors">
                      <span className="font-medium text-[#888888]">{month}</span> {day}
                    </div>

                    {/* Title + Excerpt + Knowledge Graph Badges */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#E5E5E5] group-hover:text-[#FFFFFF] group-hover:translate-x-1 transition-all">
                          {article.title}
                        </h3>
                        {article.relatedProjectId && (
                          <span className="font-mono-code text-[10px] uppercase px-1.5 py-0.5 border border-[#1A9E6E]/40 text-[#1A9E6E] bg-[#121814]">
                            {article.relatedProjectId}
                          </span>
                        )}
                      </div>
                      
                      <p className="mt-1 text-sm text-[#777777] line-clamp-2 sm:line-clamp-1 max-w-2xl font-normal leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Metadata and Arrow */}
                  <div className="flex items-center gap-4 sm:gap-6 font-mono-code text-xs text-[#555555] self-end sm:self-baseline">
                    <span className="border border-[#222222] bg-[#141414] px-2 py-0.5 text-[11px] text-[#888888]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-[#666666] text-[11px]">
                      <Clock className="h-3 w-3" />
                      {article.readingTime}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#444444] group-hover:text-[#1A9E6E] group-hover:translate-x-1 transition-all" />
                  </div>
                </article>
              );
            })}
          </div>

          {filteredArticles.length === 0 && (
            <div className="py-12 text-center font-mono-code text-xs text-[#555555]">
              No articles cataloged under {selectedCategory} yet.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

