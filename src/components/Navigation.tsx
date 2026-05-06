/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const Navigation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: 'hero', label: 'THE LEGACY' },
    { id: 'music', label: 'MUSIC' },
    { id: 'career', label: 'CAREER' },
    { id: 'personal', label: 'PERSONAL' },
    { id: 'fanzone', label: 'FAN ZONE' }
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-50 origin-left"
        style={{ scaleX }}
      />
      <header className="fixed top-8 left-8 right-8 z-40 flex justify-between items-center mix-blend-difference">
        <span className="font-display font-bold text-2xl tracking-tighter">NE-YO.</span>
        <nav className="hidden md:flex gap-8 items-center text-[10px] font-medium tracking-[0.2em] uppercase">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-brand-red transition-colors">
              {s.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};
