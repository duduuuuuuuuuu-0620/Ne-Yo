/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { I18nContext } from '../lib/i18n';

export const Navigation = () => {
  const { setLang, lang, t } = useContext(I18nContext);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: 'hero', label: t('navLegacy') },
    { id: 'music', label: t('navMusic') },
    { id: 'career', label: t('navCareer') },
    { id: 'personal', label: t('navPersonal') },
    { id: 'fanzone', label: t('navFanzone') }
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
          <button
            type="button"
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="px-3 py-2 text-[10px] font-semibold tracking-[0.2em] uppercase border border-white/20 rounded hover:bg-white/10 transition"
          >
            {t('navLanguage')}
          </button>
        </nav>
      </header>
    </>
  );
};
