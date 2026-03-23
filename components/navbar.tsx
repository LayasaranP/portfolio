'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <div 
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? 'w-full max-w-4xl bg-[#111111]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-6 py-3' 
            : 'w-full max-w-6xl bg-transparent border-transparent px-0'
        }`}
      >
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-1">
          Layasaran Prabhu<span className="text-indigo-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-md font-medium text-gray-400 hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2 text-   font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-4 w-[calc(100%-3rem)] max-w-md bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 md:hidden shadow-2xl pointer-events-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 text-center text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
