'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Cpu, 
  GraduationCap, 
  Layout, 
  Send, 
  ChevronDown,
  LayoutGrid
} from 'lucide-react';
import { useTheme } from 'next-themes';

const navLinks = [
  { 
    name: 'Home', 
    href: '#home', 
    icon: Home,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/20'
  },
  { 
    name: 'Tech Stack', 
    href: '#skills', 
    icon: Cpu,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/20'
  },
  { 
    name: 'Qualification', 
    href: '#experience', 
    icon: GraduationCap,
    color: 'text-purple-400',
    bg: 'bg-purple-400/20'
  },
  { 
    name: 'Projects', 
    href: '#projects', 
    icon: Layout,
    color: 'text-orange-400',
    bg: 'bg-orange-400/20'
  },
  { 
    name: 'Contact Me', 
    href: '#contact', 
    icon: Send,
    color: 'text-rose-400',
    bg: 'bg-rose-400/20'
  },
];

import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-6 left-0 right-0 z-50 px-8 pointer-events-none">
      <div className="max-w-fit mx-auto flex items-center gap-6 md:gap-12 pointer-events-auto">
        {/* Logo - Aligned with Navbar */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center"
        >
          <img 
            src="/ProfilePicture/PortfolioLogo.png" 
            alt="Logo" 
            className={cn(
              "w-20 h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer",
              mounted && !isDark ? "invert" : "invert-0"
            )}
          />
        </motion.div>

        {/* Centered Pill Navigation */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={cn(
            "flex items-center gap-1 p-1.5 rounded-full border border-text-primary/10 backdrop-blur-2xl bg-surface/60 shadow-2xl"
          )}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300",
                  isActive 
                    ? "text-white" 
                    : "text-text-secondary hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/10 rounded-full shadow-inner"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className={cn(
                  "p-1.5 rounded-full transition-all",
                  isActive ? link.bg : "bg-transparent group-hover:bg-white/5"
                )}>
                  <link.icon className={cn(
                    "w-4 h-4 transition-colors",
                    isActive ? link.color : "text-text-secondary"
                  )} />
                </div>
                <span className="relative z-10 hidden md:block">{link.name}</span>
              </button>
            );
          })}
          
          {/* More Dropdown */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-text-secondary hover:text-white transition-all group">
            <div className="p-1.5 rounded-full bg-transparent group-hover:bg-purple-500/10">
              <LayoutGrid className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
            </div>
            <span className="hidden md:block">More</span>
            <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100" />
          </button>
        </motion.div>

        {/* Theme Toggle - Spaced further to the right */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="pl-8 md:pl-16 border-l border-white/5"
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </nav>
  );
}
