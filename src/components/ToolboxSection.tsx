import React, { useState } from 'react';
import { TOOLBOX_ITEMS, ToolItem } from '../data/toolbox';
import { Terminal, Layers, Cpu, Database, Server } from 'lucide-react';

export const ToolboxSection: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'BACKEND', 'FRONTEND', 'DATABASE & CLOUD', 'AI & PROTOCOLS'];

  const filteredItems = activeCategory === 'ALL'
    ? TOOLBOX_ITEMS
    : TOOLBOX_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="toolbox" className="w-full border-b border-[#1C1C1C] py-16 sm:py-20 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#222222] pb-4 mb-8 gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-semibold tracking-widest text-[#1A9E6E] uppercase">
              // 13
            </span>
            <h2 className="font-mono-code text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF]">
              TOOLBOX
            </h2>
            <span className="hidden sm:inline text-xs font-mono-code text-[#444444]">
              — INTERACTIVE TECHNICAL WALL
            </span>
          </div>

          <div className="font-mono-code text-xs text-[#555555]">
            NO PROFICIENCY BARS · OPERATIONAL STACK ONLY
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 font-mono-code text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 border transition-colors focus:outline-none ${
                activeCategory === cat
                  ? 'border-[#1A9E6E] bg-[#1A9E6E]/10 text-white'
                  : 'border-[#222222] bg-[#101010] text-[#777777] hover:border-[#333333] hover:text-[#CCCCCC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredItems.map((tool) => {
            const isSelected = selectedTool?.name === tool.name;
            return (
              <button
                key={tool.name}
                onClick={() => setSelectedTool(isSelected ? null : tool)}
                className={`group text-left p-4 sm:p-5 border transition-all duration-200 focus:outline-none relative ${
                  isSelected
                    ? 'border-[#1A9E6E] bg-[#141414]'
                    : 'border-[#202020] bg-[#0E0E0E] hover:border-[#383838] hover:bg-[#121212]'
                }`}
              >
                <div className="flex items-center justify-between font-mono-code text-[10px] text-[#555555] mb-2">
                  <span>{tool.category}</span>
                  {isSelected && <span className="text-[#1A9E6E] font-bold">●</span>}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#FFFFFF] tracking-tight group-hover:text-[#1A9E6E] transition-colors">
                  {tool.name}
                </h3>

                <p className="mt-2 font-mono-code text-[11px] text-[#777777] line-clamp-1">
                  {tool.focus}
                </p>

                {isSelected && (
                  <div className="mt-3 pt-3 border-t border-[#262626] text-xs font-sans text-[#C0C0C0] leading-relaxed animate-in fade-in duration-150">
                    {tool.usage}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Tool Quick Inspector (if none expanded in-place) */}
        {!selectedTool && (
          <div className="mt-6 text-center font-mono-code text-xs text-[#555555]">
            [ Select any tool above to inspect its real-world implementation role ]
          </div>
        )}

      </div>
    </section>
  );
};
