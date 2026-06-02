/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SpotifyPlayer } from './components/SpotifyPlayer';
import { Performance } from './components/Performance';
import { Career } from './components/Career';
import { FanZone } from './components/FanZone';
import { I18nContext, LangKey, translations } from './lib/i18n';
import confetti from 'canvas-confetti';

export default function App() {
  const [lang, setLang] = useState<LangKey>('en');

  useEffect(() => {
    // Initial entrance splash
    console.log("Welcome to Ne-Yo: The Gentleman's Legacy");

    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language;
      if (browserLang.includes('zh')) {
        setLang('zh');
      }
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      lang,
      setLang,
      t: (key: string) => translations[lang][key] || key
    }),
    [lang]
  );

  return (
    <I18nContext.Provider value={contextValue}>
      <main className="bg-[#050505] min-h-screen relative selection:bg-brand-red selection:text-white">
        <Navigation />
        
        <Hero />
        
        <SpotifyPlayer />
        
        <div className="h-[25vh] bg-gradient-to-b from-zinc-950 to-black" />
        
        <Performance />
        
        <div className="h-[15vh] bg-gradient-to-b from-black to-[#050505]" />
        
        <Career />
        
        <div className="h-[15vh] bg-gradient-to-b from-zinc-950 to-[#050505]" />
        
        <FanZone />
        
        {/* Decorative vertical lines */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
          <div className="absolute left-1/4 h-full w-[1px] bg-white" />
          <div className="absolute left-1/2 h-full w-[1px] bg-white" />
          <div className="absolute left-3/4 h-full w-[1px] bg-white" />
        </div>
      </main>
    </I18nContext.Provider>
  );
}

