import React, { useState, useEffect } from 'react';

export const LiveStatusBar: React.FC = () => {
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now);
        setIstTime(timeString);
      } catch {
        setIstTime('17:42:00');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-y border-[#202020] bg-[#0E0E0E]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#202020] py-0 font-mono-code text-xs">
          
          {/* BUILDING */}
          <div className="p-3 sm:py-3.5 sm:px-4">
            <span className="block text-[10px] uppercase tracking-widest text-[#666666]">
              BUILDING
            </span>
            <div className="mt-1 flex items-center gap-1.5 font-medium text-[#F5F5F3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1A9E6E]" />
              <span className="tracking-wide">THRYVIX &amp; COGEXT</span>
            </div>
          </div>

          {/* EXPLORING */}
          <div className="p-3 sm:py-3.5 sm:px-4">
            <span className="block text-[10px] uppercase tracking-widest text-[#666666]">
              EXPLORING
            </span>
            <div className="mt-1 font-medium text-[#E5E5E5] tracking-wide">
              Machine intelligence
            </div>
          </div>

          {/* WRITING */}
          <div className="p-3 sm:py-3.5 sm:px-4">
            <span className="block text-[10px] uppercase tracking-widest text-[#666666]">
              WRITING
            </span>
            <div className="mt-1 font-medium text-[#E5E5E5] tracking-wide">
              Systems · AI · Startups
            </div>
          </div>

          {/* BASED IN + CLOCK */}
          <div className="p-3 sm:py-3.5 sm:px-4 flex items-center justify-between">
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-[#666666]">
                BASED IN
              </span>
              <div className="mt-1 font-medium text-[#E5E5E5] tracking-wide">
                Kerala, India
              </div>
            </div>
            {istTime && (
              <div className="text-right pl-2">
                <span className="block text-[9px] uppercase tracking-widest text-[#555555]">
                  IST
                </span>
                <span className="text-[11px] tabular-nums text-[#888888]">
                  {istTime}
                </span>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
