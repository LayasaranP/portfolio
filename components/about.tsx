'use client';

import { motion } from 'motion/react';
import { Sparkles, Code2, BrainCircuit } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">About Me</h2>
          <div className="h-[2px] bg-gradient-to-r from-white/80 to-transparent flex-1 max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Bio Card */}
          <div className="md:col-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-indigo-400" size={24} />
              <h3 className="text-xl font-semibold text-white">The Journey</h3>
            </div>
            <div className="text-gray-400 leading-relaxed space-y-4">
              <p>
                Hello! I&apos;m Layasaran, an engineering student at Vellore Institute of Technology pursuing a B.Tech in Mechanical Engineering with a Minor in Computer Science. My journey into tech started with a fascination for how physical systems can be optimized through intelligent software.
              </p>
              <p>
                Today, my focus is on building scalable cloud infrastructures and integrating advanced AI/ML models to solve complex problems. Whether it&apos;s developing predictive maintenance algorithms for industrial bearings or orchestrating LLMs for log classification, I love the challenge of turning raw data into actionable insights.
              </p>
            </div>
          </div>

          {/* Currently Learning Card */}
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/20 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <BrainCircuit className="text-indigo-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Currently Learning</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-indigo-400 mt-1">▹</span>
                  <span className="text-sm">Advanced Multi-Agent Systems with LangGraph</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-indigo-400 mt-1">▹</span>
                  <span className="text-sm">Cloud-Native Architectures on AWS</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-indigo-400 mt-1">▹</span>
                  <span className="text-sm">Vector Database Optimization (Pinecone, Qdrant)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
