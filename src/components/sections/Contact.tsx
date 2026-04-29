'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Send, MapPin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'wasifahad300@gmail.com',
    href: 'mailto:wasifahad300@gmail.com',
    color: 'text-ai-accent',
    bg: 'bg-ai-accent/10',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+8801973116555',
    href: 'tel:+8801973116555',
    color: 'text-fs-accent',
    bg: 'bg-fs-accent/10',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+8801973116555',
    href: 'https://wa.me/8801973116555',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-ai-accent" />
              Let&apos;s Connect
            </h2>
            <p className="text-text-secondary text-lg mb-12 leading-relaxed max-w-lg">
              Have a project in mind or just want to chat about AI and Agentic workflows? 
              I&apos;m always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div 
                  key={item.label}
                  className="flex items-center justify-between p-6 glass rounded-2xl border border-white/5 group hover:border-white/10 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-widest mb-1">{item.label}</p>
                      <a href={item.href} className="text-white font-medium hover:text-ai-accent transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(item.value)}
                    className="p-2 text-text-secondary hover:text-white transition-colors"
                  >
                    {copied === item.value ? <Check className="w-5 h-5 text-ai-accent" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              ))}
              
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-dashed border-white/10">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-medium">Dhaka, Bangladesh (Open to Remote)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Quick Contact Form/CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-ai-accent/10 rounded-full blur-[80px]" />
            
            <h3 className="text-2xl font-bold text-white mb-8">Send a Quick Message</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary ml-1">Your Email</label>
                <input 
                  type="email" 
                  placeholder="hello@example.com"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-ai-accent/50 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-ai-accent/50 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-ai-accent text-slate-950 font-bold rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                Send via Email <Send className="w-5 h-5" />
              </button>
              
              <p className="text-center text-xs text-text-secondary">
                Prefer WhatsApp? <a href="https://wa.me/8801973116555" className="text-ai-accent hover:underline">Message me directly</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
