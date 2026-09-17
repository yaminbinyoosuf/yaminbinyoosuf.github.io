import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Clock, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');
  const email = 'yamin@thryvixai.com';

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full border-b border-[#1C1C1C] py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="border-b border-[#222222] pb-4 mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-semibold tracking-widest text-[#1A9E6E] uppercase">
              // 15
            </span>
            <h2 className="font-mono-code text-xs sm:text-sm uppercase tracking-[0.2em] text-[#888888]">
              CONTACT &amp; DISPATCH
            </h2>
          </div>

          <div className="flex items-center gap-4 font-mono-code text-xs text-[#777777]">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-[#1A9E6E]" />
              <span>Kerala, India</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-[#555555]" />
              <span>IST (UTC+5:30) {time || 'LIVE'}</span>
            </span>
          </div>
        </div>

        <div className="max-w-3xl">
          {/* Main Statement */}
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFFFF] leading-[1.15]">
            HAVE SOMETHING AMBITIOUS TO BUILD?
          </h3>

          <p className="mt-6 text-base sm:text-lg text-[#999999] leading-relaxed font-normal">
            I’m interested in ambitious engineering problems, early-stage companies, AI systems, infrastructure, and people building from first principles.
          </p>

          <p className="mt-4 text-sm sm:text-base font-editorial italic text-[#CCCCCC]">
            “Best way to reach me is email or X DM.”
          </p>

          {/* Email Block */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${email}`}
              className="font-mono-code text-lg sm:text-2xl font-medium text-[#FFFFFF] hover:text-[#1A9E6E] transition-colors border-b border-[#333333] pb-1 hover:border-[#1A9E6E]"
            >
              {email}
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 border border-[#2A2A2A] hover:border-[#1A9E6E] bg-[#141414] hover:bg-[#1A9E6E]/10 px-3.5 py-2 font-mono-code text-xs text-[#A3A3A3] hover:text-white transition-colors focus:outline-none"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#1A9E6E]" />
                  <span className="text-[#1A9E6E] font-medium">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8 font-mono-code text-xs sm:text-sm text-[#888888] pt-6 border-t border-[#1C1C1C]">
            <a
              href="https://x.com/yaminbinyoosuf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <span>X (@yaminbinyoosuf)</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#555555] group-hover:text-[#1A9E6E] transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/yamin-binyoosuf/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#555555] group-hover:text-[#1A9E6E] transition-colors" />
            </a>

            <a
              href="https://github.com/yaminbinyoosuf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#555555] group-hover:text-[#1A9E6E] transition-colors" />
            </a>

            <a
              href="https://thryvixai.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <span>THRYVIX</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#555555] group-hover:text-[#1A9E6E] transition-colors" />
            </a>

            <a
              href="https://cogextai.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <span>COGEXT</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#555555] group-hover:text-[#1A9E6E] transition-colors" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

