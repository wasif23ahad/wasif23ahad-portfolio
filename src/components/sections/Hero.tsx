'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Brand SVGs with exact brand colors
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-text-secondary hover:text-text-primary transition-colors">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="#0077b5" className="w-6 h-6 hover:brightness-110 transition-all">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-text-primary hover:text-text-secondary transition-colors">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="#25D366" className="w-6 h-6 hover:brightness-110 transition-all">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socialLinks = [
  { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/wasif23ahad', ariaLabel: "GitHub profile" },
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/wasifahad/', ariaLabel: "LinkedIn profile" },
  { name: 'Twitter', icon: XIcon, href: 'https://x.com/WasifAhad1', ariaLabel: "X profile" },
  { name: 'WhatsApp', icon: WhatsappIcon, href: 'https://wa.me/8801973116555', ariaLabel: "WhatsApp contact" },
];

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20 px-6"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-ai-accent/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-fs-accent/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:pl-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-accent/10 border border-ai-accent/20 text-ai-accent text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-accent"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-ai-accent to-fs-accent">
              Mohammad Wasif Ahad
            </span>
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 max-w-xl leading-relaxed">
            Full-Stack Developer | AI Engineer | Agentic Workflow Architect. </p>
            <p className="text-xl text-text-secondary mb-8 max-w-xl leading-relaxed">
            Crafting intelligent digital ecosystems where engineering meets artificial intelligence.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              href="/Resume/MohammadWasifAhad_Resume.pdf"
              download="MohammadWasifAhad_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-ai-accent text-slate-950 font-bold rounded-xl overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.3)] block"
            >
              <div className="flex items-center gap-2 relative z-10 justify-center">
                <span>Download Resume</span>
                <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              </div>
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-surface text-text-primary font-bold rounded-xl border border-text-primary/10 hover:border-text-primary/20 transition-all flex items-center gap-2"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
          
          <div className="flex items-center gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="transition-transform hover:scale-110"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </motion.div>
        
        {/* Right Content - Profile Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end lg:-translate-y-16"
        >
          <div className="relative w-64 h-64 md:w-[480px] md:h-[480px] flex items-center justify-center">
            {/* Ash-Themed Decorative Rings */}
            <div className="absolute inset-4 border-2 border-dashed border-text-secondary/20 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-12 border-2 border-text-secondary/30 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-24 border-[3px] border-text-secondary/40 rounded-full" />
            
            {/* Image Container */}
            <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-text-primary/5 shadow-2xl z-10 bg-surface">
              <Image
                src="/ProfilePicture/WasifDp.png"
                alt="Mohammad Wasif Ahad"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://ui-avatars.com/api/?name=Wasif+Ahad&background=0f172a&color=10b981&size=512";
                }}
              />
            </div>
            
            {/* Outset Floating Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[5%] -right-4 md:top-[10%] md:-right-16 glass px-2 py-1 md:px-4 md:py-2 rounded-lg border border-ai-accent/30 z-20"
            >
              <span className="text-ai-accent font-mono text-[10px] md:text-sm tracking-widest font-bold whitespace-nowrap">15 FINISHED PROJECTS</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[5%] -right-4 md:bottom-[10%] md:-right-16 glass px-2 py-1 md:px-4 md:py-2 rounded-lg border border-fs-accent/30 z-20"
            >
              <span className="text-fs-accent font-mono text-[10px] md:text-sm tracking-widest font-bold whitespace-nowrap">PROBLEM SOLVER</span>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-12 md:-left-28 -translate-y-1/2 glass px-2 py-1 md:px-4 md:py-2 rounded-lg border border-amber-400/30 z-20 shadow-[0_0_15px_rgba(251,191,36,0.1)]"
            >
              <span className="text-amber-400 font-mono text-[10px] md:text-sm tracking-widest font-bold whitespace-nowrap">2+ YEARS EXP</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
