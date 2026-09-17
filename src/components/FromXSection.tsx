import React from 'react';
import { TweetItem } from '../types';
import { ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react';

interface FromXSectionProps {
  tweets: TweetItem[];
  onNavigateToNote?: (slug: string) => void;
  onNavigateToProject?: (id: string) => void;
}

export const FromXSection: React.FC<FromXSectionProps> = ({
  tweets,
  onNavigateToNote,
  onNavigateToProject
}) => {
  return (
    <section id="from-x" className="w-full border-b border-[#1C1C1C] py-16 sm:py-24 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#222222] pb-6 mb-10 gap-3">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono-code text-xs font-semibold tracking-widest text-[#1A9E6E] uppercase">
                // 07
              </span>
              <h2 className="font-mono-code text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF]">
                FROM X
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#888888] font-editorial italic">
              Fragments of what I’m thinking.
            </p>
          </div>

          <a
            href="https://x.com/yaminbinyoosuf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono-code text-xs text-[#888888] hover:text-[#FFFFFF] transition-colors self-start sm:self-auto"
          >
            <span>@YAMINBINYOOSUF</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#555555]" />
          </a>
        </div>

        {/* 2-Column Responsive Editorial Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {tweets.map((tweet) => {
            const isFeatured = tweet.isProminent;

            return (
              <div
                key={tweet.id}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 border transition-all duration-200 ${
                  isFeatured
                    ? 'md:col-span-2 border-[#1A9E6E]/60 bg-[#121814] shadow-[0_0_20px_rgba(26,158,110,0.08)]'
                    : 'border-[#202020] hover:border-[#333333] bg-[#0E0E0E]'
                }`}
              >
                {/* Card Top: Number + Category + Date */}
                <div>
                  <div className="flex items-center justify-between font-mono-code text-[11px] mb-4 text-[#777777] border-b border-[#1C1C1C] pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className={isFeatured ? 'text-[#1A9E6E] font-medium' : 'text-[#888888]'}>
                        [{tweet.number}]
                      </span>
                      <span>·</span>
                      <span className="text-[#A3A3A3] tracking-wide">
                        {tweet.category}
                      </span>
                    </div>
                    <span>{tweet.date}</span>
                  </div>

                  {/* Tweet Body */}
                  <div className="whitespace-pre-line text-[#E5E5E5] text-base sm:text-lg leading-relaxed font-normal">
                    {isFeatured ? (
                      <span className="font-medium text-[#FFFFFF] text-lg sm:text-xl font-editorial italic block">
                        “{tweet.text}”
                      </span>
                    ) : (
                      tweet.text
                    )}
                  </div>
                </div>

                {/* Card Bottom: Actions & Knowledge Graph Links */}
                <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex flex-wrap items-center justify-between gap-3 font-mono-code text-xs">
                  
                  {/* Left: Related Note or Project Links */}
                  <div className="flex flex-wrap items-center gap-3 text-[11px]">
                    {tweet.relatedArticleSlug && onNavigateToNote && (
                      <button
                        onClick={() => onNavigateToNote(tweet.relatedArticleSlug!)}
                        className="flex items-center gap-1 text-[#1A9E6E] hover:underline focus:outline-none"
                      >
                        <span>READ RELATED NOTE</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    )}

                    {tweet.relatedProjectId && onNavigateToProject && (
                      <button
                        onClick={() => onNavigateToProject(tweet.relatedProjectId!)}
                        className="text-[#888888] hover:text-white uppercase tracking-wider"
                      >
                        [{tweet.relatedProjectId.toUpperCase()} SPEC]
                      </button>
                    )}

                    {tweet.devToUrl && (
                      <span className="text-[#666666]">
                        DEV.TO WRITEUP AVAILABLE
                      </span>
                    )}
                  </div>

                  {/* Right: View on X Link */}
                  <a
                    href={tweet.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[#888888] hover:text-white transition-colors"
                  >
                    <span>VIEW ON X</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#555555]" />
                  </a>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
