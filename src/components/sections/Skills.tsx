'use client';

import { motion } from 'framer-motion';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import { skills, radarData } from '@/data/skills';
import { Cpu, Layout, Wrench } from 'lucide-react';

export default function Skills() {
  const aiSkills = skills.filter(s => s.category === 'AI Engineering');
  const fsSkills = skills.filter(s => s.category === 'Full-Stack');
  const toolSkills = skills.filter(s => s.category === 'Tools');

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Technical Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary max-w-2xl mx-auto"
          >
            A graphical representation of my core competencies in AI, Engineering, and Agentic Workflows.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* AI Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-ai-accent/20 h-[400px] flex flex-col items-center"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-ai-accent">
              <Cpu className="w-5 h-5" />
              AI & Agentic Capabilities
            </h3>
            <div className="w-full h-full pb-8">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                  />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Full-Stack & Tools */}
          <div className="space-y-8">
            {/* Full-Stack Bars */}
            <div className="glass p-8 rounded-3xl border border-fs-accent/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-fs-accent">
                <Layout className="w-5 h-5" />
                Full-Stack Architecture
              </h3>
              <div className="space-y-5">
                {fsSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                      <span className="text-sm text-text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-linear-to-r from-fs-accent to-fs-accent/50"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Bento Grid */}
            <div className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                <Wrench className="w-5 h-5" />
                Engineering Toolkit
              </h3>
              <div className="flex flex-wrap gap-3">
                {toolSkills.map((tool) => (
                  <motion.span
                    key={tool.name}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm font-mono text-text-secondary cursor-default"
                  >
                    {tool.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
