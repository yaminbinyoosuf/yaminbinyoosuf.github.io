import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Layers, Terminal, Lightbulb, FlaskConical, ExternalLink, Mail, User } from 'lucide-react';
import { Project, Article, BuildLogEntry, IdeaItem, ExperimentItem, TweetItem } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string, slug?: string) => void;
  projects: Project[];
  articles: Article[];
  logs: BuildLogEntry[];
  ideas: IdeaItem[];
  experiments: ExperimentItem[];
  tweets?: TweetItem[];
}

interface SearchResult {
  id: string;
  type: 'NAV' | 'PROJECT' | 'ARTICLE' | 'BUILD_LOG' | 'IDEA' | 'EXPERIMENT' | 'TWEET';
  title: string;
  subtitle: string;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  projects,
  articles,
  logs,
  ideas,
  experiments,
  tweets = []
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Global Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Generate Results
  const navigationCommands: SearchResult[] = [
    {
      id: 'cmd-work',
      type: 'NAV',
      title: 'Go to Work',
      subtitle: 'THRYVIX & COGEXT infrastructure projects',
      action: () => { onNavigate('work'); onClose(); }
    },
    {
      id: 'cmd-from-x',
      type: 'NAV',
      title: 'View From X',
      subtitle: 'Fragments of thinking on AI, infrastructure, NPCI',
      action: () => { onNavigate('from-x'); onClose(); }
    },
    {
      id: 'cmd-notes',
      type: 'NAV',
      title: 'Read Notes',
      subtitle: 'Technical and architectural publication archive',
      action: () => { onNavigate('notes'); onClose(); }
    },
    {
      id: 'cmd-build',
      type: 'NAV',
      title: 'View Build Log',
      subtitle: 'Public engineering notebook & execution records',
      action: () => { onNavigate('build'); onClose(); }
    },
    {
      id: 'cmd-ideas',
      type: 'NAV',
      title: 'Explore Ideas',
      subtitle: 'Public idea wall & systems observations',
      action: () => { onNavigate('ideas'); onClose(); }
    },
    {
      id: 'cmd-experiments',
      type: 'NAV',
      title: 'Inspect Experiments',
      subtitle: 'Prototypes, failed ideas, and lab benchmarks',
      action: () => { onNavigate('experiments'); onClose(); }
    },
    {
      id: 'cmd-garden',
      type: 'NAV',
      title: 'Visit Digital Garden',
      subtitle: 'Unfinished thoughts and foundational questions',
      action: () => { onNavigate('garden'); onClose(); }
    },
    {
      id: 'cmd-about',
      type: 'NAV',
      title: 'About Yamin',
      subtitle: 'Story, timeline, and foundational philosophy',
      action: () => { onNavigate('about'); onClose(); }
    },
    {
      id: 'cmd-contact',
      type: 'NAV',
      title: 'Contact Dispatch',
      subtitle: 'Direct email yamin@thryvixai.com',
      action: () => { onNavigate('contact'); onClose(); }
    },
    {
      id: 'cmd-x',
      type: 'NAV',
      title: 'Follow on X',
      subtitle: '@yaminbinyoosuf',
      action: () => { window.open('https://x.com/yaminbinyoosuf', '_blank'); onClose(); }
    },
    {
      id: 'cmd-github',
      type: 'NAV',
      title: 'GitHub Profile',
      subtitle: 'github.com/yaminbinyoosuf',
      action: () => { window.open('https://github.com/yaminbinyoosuf', '_blank'); onClose(); }
    }
  ];

  // Search filter
  const q = query.toLowerCase().trim();

