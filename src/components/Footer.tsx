'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZoneName: 'shortOffset'
    };
    return date.toLocaleTimeString('en-US', options);
  };

  return (
    <footer className="py-12 px-6 border-t border-text-primary/5 bg-surface backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Copyright - Left/Center */}
          <div className="text-center md:text-left">
            <span className="block text-[10px] text-text-secondary uppercase tracking-[0.3em] mb-1 font-medium">
              All Rights Reserved.
            </span>
            <p className="text-xl md:text-2xl font-bold text-text-primary tracking-tighter">
              © {currentYear} MOHAMMAD WASIF AHAD
            </p>
          </div>

          {/* Local Time - Right */}
          <div className="text-center md:text-right">
            <span className="block text-[10px] text-text-secondary uppercase tracking-[0.3em] mb-1 font-medium">
              Local Time
            </span>
            <div className="flex items-center justify-center md:justify-end gap-2 text-text-primary font-mono text-sm">
              <span className="text-ai-accent">★</span>
              <span>{mounted ? formatTime(time) : '--:--:--'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
