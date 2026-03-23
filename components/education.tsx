'use client';

import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight">Education</h2>
          <div className="h-[2px] bg-gradient-to-r from-white/80 to-transparent flex-1 max-w-xs"></div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-start hover:bg-white/[0.04] transition-all duration-300 group hover:border-indigo-500/30 backdrop-blur-sm">
          <div className="w-14 h-14 bg-[#050505] rounded-full flex items-center justify-center shrink-0 border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <GraduationCap className="text-indigo-400" size={28} />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">B.Tech Mechanical Engineering</h3>
              <span className="text-sm text-indigo-400 font-mono mt-2 sm:mt-0 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">Graduating Jul 2027</span>
            </div>
            <h4 className="text-xl text-gray-300 mb-2">Minor in Computer Science Engineering</h4>
            <p className="text-gray-500 mb-6">Vellore Institute of Technology <span className="mx-2">•</span> Tamil Nadu</p>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Relevant Coursework</h5>
              <div className="flex flex-wrap gap-3">
                {['Data Structures & Algorithms', 'Database Management Systems', 'Machine Learning', 'Cloud Computing', 'Thermodynamics', 'Fluid Mechanics'].map((course, i) => (
                  <span key={i} className="px-4 py-2 text-sm font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/50 transition-all cursor-default">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
