/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Discography } from './components/Discography';
import { Career } from './components/Career';
import { FanZone } from './components/FanZone';
import confetti from 'canvas-confetti';

export default function App() {
  useEffect(() => {
    // Initial entrance splash
    console.log("Welcome to Ne-Yo: The Gentleman's Legacy");
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen relative selection:bg-brand-red selection:text-white">
      <Navigation />
      
      <Hero />
      
      <Discography />
      
      <div className="h-[20vh] bg-gradient-to-b from-zinc-950 to-transparent" />
      
      <Career />
      
      <FanZone />
      
      {/* Decorative vertical lines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
        <div className="absolute left-1/4 h-full w-[1px] bg-white" />
        <div className="absolute left-1/2 h-full w-[1px] bg-white" />
        <div className="absolute left-3/4 h-full w-[1px] bg-white" />
      </div>
    </main>
  );
}

