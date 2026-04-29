'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/data/projects';
import { Link, Code, X, ArrowRight, CheckCircle2, Lightbulb } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30">
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
          <div className="flex gap-4">
            <span className="px-4 py-2 rounded-full glass border border-white/10 text-xs font-mono uppercase tracking-widest text-ai-accent">
              Total Built: {projects.length}
            </span>
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
                    target.src = `https://placehold.co/600x400/0f172a/10b981?text=${project.title}`;
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-1 rounded bg-black/50 backdrop-blur-md text-[10px] font-mono text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-ai-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all"
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
              className="relative w-full max-w-4xl max-h-[90vh] glass rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Modal Image */}
              <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x400/0f172a/10b981?text=${selectedProject.title}`;
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent md:bg-linear-to-r" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 left-6 p-2 rounded-full glass border border-white/10 text-white md:hidden"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="hidden md:flex justify-end mb-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-white/5 transition-colors text-text-secondary"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex gap-2 mb-4">
                  {selectedProject.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-ai-accent/10 border border-ai-accent/20 text-[10px] font-mono text-ai-accent uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Case Study Sections */}
                <div className="space-y-8 mb-10">
                  <div>
                    <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                      <CheckCircle2 className="w-5 h-5 text-ai-accent" />
                      Key Challenges
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-text-secondary flex gap-3">
                          <span className="text-ai-accent font-bold">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                      <Lightbulb className="w-5 h-5 text-fs-accent" />
                      Future Improvements
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.futurePlans.map((plan, i) => (
                        <li key={i} className="text-sm text-text-secondary flex gap-3">
                          <span className="text-fs-accent font-bold">•</span>
                          {plan}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="flex gap-4">
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
                      className="flex-1 py-4 glass border border-white/10 text-white font-bold rounded-2xl text-center flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      Source Code <Code className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
