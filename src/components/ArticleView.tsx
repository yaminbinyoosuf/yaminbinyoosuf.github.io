import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { ArrowLeft, Clock, Calendar, Tag, Share2, Check, ArrowRight, BookOpen, Copy } from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  allArticles: Article[];
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  allArticles,
  onBack,
  onSelectArticle
}) => {
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll reading progress indicator
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      // Calculate progress relative to the main reading article container
      const mainEl = document.querySelector('main');
      if (mainEl) {
        const rect = mainEl.getBoundingClientRect();
        const mainTop = rect.top + window.scrollY;
        const mainHeight = rect.height;
        const startY = mainTop - 100;
        const endY = mainTop + mainHeight - window.innerHeight * 0.75;
        const currentY = window.scrollY;

        if (currentY <= startY) {
          setScrollProgress(0);
        } else if (currentY >= endY) {
          setScrollProgress(100);
        } else {
          const pct = ((currentY - startY) / (endY - startY)) * 100;
          setScrollProgress(Math.min(100, Math.max(0, pct)));
        }
      } else {
        const totalScroll = document.documentElement.scrollTop || window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
        setScrollProgress(Math.min(100, Math.max(0, scroll)));
      }

      setIsScrolled(window.scrollY > 160);

      // Active TOC section detection
      if (article.toc) {
        for (const item of article.toc) {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140) {
              setActiveHeading(item.id);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  // Find previous and next articles
  const currentIndex = allArticles.findIndex(a => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  // Related notes (same category or others)
  const relatedNotes = allArticles
    .filter(a => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <div className="w-full bg-[#0A0A0A] text-[#E5E5E5] min-h-screen">
      
      {/* Subtle Scroll-Based Reading Progress Indicator (Fixed directly below sticky header) */}
      <div 
        className="fixed top-14 left-0 right-0 z-50 pointer-events-none"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Article reading progress"
      >
        {/* Subtle Hairline Background Track */}
        <div className="h-[2px] sm:h-[2.5px] w-full bg-[#161616]/90 backdrop-blur-sm overflow-hidden">
          {/* Active Emerald Progress Fill with glowing trailing stop */}
          <div
            className="h-full bg-gradient-to-r from-[#1A9E6E] via-[#1EB37D] to-[#22C55E] transition-[width] duration-150 ease-out relative"
            style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
          >
            {/* Subtle luminous tip indicator */}
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-r from-transparent to-white/40 shadow-[0_0_8px_rgba(26,158,110,0.8)]" />
          </div>
        </div>

        {/* Floating Contextual Reading Sub-bar (Smoothly fades in when reader scrolls into the essay) */}
        <div
          className={`w-full border-b border-[#1E1E1E] bg-[#0A0A0A]/95 backdrop-blur-md px-4 sm:px-6 py-2 transition-all duration-300 pointer-events-auto flex items-center justify-between shadow-lg shadow-black/50 ${
            isScrolled
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-2.5 truncate max-w-[65%] sm:max-w-[75%] font-mono-code text-[11px]">
            <span className="text-[#1A9E6E] font-semibold tracking-wider shrink-0 uppercase">
              {article.category}
            </span>
            <span className="text-[#444444] shrink-0">/</span>
            <span className="text-[#E0E0E0] truncate font-sans text-xs font-medium">
              {article.title}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 font-mono-code text-[11px]">
            <span className="text-[#666666] hidden md:inline">
              {article.readingTime}
            </span>
            <div className="flex items-center gap-1.5 border border-[#222222] bg-[#121212] px-2 py-0.5 text-[#1A9E6E]">
              <span className="tabular-nums font-semibold">
                {Math.round(scrollProgress)}%
              </span>
              <span className="text-[10px] text-[#666666]">READ</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 sm:pt-14 pb-20">
        
        {/* Back Navigation */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 font-mono-code text-xs text-[#888888] hover:text-[#FFFFFF] transition-colors focus:outline-none"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>RETURN TO NOTES ARCHIVE</span>
          </button>
        </div>

        {/* 3-Column Desktop Layout (Left: Metadata, Center: Content, Right: TOC) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT: Article Metadata Column (3 cols) */}
          <aside className="lg:col-span-3 order-2 lg:order-1 border-t lg:border-t-0 border-[#1F1F1F] pt-6 lg:pt-0">
            <div className="lg:sticky lg:top-24 space-y-6 font-mono-code text-xs">
              
              {/* Category */}
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#555555] mb-1">
                  DISCIPLINE
                </span>
                <span className="border border-[#2A2A2A] bg-[#121212] px-2.5 py-1 text-[#1A9E6E] font-medium inline-block">
                  {article.category}
                </span>
              </div>

              {/* Date & Reading time */}
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#555555] mb-1">
                  PUBLISHED
                </span>
                <div className="text-[#C0C0C0] font-sans">
                  {article.formattedDate}
                </div>
                <div className="text-[#777777] text-[11px] mt-0.5">
                  {article.readingTime}
                </div>
              </div>

              {/* Author */}
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#555555] mb-1">
                  AUTHOR
                </span>
                <div className="text-[#F5F5F3] font-medium font-sans">
                  Yamin Bin Yoosuf
                </div>
                <div className="text-[#666666] text-[11px]">
                  Kerala, India
                </div>
              </div>

              {/* Tags */}
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#555555] mb-1.5">
                  TOPICS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="border border-[#202020] bg-[#111111] px-2 py-0.5 text-[10px] text-[#888888]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Knowledge Graph Connections */}
              {(article.relatedProjectId || article.relatedTweetId || article.relatedBuildLogId || article.relatedIdeaId) && (
                <div className="pt-3 border-t border-[#1C1C1C]">
                  <span className="block text-[10px] uppercase tracking-widest text-[#1A9E6E] mb-2">
                    KNOWLEDGE GRAPH CONNECTIONS
                  </span>
                  <div className="space-y-2">
                    {article.relatedProjectId && (
                      <div className="border border-[#1A9E6E]/30 bg-[#121814] p-2 text-[11px] text-[#A3A3A3]">
                        <span className="text-[#1A9E6E] font-medium block">PROJECT SPEC:</span>
                        <span className="uppercase text-[#FFFFFF] font-bold">{article.relatedProjectId}</span>
                      </div>
                    )}
                    {article.relatedBuildLogId && (
                      <div className="border border-[#222222] bg-[#111111] p-2 text-[11px] text-[#888888]">
                        <span className="text-[#A3A3A3] block">SHIPPED IN BUILD LOG:</span>
                        <span>{article.relatedBuildLogId.toUpperCase()}</span>
                      </div>
                    )}
                    {article.relatedTweetId && (
                      <div className="border border-[#222222] bg-[#111111] p-2 text-[11px] text-[#888888]">
                        <span className="text-[#A3A3A3] block">ORIGIN THESIS ON X:</span>
                        <span>{article.relatedTweetId.toUpperCase()}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Share / Copy */}
              <div className="pt-2 border-t border-[#1C1C1C]">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 border border-[#242424] hover:border-[#3E3E3E] bg-[#121212] px-3 py-1.5 text-[11px] text-[#A3A3A3] hover:text-white transition-colors focus:outline-none"
                >
                  {copied ? <Check className="h-3 w-3 text-[#1A9E6E]" /> : <Share2 className="h-3 w-3" />}
                  <span>{copied ? 'LINK COPIED' : 'COPY ARTICLE LINK'}</span>
                </button>
              </div>

            </div>
          </aside>

          {/* CENTER: Main Article Content Column (6 cols, max ~720px) */}
          <main className="lg:col-span-6 order-1 lg:order-2 max-w-[740px]">
            
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFFFFF] leading-[1.14]">
              {article.title}
            </h1>

            {/* Sub-strip on Mobile */}
            <div className="mt-4 flex lg:hidden items-center gap-3 font-mono-code text-xs text-[#777777] border-b border-[#202020] pb-4">
              <span className="text-[#1A9E6E]">{article.category}</span>
              <span>·</span>
              <span>{article.formattedDate}</span>
              <span>·</span>
              <span>{article.readingTime}</span>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-[#D1D1D1] font-editorial italic leading-relaxed">
              {article.excerpt}
            </p>

            <div className="my-8 h-[1px] bg-[#222222]" />

            {/* Article Content Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-[#CCCCCC] leading-[1.75] font-normal">
              {article.content.map((paragraph, index) => {
                // Check if this paragraph matches a TOC heading anchor
                const tocItem = article.toc?.[index];

                return (
                  <div key={index} className="space-y-4">
                    {tocItem && index > 0 && (
                      <h2
                        id={tocItem.id}
                        className="text-xl sm:text-2xl font-bold text-[#FFFFFF] tracking-tight pt-6 pb-1 font-sans border-b border-[#1E1E1E]"
                      >
                        {tocItem.text}
                      </h2>
                    )}
                    <p>{paragraph}</p>
                  </div>
                );
              })}
            </div>

            {/* Pull Quote */}
            {article.pullQuote && (
              <figure className="my-10 border-l-2 border-[#1A9E6E] pl-6 py-2 bg-[#121212]/50">
                <blockquote className="font-editorial text-xl sm:text-2xl italic text-[#F5F5F3] leading-snug">
                  “{article.pullQuote}”
                </blockquote>
                <figcaption className="mt-3 font-mono-code text-xs text-[#777777] uppercase tracking-wider">
                  — Yamin Bin Yoosuf, Systems Field Note
                </figcaption>
              </figure>
            )}

            {/* Code Snippet (if available) */}
            {article.codeSnippet && (
              <div className="my-8 border border-[#262626] bg-[#0E0E0E]">
                <div className="flex items-center justify-between border-b border-[#222222] bg-[#141414] px-4 py-2 font-mono-code text-[11px] text-[#888888]">
                  <span>{article.codeSnippet.caption || 'SYSTEM INTERFACE'}</span>
                  <button
                    onClick={() => handleCopyCode(article.codeSnippet!.code)}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {codeCopied ? <Check className="h-3 w-3 text-[#1A9E6E]" /> : <Copy className="h-3 w-3" />}
                    <span>{codeCopied ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <pre className="overflow-x-auto p-4 font-mono-code text-xs text-[#D8D8D8] leading-relaxed">
                  <code>{article.codeSnippet.code}</code>
                </pre>
              </div>
            )}

            {/* Footnote divider */}
            <div className="mt-14 pt-8 border-t border-[#202020] font-mono-code text-xs text-[#666666]">
              <p>
                Written and cataloged from Malappuram, Kerala. This article is part of the public research record for THRYVIX and COGEXT.
              </p>
            </div>

            {/* Prev / Next Article Navigation */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#1C1C1C]">
              {prevArticle ? (
                <button
                  onClick={() => onSelectArticle(prevArticle.slug)}
                  className="group text-left border border-[#202020] hover:border-[#333333] bg-[#101010] p-4 transition-all focus:outline-none"
                >
                  <span className="font-mono-code text-[10px] text-[#666666] uppercase tracking-wider block mb-1">
                    ← PREVIOUS NOTE
                  </span>
                  <span className="text-sm font-medium text-[#E5E5E5] group-hover:text-[#1A9E6E] transition-colors line-clamp-1">
                    {prevArticle.title}
                  </span>
                </button>
              ) : <div />}

              {nextArticle && (
                <button
                  onClick={() => onSelectArticle(nextArticle.slug)}
                  className="group text-right border border-[#202020] hover:border-[#333333] bg-[#101010] p-4 transition-all focus:outline-none"
                >
                  <span className="font-mono-code text-[10px] text-[#666666] uppercase tracking-wider block mb-1">
                    NEXT NOTE →
                  </span>
                  <span className="text-sm font-medium text-[#E5E5E5] group-hover:text-[#1A9E6E] transition-colors line-clamp-1">
                    {nextArticle.title}
                  </span>
                </button>
              )}
            </div>

            {/* Related Notes */}
            <div className="mt-12 pt-8 border-t border-[#1F1F1F]">
              <span className="block font-mono-code text-xs uppercase tracking-widest text-[#555555] mb-4">
                RELATED NOTES
              </span>
              <div className="space-y-3">
                {relatedNotes.map((note) => (
                  <button
                    key={note.slug}
                    onClick={() => onSelectArticle(note.slug)}
                    className="w-full text-left flex items-center justify-between p-3 border border-[#1A1A1A] hover:border-[#2E2E2E] bg-[#0D0D0D] hover:bg-[#121212] transition-colors"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-[#D4D4D4] hover:text-white">
                        {note.title}
                      </h4>
                      <span className="font-mono-code text-[11px] text-[#666666]">
                        {note.category} · {note.readingTime}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#444444]" />
                  </button>
                ))}
              </div>
            </div>

          </main>

          {/* RIGHT: Table of Contents / Reading Progress (3 cols) */}
          <aside className="lg:col-span-3 order-3 hidden lg:block">
            <div className="sticky top-24 space-y-4 font-mono-code text-xs">
              <span className="block text-[10px] uppercase tracking-widest text-[#555555]">
                TABLE OF CONTENTS
              </span>

              {article.toc && article.toc.length > 0 ? (
                <ul className="space-y-2 border-l border-[#202020] pl-3 text-[#777777]">
                  {article.toc.map((item) => {
                    const isCurrent = activeHeading === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`block transition-colors py-0.5 leading-snug ${
                            isCurrent
                              ? 'text-[#1A9E6E] font-medium translate-x-1'
                              : 'hover:text-[#D4D4D4]'
                          }`}
                        >
                          {item.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-[#555555] text-[11px]">
                  Unsegmented essay form
                </p>
              )}

              {/* Reading Progress Indicator */}
              <div className="pt-6 border-t border-[#1C1C1C]">
                <div className="flex items-center justify-between text-[11px] text-[#666666] mb-1.5">
                  <span>READING PROGRESS</span>
                  <span className="tabular-nums font-mono-code">{Math.round(scrollProgress)}%</span>
                </div>
                <div className="h-1 bg-[#1A1A1A] w-full">
                  <div
                    className="h-full bg-[#1A9E6E]"
                    style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
                  />
                </div>
              </div>

            </div>
          </aside>

        </div>

      </div>
    </div>
  );
};
