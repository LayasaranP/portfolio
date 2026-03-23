'use client';

import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight">Certifications & Coursework</h2>
          <div className="h-[2px] bg-gradient-to-r from-white/80 to-transparent flex-1 max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-300 group hover:border-indigo-500/30">
            <div className="flex items-start gap-5">
              <div className="mt-1 w-12 h-12 bg-[#050505] rounded-full flex items-center justify-center shrink-0 border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <Award className="text-indigo-400" size={24} />
              </div>
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">Ultimate RAG Bootcamp</h3>
                  <span className="text-xs text-indigo-400 font-mono bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">2025</span>
                </div>
                <p className="text-sm text-gray-400 mb-4 font-mono">LangChain, LangGraph</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-gray-300">Key Areas:</strong> Traditional RAG, Agentic RAG, Multi-agent Systems, LangGraph State Management, LangSmith Observability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
