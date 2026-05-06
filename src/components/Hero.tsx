/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center px-8 md:px-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full md:w-3/4 pointer-events-none opacity-40 md:opacity-100">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop"
          alt="Ne-Yo Aesthetics"
          className="w-full h-full object-cover grayscale object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent" />
      </div>

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand-red text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4"
        >
          The Gentleman of R&B
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-[15vw] md:text-[18vw] leading-[0.8] font-bold tracking-tighter uppercase"
        >
          NE<br />
          <span className="text-stroke">YO</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 max-w-md text-zinc-400 text-sm leading-relaxed"
        >
          Shaffer Chimere Smith — Better known as Ne-Yo. Three-time Grammy winner. Master songwriter. The architect of a decade's hits.
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-8 md:left-20 flex items-center gap-4 text-[10px] tracking-widest uppercase opacity-50">
        <div className="w-8 h-[1px] bg-white" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};
