'use client';

import { motion } from 'framer-motion';
import { Download, Code, Link, Globe, MessageCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const socialLinks = [
  { name: 'GitHub', icon: Code, href: 'https://github.com/wasif23ahad' },
  { name: 'LinkedIn', icon: Link, href: 'https://linkedin.com/in/wasif23ahad' },
  { name: 'Twitter', icon: Globe, href: 'https://twitter.com/wasif23ahad' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/8801973116555' },
];

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6"
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
            Full-Stack Developer | AI Engineer | Agentic Workflow Architect. 
            Crafting intelligent digital ecosystems where engineering meets artificial intelligence.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            {/* Magnetic Button Simulation */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-ai-accent text-slate-950 font-bold rounded-xl overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            >
              <div className="flex items-center gap-2 relative z-10">
                <span>Download Resume</span>
                <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              </div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-surface text-white font-bold rounded-xl border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
          
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-ai-accent transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>
        
        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative Rings */}
            <div className="absolute inset-0 border-2 border-dashed border-ai-accent/30 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-fs-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Image Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl">
              <div className="w-full h-full bg-slate-800 flex items-center justify-center relative">
                {/* Fallback while we set up the image */}
                <Image
                  src="/images/profile.png"
                  alt="Mohammad Wasif Ahad"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback background if image is missing
                    const target = e.target as HTMLImageElement;
                    target.src = "https://ui-avatars.com/api/?name=Wasif+Ahad&background=0f172a&color=10b981&size=512";
                  }}
                />
              </div>
            </div>
            
            {/* Floating Tech Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-0 glass px-4 py-2 rounded-lg border border-ai-accent/30"
            >
              <span className="text-ai-accent font-mono text-sm tracking-widest">RAG_EXPERT</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-0 glass px-4 py-2 rounded-lg border border-fs-accent/30"
            >
              <span className="text-fs-accent font-mono text-sm tracking-widest">FULL_STACK</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
