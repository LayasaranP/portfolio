'use client';

import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'TypeScript', 'SQL', 'NoSQL'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['PyTorch', 'Keras', 'Hugging Face', 'Scikit-learn', 'PIL', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'LLM Orchestration',
    skills: ['LangChain', 'LangGraph', 'DeepAgents', 'CrewAI', 'ADK', 'Pinecone', 'Qdrant', 'ChromaDB'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Express.js', 'FastAPI', 'Spring Boot'],
  },
  {
    title: 'Tools & Cloud',
    skills: ['Git', 'AWS', 'Docker', 'Jira', 'Redis'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight">Technical Skills</h2>
          <div className="h-[2px] bg-gradient-to-r from-white/80 to-transparent flex-1 max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-300 group hover:border-indigo-500/30">
              <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-indigo-400 transition-colors">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