  const filteredNav = navigationCommands.filter(c => 
    c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q)
  );

  const filteredProjects: SearchResult[] = projects
    .filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.thesis.toLowerCase().includes(q))
    .map(p => ({
      id: `proj-${p.id}`,
      type: 'PROJECT',
      title: p.title,
      subtitle: `${p.number} · ${p.tagline}`,
      action: () => { onNavigate('work'); onClose(); }
    }));

  const filteredArticles: SearchResult[] = articles
    .filter(a => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q))
    .map(a => ({
      id: `art-${a.slug}`,
      type: 'ARTICLE',
      title: a.title,
      subtitle: `${a.category} · ${a.readingTime} · ${a.formattedDate}`,
      action: () => { onNavigate('notes', a.slug); onClose(); }
    }));

  const filteredLogs: SearchResult[] = logs
    .filter(l => l.title.toLowerCase().includes(q) || l.shortDescription.toLowerCase().includes(q) || l.category.toLowerCase().includes(q))
    .map(l => ({
      id: `log-${l.id}`,
      type: 'BUILD_LOG',
      title: l.title,
      subtitle: `${l.date} · ${l.category}`,
      action: () => { onNavigate('build'); onClose(); }
    }));

  const filteredIdeas: SearchResult[] = ideas
    .filter(i => i.statement.toLowerCase().includes(q) || (i.context && i.context.toLowerCase().includes(q)))
    .map(i => ({
      id: `idea-${i.id}`,
      type: 'IDEA',
      title: `"${i.statement}"`,
      subtitle: `${i.category} · ${i.date}`,
      action: () => { onNavigate('ideas'); onClose(); }
    }));

  const filteredExperiments: SearchResult[] = experiments
    .filter(e => e.title.toLowerCase().includes(q) || e.problem.toLowerCase().includes(q) || e.subtitle.toLowerCase().includes(q))
    .map(e => ({
      id: `exp-${e.id}`,
      type: 'EXPERIMENT',
      title: `${e.number}: ${e.title}`,
      subtitle: e.subtitle,
      action: () => { onNavigate('experiments'); onClose(); }
    }));

  const filteredTweets: SearchResult[] = tweets
    .filter(t => t.text.toLowerCase().includes(q) || t.category.toLowerCase().includes(q))
    .map(t => ({
      id: `tweet-${t.id}`,
      type: 'TWEET',
      title: t.text.length > 70 ? `${t.text.substring(0, 70)}...` : t.text,
      subtitle: `FROM X · ${t.category} · ${t.date}`,
      action: () => { onNavigate('from-x'); onClose(); }
    }));

  const allResults: SearchResult[] = q === '' 
    ? navigationCommands 
    : [...filteredNav, ...filteredProjects, ...filteredArticles, ...filteredLogs, ...filteredTweets, ...filteredExperiments, ...filteredIdeas];


  // Arrow key navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (allResults.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + allResults.length) % (allResults.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (allResults[selectedIndex]) {
        allResults[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      
      {/* Modal Dialog */}
      <div 
        className="w-full max-w-2xl border border-[#2A2A2A] bg-[#0E0E0E] shadow-2xl overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-[#222222] px-4 py-3.5 bg-[#121212]">
          <Search className="h-4 w-4 text-[#777777] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
            onKeyDown={handleKeyDown}
            placeholder="Search Yamin's website (projects, notes, build logs, ideas)..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-[#555555] focus:outline-none font-mono-code"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-[#666666] hover:text-white mr-2 text-xs font-mono-code"
            >
              CLEAR
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[#666666] hover:text-white p-1 border border-[#222222] bg-[#161616]"
            aria-label="Close command palette"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-[#181818] p-2">
          {allResults.length > 0 ? (
            allResults.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`cursor-pointer px-4 py-3 flex items-center justify-between gap-3 transition-colors ${
                    isSelected ? 'bg-[#181818] text-white' : 'text-[#A3A3A3] hover:bg-[#141414]'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="font-mono-code text-[10px] text-[#1A9E6E] border border-[#222222] bg-[#101010] px-1.5 py-0.5 mt-0.5 shrink-0">
                      {item.type}
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-white truncate">
                        {item.title}
                      </div>
                      <div className="text-xs text-[#666666] truncate font-mono-code mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`h-3.5 w-3.5 text-[#555555] shrink-0 ${isSelected ? 'text-[#1A9E6E]' : ''}`} />
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center font-mono-code text-xs text-[#555555]">
              No matches found for &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Keyboard Shortcuts Help Footer */}
        <div className="flex items-center justify-between border-t border-[#1E1E1E] bg-[#0A0A0A] px-4 py-2.5 font-mono-code text-[11px] text-[#666666]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="border border-[#2D2D2D] bg-[#141414] px-1 py-0.5 text-[10px] text-[#888888]">↑</kbd>
              <kbd className="border border-[#2D2D2D] bg-[#141414] px-1 py-0.5 text-[10px] text-[#888888]">↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="border border-[#2D2D2D] bg-[#141414] px-1.5 py-0.5 text-[10px] text-[#888888]">↵</kbd>
              <span>Select</span>
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="border border-[#2D2D2D] bg-[#141414] px-1.5 py-0.5 text-[10px] text-[#888888]">ESC</kbd>
            <span>Close</span>
          </span>
        </div>

      </div>
    </div>
  );
};
