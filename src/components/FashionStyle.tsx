/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext, useEffect, useState } from 'react';
import { I18nContext } from '../lib/i18n';

const fashionItems = [
  {
    title: 'Stage Outfits',
    description: 'Tailored suits and dramatic stagewear that define his performance persona.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1600&h=900&fit=crop'
  },
  {
    title: 'Red Carpet',
    description: 'Elegant silhouettes and sharp tailoring for every premiere and awards night.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&h=900&fit=crop'
  },
  {
    title: 'Iconic Hats',
    description: 'Fedora, flat cap, and signature hat moments that complete the gentleman look.',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1600&h=900&fit=crop'
  },
  {
    title: 'Black & White Portraits',
    description: 'Timeless imagery that captures the soul of Ne-Yo as a modern gentleman.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1600&h=900&fit=crop&auto=format'
  }
];

export const FashionStyle = () => {
  const { t } = useContext(I18nContext);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('fashion');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
        const maxDistance = windowHeight * 1.5;
        const newOpacity = Math.max(0.6, 1 - distanceFromCenter / maxDistance * 0.4);
        setOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="fashion" className="relative bg-[#050505] text-white py-24 overflow-hidden" style={{ opacity }}>
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#050505] to-transparent" />
      <div className="mx-auto max-w-[1400px] px-8 md:px-20">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <span className="text-brand-red uppercase tracking-[0.4em] text-sm font-bold">{t('fashionLabel')}</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter">{t('fashionHeadline')}</h2>
            <p className="max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed">
              {t('fashionDescription')}
            </p>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
            <img
              src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1600&h=900&fit=crop"
              alt="Fashion highlight"
              className="w-full h-full object-cover min-h-[320px]"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {fashionItems.map((item, index) => (
            <article key={index} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 transition hover:-translate-y-2 hover:border-brand-red/40 hover:shadow-[0_35px_120px_-45px_rgba(255,0,0,0.5)]">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="relative p-8 md:p-10">
                <span className="text-brand-red uppercase tracking-[0.4em] text-xs font-bold">{item.title}</span>
                <p className="mt-4 text-xl font-semibold leading-tight">{item.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-white/70">
                  <span>{t('fashionDiscover')}</span>
                  <span className="inline-block h-px w-10 bg-white/30" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
