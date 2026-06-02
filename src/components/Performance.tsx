/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { I18nContext } from '../lib/i18n';

const basePerformanceItems = [
  {
    id: 'live-clip-1',
    type: 'video',
    titleKey: 'perfItem1Title',
    descKey: 'perfItem1Desc',
    catKey: 'perfItem1Cat',
    media: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop'
  },
  {
    id: 'tour-photo-1',
    type: 'image',
    titleKey: 'perfItem2Title',
    descKey: 'perfItem2Desc',
    catKey: 'perfItem2Cat',
    media: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&h=1080&fit=crop'
  },
  {
    id: 'choreography-1',
    type: 'video',
    titleKey: 'perfItem3Title',
    descKey: 'perfItem3Desc',
    catKey: 'perfItem3Cat',
    media: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1920&h=1080&fit=crop'
  },
  {
    id: 'stage-costume-1',
    type: 'image',
    titleKey: 'perfItem4Title',
    descKey: 'perfItem4Desc',
    catKey: 'perfItem4Cat',
    media: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop'
  },
  {
    id: 'documentary-1',
    type: 'video',
    titleKey: 'perfItem5Title',
    descKey: 'perfItem5Desc',
    catKey: 'perfItem5Cat',
    media: 'https://images.unsplash.com/photo-1489599735734-79b4d4c4b3a?w=1920&h=1080&fit=crop'
  }
];

export const Performance = () => {
  const { t } = useContext(I18nContext);

  const performanceItems = basePerformanceItems.map(item => ({
    id: item.id,
    type: item.type,
    title: t(item.titleKey),
    description: t(item.descKey),
    category: t(item.catKey),
    media: item.media
  }));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHoveringTrigger, setIsHoveringTrigger] = useState(false);

  useEffect(() => {
    if (!isHoveringTrigger) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % performanceItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHoveringTrigger]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % performanceItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + performanceItems.length) % performanceItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="performance" className="relative h-screen bg-black overflow-hidden">
      {/* Background Media */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94] // Cinema-like easing
          }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <img
              src={performanceItems[currentIndex].media}
              alt={performanceItems[currentIndex].title}
              className="w-full h-full object-cover"
            />
            {/* Video overlay effect for video items */}
            {performanceItems[currentIndex].type === 'video' && (
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-blue-900/20" />
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Hover Trigger Zone */}
      <div
        className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20"
        onMouseEnter={() => setIsHoveringTrigger(true)}
        onMouseLeave={() => setIsHoveringTrigger(false)}
      >
        <motion.div
          animate={{
            scale: isHoveringTrigger ? 1.1 : 1,
            opacity: isHoveringTrigger ? 1 : 0.7
          }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300"
        >
          <motion.div
            animate={{ rotate: isHoveringTrigger ? 360 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <SkipForward className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
        <div className="text-center mt-2">
          <span className="text-white/70 text-xs uppercase tracking-widest font-bold">{t('hoverAdvance')}</span>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-20">
        <motion.div
          key={`content-${currentIndex}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-brand-red/90 text-white text-sm uppercase tracking-widest font-bold rounded-full mb-4">
              {performanceItems[currentIndex].category}
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
              {performanceItems[currentIndex].title}
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              {performanceItems[currentIndex].description}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={prevSlide}
              className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
            >
              <SkipBack className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
            >
              <SkipForward className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              ) : (
                <Volume2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Progress Indicators */}
        <div className="mt-12 flex gap-3">
          {performanceItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'bg-brand-red w-12'
                  : 'bg-white/30 w-8 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Section Title */}
      <div className="absolute top-20 left-8 md:left-20 z-10">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-white"
        >
          {t('performanceTitle')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-zinc-400 uppercase tracking-widest text-sm mt-2"
        >
          {t('performanceSubtitle')}
        </motion.p>
      </div>
    </section>
  );
};