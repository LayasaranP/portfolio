'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Education from '@/components/education';
import Certifications from '@/components/certifications';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import dynamic from 'next/dynamic';

const BackgroundAnimation = dynamic(
  () => import('@/components/backgroundAnimation'),
  { ssr: false }
);

const Divider = dynamic(() => import('@/components/divider'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f1f3f5] font-sans selection:bg-indigo-500/30 relative overflow-hidden">
      {/* Atmospheric Background */}
      <BackgroundAnimation />

      <div className="relative z-10">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Education />
          <Divider />
          <Skills />
          <Divider />
          <Experience />
          <Divider />
          <Projects />
          <Divider />
          <Certifications />
          <Divider />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
