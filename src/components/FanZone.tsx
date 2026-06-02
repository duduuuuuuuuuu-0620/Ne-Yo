/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, User, RefreshCw } from 'lucide-react';
import { I18nContext } from '../lib/i18n';

export const FanZone = () => {
  const { t } = useContext(I18nContext);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generateLyrics = async () => {
    if (!prompt.trim() || !process.env.GEMINI_API_KEY) return;
    setLoading(true);
    try {
      const { GoogleGenAI } = await import('@google/genai');
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const anyAi = ai as any;
      const model = anyAi.getGenerativeModel
        ? anyAi.getGenerativeModel({ model: "gemini-2.0-flash" })
        : anyAi;
      const promptText = `Generate a short Ne-Yo style R&B lyric (4-6 lines) based on this mood/topic: "${prompt}". 
      Focus on smoothness, hat mentions, gentleman behavior, and clever wordplay about love. Use English.`;
      
      const result = await model.generateContent(promptText);
      const response = await result.response;
      setResult(response.text());
    } catch (error) {
      console.error(error);
      setResult("The gentleman is currently offline. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="fanzone" className="py-32 px-8 md:px-20 min-h-screen flex flex-col justify-center items-center bg-[#050505]">
      <div className="w-full max-w-4xl">
        <h2 className="font-display text-8xl font-bold tracking-tighter mb-4 text-center">{t('fanzoneTitle')}</h2>
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs text-center mb-16">{t('fanzoneSubtitle')}</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold uppercase">{t('lyricsLabTitle')}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {t('lyricsLabDescription')}
            </p>
            
            <div className="relative">
              <input
                type="text"
                placeholder={t('lyricsPlaceholder')}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-zinc-900 border-b-2 border-zinc-800 p-6 text-xl focus:outline-none focus:border-brand-red transition-colors placeholder:text-zinc-700"
              />
              <button
                onClick={generateLyrics}
                disabled={loading}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-brand-red text-white hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              >
                {loading ? <RefreshCw className="animate-spin" /> : <Send />}
              </button>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-auto h-[400px] border border-zinc-800 p-8 flex flex-col items-center justify-center overflow-hidden">
             <div className="absolute top-4 left-4 text-zinc-800 font-display text-8xl font-black select-none pointer-events-none opacity-20">LYRICS</div>
             
             <AnimatePresence mode="wait">
               {loading ? (
                 <motion.div
                   key="loading"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="flex items-center gap-2 text-zinc-500 italic"
                 >
                   <Sparkles className="animate-pulse" />
                   Channeling the gentleman...
                 </motion.div>
               ) : result ? (
                 <motion.div
                   key="result"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="text-center italic text-xl leading-relaxed font-light text-zinc-300 relative z-10"
                 >
                   <div className="mb-4 text-xs font-bold text-brand-red uppercase tracking-widest not-italic">{t('ghostVerse')}</div>
                   "{result}"
                 </motion.div>
               ) : (
                 <div className="text-zinc-700 text-center uppercase tracking-widest text-xs">
                   {t('waitingInspiration')}
                 </div>
               )}
             </AnimatePresence>
          </div>
        </div>

        <footer className="mt-40 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-[10px] font-bold tracking-widest uppercase">
           <div>{t('footerCopyright')}</div>
           <div className="flex gap-8">
             <a href="#" className="hover:text-brand-red">{t('footerInstagram')}</a>
             <a href="#" className="hover:text-brand-red">{t('footerSpotify')}</a>
             <a href="#" className="hover:text-brand-red">{t('footerTwitter')}</a>
           </div>
        </footer>
      </div>
    </section>
  );
};
