'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const technologies = [
  // Languages First
  { name: 'Python', slug: 'python', color: '3776AB' },
  { name: 'Go', slug: 'go', color: '00ADD8' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
  
  // Frameworks & Libraries
  { name: 'Next.js', slug: 'nextdotjs', color: 'FFFFFF' },
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'Node.js', slug: 'nodedotjs', color: '339933' },
  { name: 'Express', slug: 'express', color: 'FFFFFF' },
  { name: 'NestJS', slug: 'nestjs', color: 'E0234E' },
  { name: 'FastAPI', slug: 'fastapi', color: '05998B' },
  { name: 'Django', slug: 'django', color: '092E20' },
  { name: 'Flask', slug: 'flask', color: 'FFFFFF' },
  
  // Databases & ORMs
  { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
  { name: 'Prisma', slug: 'prisma', color: '2D3748' },
  
  // DevOps & Tools
  { name: 'Docker', slug: 'docker', color: '2496ED' },
  { name: 'Kubernetes', slug: 'kubernetes', color: '326CE5' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
  { name: 'Git', slug: 'git', color: 'F05032' },
  { name: 'AWS', slug: 'aws', color: 'FF9900' },
];

// Custom Icons for reliability - Using Theme Colors
const VectorDBIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-ai-accent">
    <path d="M17.5 19c.6 0 1.1-.1 1.7-.4m-10.4 0c-.6-.3-1.1-.4-1.7-.4a4.5 4.5 0 1 1 .5-8.9 6 6 0 1 1 11 0 4.5 4.5 0 1 1-.4 9.3" />
    <ellipse cx="12" cy="16" rx="3" ry="1.5" fill="currentColor" fillOpacity="0.2" />
    <path d="M9 16v3c0 .8 1.3 1.5 3 1.5s3-.7 3-1.5v-3" />
  </svg>
);

const AgenticIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-ai-accent">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    <path d="M12 6v6l4 2" />
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
    <path d="M19 12h2" /><path d="M3 12h2" /><path d="M12 19v2" /><path d="M12 3v2" />
  </svg>
);

const RagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-ai-accent">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
    <circle cx="17" cy="17" r="3" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

const skillCategories = [
  {
    title: 'Frontend Developer',
    skills: [
      { name: 'HTML5', slug: 'html5', color: 'E34F26' },
      { name: 'Next.js', slug: 'nextdotjs', color: 'FFFFFF' },
      { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
      { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
      { name: 'React.js', slug: 'react', color: '61DAFB' },
    ]
  },
  {
    title: 'Backend Developer',
    skills: [
      { name: 'Node.js', slug: 'nodedotjs', color: '339933' },
      { name: 'Go', slug: 'go', color: '00ADD8' },
      { name: 'Express.js', slug: 'express', color: 'FFFFFF' },
      { name: 'FastAPI', slug: 'fastapi', color: '05998B' },
      { name: 'Docker', slug: 'docker', color: '2496ED' },
      { name: 'Kubernetes', slug: 'kubernetes', color: '326CE5' },
      { name: 'AWS', slug: 'aws', color: 'FF9900' },
      { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
    ]
  },
  {
    title: 'AI Engineer',
    skills: [
      { name: 'Python', slug: 'python', color: '3776AB' },
      { name: 'LangChain', slug: 'langchain', color: 'FFFFFF' },
      { name: 'Agentic Flow', isCustom: true, icon: AgenticIcon }, 
      { name: 'RAG Pipelines', isCustom: true, icon: RagIcon }, 
      { name: 'Docker', slug: 'docker', color: '2496ED' },
      { name: 'Vector DB', isCustom: true, icon: VectorDBIcon },
      { name: 'AWS', slug: 'aws', color: 'FF9900' },
      { name: 'PyTorch', slug: 'pytorch', color: 'EE4C2C' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Technologies Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-2 text-white"
          >
            Technologies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            My Tech Stack
          </motion.p>
        </div>

        {/* Unified Normalized Tech Stack Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-24 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="flex flex-col items-center gap-3 group w-24 cursor-pointer"
            >
              <div className="relative w-16 h-16 rounded-full bg-[#0d1117] border border-white/10 flex items-center justify-center p-4 group-hover:border-ai-accent/50 group-hover:bg-[#161b22] transition-all duration-300 shadow-xl overflow-hidden group-hover:shadow-ai-accent/20 group-hover:shadow-2xl">
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                  style={{ backgroundColor: `#${tech.color}` }}
                />
                <img 
                  src={tech.slug === 'aws' 
                    ? `https://skillicons.dev/icons?i=aws` 
                    : `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`} 
                  alt={tech.name}
                  className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-text-secondary group-hover:text-white transition-colors text-center truncate w-full">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Skills Cards */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-2 text-white"
          >
            Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            My Technical Level
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="glass p-12 py-16 rounded-[2.5rem] border border-white/10 hover:border-white/20 transition-all group min-h-[480px] cursor-default"
            >
              <h3 className="text-2xl font-bold text-center mb-12 text-white group-hover:text-ai-accent transition-colors">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                      {skill.isCustom ? (
                        <skill.icon />
                      ) : (
                        <img 
                          src={skill.slug === 'aws' 
                            ? `https://skillicons.dev/icons?i=aws` 
                            : `https://cdn.simpleicons.org/${skill.slug}/${skill.color}`} 
                          alt={skill.name}
                          className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">{skill.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
