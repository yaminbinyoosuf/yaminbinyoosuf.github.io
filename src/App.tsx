/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LiveStatusBar } from './components/LiveStatusBar';
import { NowSection } from './components/NowSection';
import { WorkSection } from './components/WorkSection';
import { FeaturedThought } from './components/FeaturedThought';
import { FromXSection } from './components/FromXSection';
import { BuildLogSection } from './components/BuildLogSection';
import { NotesSection } from './components/NotesSection';
import { ArticleView } from './components/ArticleView';
import { IdeasSection } from './components/IdeasSection';
import { ExperimentsSection } from './components/ExperimentsSection';
import { AboutSection } from './components/AboutSection';
import { ToolboxSection } from './components/ToolboxSection';
import { GardenSection } from './components/GardenSection';
import { ContactSection } from './components/ContactSection';
import { CommandPalette } from './components/CommandPalette';
import { Footer } from './components/Footer';

import { PROJECTS } from './data/projects';
import { ARTICLES } from './data/articles';
import { BUILD_LOGS } from './data/buildLogs';
import { IDEAS } from './data/ideas';
import { EXPERIMENTS } from './data/experiments';
import { TWEETS } from './data/tweets';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currentArticleSlug, setCurrentArticleSlug] = useState<string | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);

  // Parse URL hash for clean client-side routing & deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash.startsWith('notes/')) {
        const slug = hash.replace('notes/', '');
        setCurrentArticleSlug(slug);
        setActiveTab('notes');
      } else if (hash) {
        setCurrentArticleSlug(null);
        setActiveTab(hash);
        // Scroll to section if it exists on the page
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        setCurrentArticleSlug(null);
        setActiveTab('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global keyboard shortcut for ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (tab: string, slug?: string) => {
    if (tab === 'notes' && slug) {
      setCurrentArticleSlug(slug);
      setActiveTab('notes');
      window.location.hash = `/notes/${slug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentArticleSlug(null);
    setActiveTab(tab);

    if (tab === 'home') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = `/${tab}`;
      const element = document.getElementById(tab);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const activeArticle = currentArticleSlug
    ? ARTICLES.find(a => a.slug === currentArticleSlug)
    : null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F3] selection:bg-[#1A9E6E]/30 selection:text-white bg-tech-grid">
      
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main View Router */}
      {activeArticle ? (
        // Dedicated Full-Article Reading Experience
        <ArticleView
          article={activeArticle}
          allArticles={ARTICLES}
          onBack={() => handleNavigate('notes')}
          onSelectArticle={(slug) => handleNavigate('notes', slug)}
        />
      ) : (
        // Living Headquarters View
        <main>
          {/* 03 — Homepage Concept & 01 Core Statement */}
          <Hero
            onExploreWork={() => handleNavigate('work')}
            onReadNotes={() => handleNavigate('notes')}
          />

          {/* 04 — Live Status Bar */}
          <LiveStatusBar />

          {/* 05 — The "NOW" System */}
          <NowSection />

          {/* 06 — WORK (THRYVIX & COGEXT) */}
          <WorkSection projects={PROJECTS} />

          {/* 06.5 — FEATURED THOUGHT / EDITORIAL THESIS */}
          <FeaturedThought
            onExploreIdea={() => handleNavigate('notes', 'the-accountability-problem-with-ai-agents')}
          />

          {/* 07 — FROM X (Fragments of thinking / Micro-essays) */}
          <FromXSection
            tweets={TWEETS}
            onNavigateToNote={(slug) => handleNavigate('notes', slug)}
            onNavigateToProject={() => handleNavigate('work')}
          />

          {/* 08 — BUILD LOG (Public Engineering Notebook) */}
          <BuildLogSection
            logs={BUILD_LOGS}
            onOpenArticle={(slug) => handleNavigate('notes', slug)}
          />

          {/* 08 — WRITING / NOTES (Premium independent publication) */}
          <NotesSection
            articles={ARTICLES}
            onSelectArticle={(slug) => handleNavigate('notes', slug)}
          />

          {/* 10 — IDEAS (Public Idea Wall) */}
          <IdeasSection ideas={IDEAS} />

          {/* 11 — EXPERIMENTS (Prototypes, Failed Ideas & Strange Projects) */}
          <ExperimentsSection experiments={EXPERIMENTS} />

          {/* 12 — ABOUT (Self-taught story & 2021/2023/2026 timeline) */}
          <AboutSection />

          {/* 13 — TOOLBOX (Interactive Technical Wall) */}
          <ToolboxSection />

          {/* 14 — DIGITAL GARDEN (Unfinished thoughts, foundational questions) */}
          <GardenSection />

          {/* 15 — CONTACT (Have something difficult to build?) */}
          <ContactSection />
        </main>
      )}

      {/* 20 — Minimal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 16 & 17 — ⌘K Command Palette & Client-Side Search */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        projects={PROJECTS}
        articles={ARTICLES}
        logs={BUILD_LOGS}
        ideas={IDEAS}
        experiments={EXPERIMENTS}
        tweets={TWEETS}
      />

    </div>
  );
}
