'use client';

import { motion } from 'framer-motion';
import { experiences, education } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Experience Timeline */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-fs-accent" />
              Experience
            </h2>
            
            <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-text-secondary/20">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className={exp.isCurrent ? "absolute left-[9px] top-2 w-4 h-4 rounded-full bg-ai-accent shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "absolute left-[11px] top-2 w-3 h-3 rounded-full bg-slate-700"} />
                  
                  <div className="glass p-6 rounded-2xl border border-text-primary/5 hover:border-ai-accent/30 transition-all group">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-ai-accent transition-colors">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-fs-accent font-medium mt-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text-secondary mt-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-ai-accent shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Side */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-ai-accent" />
              Education
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass p-6 rounded-2xl border border-text-primary/5 bg-linear-to-br from-text-primary/5 to-transparent"
                >
                  <h3 className="text-lg font-bold text-text-primary mb-1">{edu.degree}</h3>
                  <p className="text-ai-accent text-sm font-medium mb-3">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-xs text-text-secondary mb-4">
                    <Calendar className="w-3 h-3" />
                    {edu.duration}
                  </div>
                  {edu.description && (
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Resume Callout */}
            <div className="mt-8 glass-indigo p-6 rounded-2xl border border-fs-accent/20">
              <h4 className="text-text-primary font-bold mb-2">Detailed Resume</h4>
              <p className="text-sm text-text-secondary mb-4">Want a deeper look at my technical expertise and publication history?</p>
              <a 
                href="/Resume/MohammadWasifAhad_Resume.pdf"
                download="MohammadWasifAhad_Resume.pdf"
                className="w-full py-3 bg-fs-accent text-white rounded-xl font-bold hover:scale-105 active:scale-95 transition-all block text-center"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
