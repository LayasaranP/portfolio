'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
          What&apos;s Next?
        </div>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white mb-6">Get In Touch</h2>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
          I&apos;m currently open to new opportunities, internships, and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <a
            href="mailto:layasaranp@gmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Say Hello <Send size={18} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex items-center gap-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors group">
            <div className="w-14 h-14 bg-[#050505] rounded-full flex items-center justify-center shrink-0 border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:scale-110 transition-transform">
              <Mail className="text-indigo-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
              <p className="text-white font-medium text-lg">layasaranp@gmail.com</p>
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex items-center gap-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors group">
            <div className="w-14 h-14 bg-[#050505] rounded-full flex items-center justify-center shrink-0 border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:scale-110 transition-transform">
              <MapPin className="text-indigo-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
              <p className="text-white font-medium text-lg">Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
