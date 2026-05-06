/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const albums = [
  { title: "In My Own Words", year: "2006", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop", hits: ["So Sick", "Sexy Love"] },
  { title: "Because of You", year: "2007", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&fit=crop", hits: ["Because of You", "Do You"] },
  { title: "Year of the Gentleman", year: "2008", image: "https://images.unsplash.com/photo-1459749411177-042180067385?w=400&h=400&fit=crop", hits: ["Closer", "Miss Independent"] },
  { title: "Libra Scale", year: "2010", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop", hits: ["Beautiful Monster", "Champagne Life"] },
  { title: "R.E.D.", year: "2012", image: "https://images.unsplash.com/photo-1514525253361-b83f859b73c0?w=400&h=400&fit=crop", hits: ["Let Me Love You", "Don't Make Em Like You"] },
];

export const Discography = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="music" className="relative h-[300vh] bg-zinc-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-20">
          <div className="flex flex-col justify-center min-w-[400px]">
             <h2 className="font-display text-8xl font-bold tracking-tighter mb-4">THE MUSIC.</h2>
             <p className="text-zinc-500 uppercase tracking-widest text-xs">A discography defined by elegance and soul.</p>
          </div>

          {albums.map((album, i) => (
            <div key={i} className="group relative w-[400px] flex-shrink-0">
               <div className="aspect-square bg-zinc-900 overflow-hidden mb-6">
                  <img src={album.image} alt={album.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
               </div>
               <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase">{album.title}</h3>
                    <div className="flex gap-2 mt-2">
                       {album.hits.map((hit, idx) => (
                         <span key={idx} className="text-[10px] bg-zinc-800 px-2 py-1 tracking-tighter">{hit}</span>
                       ))}
                    </div>
                  </div>
                  <span className="font-display text-4xl text-zinc-800 font-bold">{album.year}</span>
               </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
