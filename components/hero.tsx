'use client';

import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail, X } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-18 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
          <span className="relative flex w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for opportunities
        </div>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-2 leading-[1.1]">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">Layasaran</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Prabhu.</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-400 mb-8 max-w-2xl">
          Bridging Cloud Computing and Artificial Intelligence.
        </h2>
        
        <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
          I&apos;m an aspiring Cloud Engineer and AI Developer specializing in machine learning, LLM orchestration, and scalable cloud architectures. Currently bridging the gap between mechanical engineering and intelligent software.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-12">
          <Link
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all hover:scale-105"
          >
            View Projects <ArrowRight size={18} />
          </Link>
          <a
            href="/Layasaran_Prabhu_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
          >
            Download Resume <Download size={18} />
          </a>
        </div>

        <div className="flex items-center gap-6 text-gray-400">
          <a href="https://github.com/LayasaranP" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/layasaran-p" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 hover:scale-110 transition-all">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=layasaranp@gmail.com" 
             target="_blank" className="hover:text-white hover:scale-110 transition-all">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
          <a href='https://x.com/layasaranp' target="_blank" className="hover:text-white hover:scale-110 transition-all">
            <X size={30} />
            <span className="sr-only">X</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
