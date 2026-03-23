'use client';

import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight">Work Experience</h2>
          <div className="h-[2px] bg-gradient-to-r from-white/80 to-transparent flex-1 max-w-xs"></div>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Glowing Timeline line */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent -translate-x-1/2"></div>

          {/* Experience Item */}
          <div className="relative md:w-1/2 md:pr-16 ml-auto md:ml-0">
            {/* Timeline dot */}
            <div className="absolute left-[-32px] md:right-[-40px] md:left-auto top-1 w-10 h-10 bg-[#050505] border border-indigo-500/50 rounded-full flex items-center justify-center translate-x-0 md:translate-x-1/2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Briefcase size={16} className="text-indigo-400" />
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-300 group hover:border-indigo-500/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">Cloud Engineer Intern</h3>
                <span className="text-sm text-indigo-400 font-mono mt-1 sm:mt-0 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">Jun 2025 – Jul 2025</span>
              </div>
              <h4 className="text-lg text-gray-300 mb-6">KONE <span className="text-gray-500 text-sm ml-2">| Chennai, Tamil Nadu</span></h4>
              <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">▹</span>
                  <span>Designed and implemented a dashboard using React and Tailwindcss to visualize data retrieved from sensor and stored in DynamoDB, decreasing time to understand the health of elevator by over 10 times.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">▹</span>
                  <span>Ensured only authorized employees have access to the application by creating an AWS Lambda@Edge function to intercept and sign valid requests.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">▹</span>
                  <span>Devised and deployed the infrastructure in TypeScript through AWS CDK, then created efficient algorithms to process data from a custom REST API, so it could scale to handle millions of deliveries.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
