'use client';

import { motion } from 'framer-motion';
import { Music, Code2, Cpu, GraduationCap, Laptop } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'AI Agents Built', value: '5+' },
  { label: 'Coffee Consumed', value: '∞' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="lg:aspect-square glass rounded-3xl overflow-hidden p-5 md:p-8 border border-white/10 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-2xl bg-ai-accent/20 flex items-center justify-center">
                  <Cpu className="text-ai-accent w-8 h-8" />
                </div>
                <div className="relative w-32 h-32 rounded-full border-2 border-ai-accent/30 p-1 group">
                  <div className="w-full h-full rounded-full bg-surface border border-text-primary/10 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/ProfilePicture/DP.jpeg" 
                      alt="Wasif Ahad Casual" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Decorative Ring */}
                  <div className="absolute -inset-2 border border-ai-accent/10 rounded-full animate-spin-slow" />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                  <Music className="text-fs-accent w-6 h-6" />
                  Beyond the Code
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  When I&apos;m not architecting agentic workflows, you&apos;ll find me with my hands on a guitar fretboard or keyboard keys. Music is my parallel language—structuring melodies much like I structure clean code.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl glass border border-text-primary/5">
                      <div className="text-2xl font-bold text-ai-accent">{stat.value}</div>
                      <div className="text-xs text-text-secondary uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-ai-accent" />
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                My journey began in the world of electrons and circuits during my <span className="text-text-primary font-semibold">BSc in Electrical and Electronic Engineering (AUST)</span>. However, the logic of software soon pulled me deeper.
              </p>
              
              <p>
                I transitioned into a <span className="text-text-primary font-semibold">MSc in Computer Science (Brac University)</span> to specialize in what truly excites me: <span className="text-ai-accent font-medium">Artificial Intelligence and Agentic Systems</span>.
              </p>
              
              <p>
                I thrive at the intersection of robust Full-Stack Engineering and cutting-edge AI. Whether it&apos;s deploying Computer Vision models or architecting blockchain-integrated AI agents, my goal is always the same: <span className="italic text-text-primary">building systems that think.</span>
              </p>

              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-fs-accent/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="text-fs-accent w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold">MSc in CSE</h4>
                    <p className="text-sm">Brac University | 2025 - Present</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ai-accent/20 flex items-center justify-center shrink-0">
                    <Code2 className="text-ai-accent w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold">BSc in EEE</h4>
                    <p className="text-sm">AUST | 2019 - 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
