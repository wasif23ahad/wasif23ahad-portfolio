'use client';

import { Terminal, Globe, Link as LinkIcon, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-ai-accent transition-colors">
              <Terminal className="w-5 h-5 text-ai-accent" />
            </div>
            <div className="text-left">
              <span className="block text-lg font-bold text-white tracking-tight">
                WASIF AHAD
              </span>
              <span className="block text-xs text-text-secondary uppercase tracking-[0.2em] font-mono">
                Architecting Intelligence
              </span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            <a href="https://github.com/wasif23ahad" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 text-text-secondary hover:text-ai-accent hover:bg-white/10 transition-all">
              <Code className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/wasifahad/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 text-text-secondary hover:text-ai-accent hover:bg-white/10 transition-all">
              <LinkIcon className="w-5 h-5" />
            </a>
            <a href="https://x.com/WasifAhad1" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 text-text-secondary hover:text-ai-accent hover:bg-white/10 transition-all">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-sm text-text-secondary">
            © {currentYear} Mohammad Wasif Ahad. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-text-secondary">
            <a href="#home" className="hover:text-ai-accent transition-colors">Home</a>
            <a href="#projects" className="hover:text-ai-accent transition-colors">Projects</a>
            <a href="#contact" className="hover:text-ai-accent transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-text-secondary/50 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-ai-accent animate-pulse" />
            System Online
          </div>
        </div>
      </div>
    </footer>
  );
}
