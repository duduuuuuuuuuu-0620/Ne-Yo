/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

const albums = [
  { title: "In My Own Words", year: "2006", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop", hits: ["So Sick", "Sexy Love"] },
  { title: "Because of You", year: "2007", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&fit=crop", hits: ["Because of You", "Do You"] },
  { title: "Year of the Gentleman", year: "2008", image: "https://images.unsplash.com/photo-1459749411177-042180067385?w=400&h=400&fit=crop", hits: ["Closer", "Miss Independent"] },
  { title: "Libra Scale", year: "2010", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop", hits: ["Beautiful Monster", "Champagne Life"] },
  { title: "R.E.D.", year: "2012", image: "https://images.unsplash.com/photo-1514525253361-b83f859b73c0?w=400&h=400&fit=crop", hits: ["Let Me Love You", "Don't Make Em Like You"] },
];

export const Discography = () => {
  const [showSpotifyPlayer, setShowSpotifyPlayer] = useState(false);

  return (
    <section id="music" className="relative bg-zinc-950 py-20">
      <div className="mx-auto max-w-[1600px] px-8 md:px-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-6xl md:text-7xl font-bold tracking-tighter mb-4">THE MUSIC.</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-xs">A discography defined by elegance and soul.</p>
          </div>
          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">Swipe left / right to explore</div>
        </div>

        <div className="flex overflow-x-auto overflow-y-hidden gap-8 pb-6 pr-6 snap-x snap-mandatory touch-pan-x scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-950">
          {albums.map((album, i) => (
            <div key={i} className="group relative min-w-[320px] md:min-w-[380px] snap-start flex-shrink-0">
              <div className="aspect-square bg-zinc-900 overflow-hidden mb-6 rounded-3xl border border-white/5 shadow-2xl shadow-black/30">
                <img src={album.image} alt={album.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{album.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {album.hits.map((hit, idx) => (
                        <span key={idx} className="text-[10px] bg-zinc-800 px-2 py-1 tracking-tighter rounded-full">{hit}</span>
                      ))}
                    </div>
                  </div>
                  <span className="font-display text-4xl text-zinc-800 font-bold">{album.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-display text-3xl font-bold uppercase tracking-tight mb-6">Listen on Spotify</h3>
          <div className="mx-auto max-w-[420px]">
            <button
              type="button"
              onClick={() => setShowSpotifyPlayer(true)}
              className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/20 transition hover:scale-[1.01]"
            >
              <img
                src="https://i.scdn.co/image/ab67616d0000b27365fcb748111ff97d5ca047d8"
                alt="Year of the Gentleman album cover"
                className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
                <div className="text-2xl font-display font-bold uppercase tracking-[0.3em] text-white mb-3">Year of the Gentleman</div>
                <div className="text-xs uppercase tracking-[0.4em] text-zinc-300 mb-5">Click to open music player</div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white">
                  ▶ Play album
                </span>
              </div>
            </button>

            {showSpotifyPlayer && (
              <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80">
                <iframe
                  title="Spotify Album Embed"
                  src="https://open.spotify.com/embed/album/3LLmfLDh6xjeZGC1t0DZBX?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
