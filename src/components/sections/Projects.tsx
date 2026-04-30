'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/data/projects';
import { useTheme } from 'next-themes';
import { Link, Code, X, ArrowRight, CheckCircle2, Lightbulb, Layout } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-ai-accent" />
              Featured Projects
            </h2>
            <p className="text-text-secondary max-w-xl">
              A curated selection of my work in AI Engineering, Agentic Workflows, and Full-Stack Development.
            </p>
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-ai-accent/30 transition-all flex flex-col"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x400/${isDark ? '0f172a' : 'f1f5f9'}/${isDark ? '10b981' : '6366f1'}?text=${project.title}`;
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-0 dark:opacity-60" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-1 rounded bg-black/50 backdrop-blur-md text-[10px] font-mono text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-ai-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-sm font-bold text-text-primary group-hover:gap-3 transition-all"
                  >
                    View Details <ArrowRight className="w-4 h-4 text-ai-accent" />
                  </button>
                  <div className="flex gap-3">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                        <Code className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-ai-accent transition-colors">
                        <Link className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={selectedProject.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] glass rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Content */}
              <div 
                className="w-full overflow-y-auto flex flex-col items-center text-center p-0"
                data-lenis-prevent
              >
                <div className="w-full relative h-72 md:h-96 shrink-0 group">
                  <div className="absolute inset-0 bg-linear-to-br from-surface to-background flex items-center justify-center">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover transition-opacity duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = '0';
                      }}
                    />
                    {/* Fallback Graphic */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 bg-linear-to-br from-ai-accent/10 to-fs-accent/10">
                      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                        <Layout className="w-10 h-10 text-ai-accent/40" />
                      </div>
                      <span className="text-white/20 font-mono text-xs uppercase tracking-widest">Visualizing {selectedProject.title}</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-0 dark:opacity-100" />
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-2 rounded-full glass border border-white/10 text-white z-20 hover:scale-110 active:scale-95 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="px-8 md:px-12 pb-12 w-full flex flex-col items-center -mt-12 relative z-10">
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-ai-accent/10 border border-ai-accent/20 text-[10px] font-mono text-ai-accent uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-text-primary mb-4">{selectedProject.title}</h3>
                  <p className="text-text-secondary mb-8 leading-relaxed max-w-md">
                    {selectedProject.longDescription}
                  </p>

                  {/* Case Study Sections */}
                  <div className="w-full space-y-12 mb-10">
                    <div className="flex flex-col items-center">
                      <h4 className="flex items-center gap-2 text-text-primary font-bold mb-6 text-lg">
                        <CheckCircle2 className="w-5 h-5 text-ai-accent" />
                        Key Challenges
                      </h4>
                      <ul className="space-y-4 w-full max-w-sm text-center">
                        {selectedProject.challenges.map((challenge, i) => (
                          <li key={i} className="text-sm text-text-secondary leading-relaxed">
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col items-center">
                      <h4 className="flex items-center gap-2 text-text-primary font-bold mb-6 text-lg">
                        <Lightbulb className="w-5 h-5 text-fs-accent" />
                        Future Improvements
                      </h4>
                      <ul className="space-y-4 w-full max-w-sm text-center">
                        {selectedProject.futurePlans.map((plan, i) => (
                          <li key={i} className="text-sm text-text-secondary leading-relaxed">
                            {plan}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Links */}
                  <div className="w-full flex flex-col sm:flex-row gap-4">
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-4 bg-ai-accent text-slate-950 font-bold rounded-2xl text-center flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        Live Preview <Link className="w-4 h-4" />
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-4 glass border border-text-primary/10 text-text-primary font-bold rounded-2xl text-center flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        Source Code <Code className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
