'use client';

import { motion } from 'motion/react';

const OrbitDot = ({ angle, radius, duration, size, color }: {
  angle: number; radius: number; duration: number; size: number; color: string;
}) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      background: color,
      boxShadow: `0 0 ${size * 3}px ${color}`,
      top: '50%',
      left: '50%',
    }}
    animate={{
      x: [
        Math.cos((angle * Math.PI) / 180) * radius,
        Math.cos(((angle + 120) * Math.PI) / 180) * radius,
        Math.cos(((angle + 240) * Math.PI) / 180) * radius,
        Math.cos((angle * Math.PI) / 180) * radius,
      ],
      y: [
        Math.sin((angle * Math.PI) / 180) * radius * 0.4,
        Math.sin(((angle + 120) * Math.PI) / 180) * radius * 0.4,
        Math.sin(((angle + 240) * Math.PI) / 180) * radius * 0.4,
        Math.sin((angle * Math.PI) / 180) * radius * 0.4,
      ],
      opacity: [0.4, 1, 0.4],
    }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const Rune = ({ char, x, delay }: { char: string; x: string; delay: number }) => (
  <motion.span
    className="absolute text-[10px] font-mono select-none"
    style={{
      left: x,
      top: '50%',
      translateY: '-50%',
      color: 'rgba(165,120,255,0.5)',
      fontFamily: '"Courier New", monospace',
    }}
    animate={{ opacity: [0, 0.7, 0], y: [0, -8, -16] }}
    transition={{ duration: 2.5, repeat: Infinity, delay, ease: 'easeOut' }}
  >
    {char}
  </motion.span>
);

export default function Divider() {
  const runes = ['✦', '◈', '⊕', '◉', '✧', '⋄', '◇', '⟡'];

  return (
    <div className="w-full flex items-center justify-center py-16 select-none">
      <div className="relative flex items-center justify-center w-full max-w-2xl">

        {/* Floating runes above left arm */}
        {runes.slice(0, 4).map((char, i) => (
          <Rune key={i} char={char} x={`${8 + i * 7}%`} delay={i * 0.4} />
        ))}
        {runes.slice(4).map((char, i) => (
          <Rune key={i + 4} char={char} x={`${60 + i * 7}%`} delay={i * 0.4 + 0.2} />
        ))}

        {/* ── Left arm ── */}
        <div className="relative flex-1 flex items-center">
          {/* base line */}
          <motion.div
            className="h-px w-full origin-right"
            style={{
              background: 'linear-gradient(to left, rgba(139,92,246,0.85), rgba(99,102,241,0.2), transparent)',
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* shimmer sweep */}
          <motion.div
            className="absolute inset-y-0 w-1/3 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(167,139,250,0.6), transparent)',
              filter: 'blur(1px)',
            }}
            animate={{ x: ['-100%', '400%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
          />
          {/* tick marks */}
          {[0.72, 0.52, 0.36].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-px"
              style={{
                left: `${pos * 100}%`,
                height: 4 + i * 2,
                background: `rgba(139,92,246,${0.8 - i * 0.2})`,
                boxShadow: '0 0 4px rgba(139,92,246,0.5)',
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
            />
          ))}
        </div>

        {/* ── Central jewel ── */}
        <div className="relative mx-8 flex-shrink-0" style={{ width: 56, height: 56 }}>
          {/* outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
              boxShadow: '0 0 32px 8px rgba(139,92,246,0.25)',
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* spinning dashed ring */}
          <motion.div
            className="absolute"
            style={{
              inset: -8,
              borderRadius: '50%',
              border: '1px dashed rgba(139,92,246,0.35)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />

          {/* counter-spinning ring */}
          <motion.div
            className="absolute"
            style={{
              inset: -14,
              borderRadius: '50%',
              border: '1px solid transparent',
              borderTop: '1px solid rgba(99,102,241,0.5)',
              borderBottom: '1px solid rgba(167,139,250,0.3)',
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          {/* orbiting dots */}
          <OrbitDot angle={0}   radius={22} duration={4}   size={4} color="rgba(167,139,250,0.9)" />
          <OrbitDot angle={120} radius={22} duration={4}   size={3} color="rgba(99,102,241,0.8)"  />
          <OrbitDot angle={240} radius={22} duration={4}   size={4} color="rgba(196,181,253,0.85)" />

          {/* ── Core gem ── */}
          <motion.div
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #312e81 0%, #1e1b4b 50%, #0f0a2e 100%)',
              boxShadow: '0 0 0 1px rgba(139,92,246,0.4), 0 0 20px rgba(139,92,246,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
            }}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* inner shine facet */}
            <div
              className="absolute rounded-full"
              style={{
                inset: 4,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)',
              }}
            />
            {/* SVG diamond glyph */}
            <motion.svg
              width="22" height="22" viewBox="0 0 24 24" fill="none"
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M12 2 L20 9 L12 22 L4 9 Z"
                fill="none"
                stroke="rgba(167,139,250,0.9)"
                strokeWidth="1.2"
              />
              <path
                d="M4 9 L12 12 L20 9"
                stroke="rgba(196,181,253,0.6)"
                strokeWidth="0.8"
              />
              <circle cx="12" cy="12" r="1.5" fill="rgba(255,255,255,0.9)" />
            </motion.svg>
          </motion.div>
        </div>

        {/* ── Right arm ── */}
        <div className="relative flex-1 flex items-center">
          <motion.div
            className="h-px w-full origin-left"
            style={{
              background: 'linear-gradient(to right, rgba(139,92,246,0.85), rgba(99,102,241,0.2), transparent)',
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 w-1/3 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(167,139,250,0.6), transparent)',
              filter: 'blur(1px)',
            }}
            animate={{ x: ['400%', '-100%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut', delay: 1.5 }}
          />
          {[0.28, 0.48, 0.64].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-px"
              style={{
                left: `${pos * 100}%`,
                height: 4 + (2 - i) * 2,
                background: `rgba(139,92,246,${0.4 + i * 0.2})`,
                boxShadow: '0 0 4px rgba(139,92,246,0.5)',
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}