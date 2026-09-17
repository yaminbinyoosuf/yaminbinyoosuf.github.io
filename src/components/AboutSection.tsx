import React from 'react';
import { MapPin, Terminal, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Started learning software',
      description: 'Dissecting running open-source codebases, reading RFCs, and building simple command-line tools from scratch.'
    },
    {
      year: '2023',
      title: 'Started building seriously',
      description: 'Transitioned to production web systems, async Python architectures, distributed state, and relational databases.'
    },
    {
      year: '2026',
      title: 'Building THRYVIX + COGEXT',
      description: 'Founding independent infrastructure for permanent organisational intelligence and machine accountability from Kerala, India.'
    }
  ];

  return (
    <section id="about" className="w-full border-b border-[#1C1C1C] py-16 sm:py-24 bg-[#0B0B0B]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#222222] pb-4 mb-12 gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-semibold tracking-widest text-[#1A9E6E] uppercase">
              // 12
            </span>
            <h2 className="font-mono-code text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF]">
              ABOUT
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono-code text-xs text-[#666666]">
            <MapPin className="h-3.5 w-3.5 text-[#1A9E6E]" />
            <span>KERALA, INDIA</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Story & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-editorial text-2xl sm:text-3xl italic text-[#FFFFFF] leading-snug">
              “Most of what I know came from building.”
            </div>

            <div className="space-y-4 text-base text-[#A3A3A3] leading-relaxed font-normal">
              <p>
                Yamin Bin Yoosuf is a self-taught software engineer and founder from Malappuram, Kerala.
              </p>
              <p>
                He learned software by building real systems rather than following a traditional computer-science path. By facing production bottlenecks, locking contentions, and distributed state challenges head-on, he developed a deep respect for first-principles engineering.
              </p>
              <p>
                Today he is building <strong className="text-[#FFFFFF]">THRYVIX</strong> and <strong className="text-[#FFFFFF]">COGEXT</strong> while exploring AI systems, infrastructure, product engineering, and startups.
              </p>
            </div>

            {/* Core conviction strip */}
            <div className="border-l-2 border-[#1A9E6E] pl-4 py-2 bg-[#121212]/50 font-mono-code text-xs text-[#888888]">
              No buzzwords. No artificial headcount metrics. Pure technical craft and independent conviction.
            </div>
          </div>

          {/* Right Column: Exact Minimal Timeline (5 cols) */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#202020] pt-8 lg:pt-0 lg:pl-10">
            <span className="block font-mono-code text-xs uppercase tracking-widest text-[#666666] mb-6">
              TIMELINE
            </span>

            <div className="relative border-l border-[#262626] ml-2 space-y-8 pl-6">
              {milestones.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Point */}
                  <div className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full border border-[#333333] bg-[#0A0A0A] group-hover:border-[#1A9E6E] group-hover:bg-[#1A9E6E] transition-colors" />

                  <div className="font-mono-code text-xs font-semibold text-[#1A9E6E] tracking-wider mb-1">
                    {item.year}
                  </div>

                  <h3 className="text-base font-semibold text-[#FFFFFF] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#777777] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
