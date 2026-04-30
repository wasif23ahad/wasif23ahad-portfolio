'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-20 h-10 rounded-full glass border border-white/10" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        "relative w-20 h-10 rounded-full glass border border-text-primary/10 p-1.5 transition-colors duration-500 flex items-center justify-between",
        isDark ? "bg-background/40" : "bg-surface/40"
      )}
      aria-label="Toggle theme"
    >
      {/* Icon Containers for Perfect Centering */}
      <div className="z-10 w-7 h-7 flex items-center justify-center ml-0.5">
        <Sun className={cn(
          "w-4 h-4 transition-colors duration-300", 
          isDark ? "text-sun-amber" : "text-text-secondary"
        )} />
      </div>
      
      <div className="z-10 w-7 h-7 flex items-center justify-center mr-0.5">
        <Moon className={cn(
          "w-4 h-4 transition-colors duration-300", 
          isDark ? "text-text-secondary" : "text-fs-accent"
        )} />
      </div>
      
      <motion.div
        className={cn(
          "absolute w-7 h-7 rounded-full shadow-lg flex items-center justify-center z-0",
          isDark ? "bg-ai-accent" : "bg-fs-accent"
        )}
        initial={false}
        animate={{
          x: isDark ? 41 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        <div className="w-full h-full rounded-full bg-white/20" />
      </motion.div>
    </button>
  );
}
