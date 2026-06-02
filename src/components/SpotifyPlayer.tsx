/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext, useState } from 'react';
import { I18nContext } from '../lib/i18n';

const albums = [
  {
    id: 'year-of-the-gentleman',
    title: 'Year of the Gentleman',
    cover: 'https://i.scdn.co/image/ab67616d0000b27365fcb748111ff97d5ca047d8',
    embedUrl: 'https://open.spotify.com/embed/album/3LLmfLDh6xjeZGC1t0DZBX?utm_source=generator'
  },
  {
    id: 'another-kind-of-christmas',
    title: 'Another Kind Of Christmas',
    cover: 'https://i.scdn.co/image/ab67616d0000b27302906d50a4160d8c8c555952',
    embedUrl: 'https://open.spotify.com/embed/album/4eXU2dSDm6vhvVPujL5etw?utm_source=generator'
  },
  {
    id: 'self-explanatory',
    title: 'Self Explanatory',
    cover: 'https://i.scdn.co/image/ab67616d0000b273a238938e2ab10a010e733a44',
    embedUrl: 'https://open.spotify.com/embed/album/01Uup2bu0jcnyaNmHjgTF4?utm_source=generator'
  },
  {
    id: 'in-my-own-words-deluxe',
    title: 'In My Own Words (Deluxe 15th Anniversary Edition)',
    cover: 'https://i.scdn.co/image/ab67616d0000b27304b67fb83d6cb42795cf6a9e',
    embedUrl: 'https://open.spotify.com/embed/album/4uQ89DNW3sb8WxzmlI7jP1?utm_source=generator'
  },
  {
    id: 'good-man-deluxe',
    title: 'GOOD MAN (Deluxe)',
    cover: 'https://i.scdn.co/image/ab67616d0000b2738c50fc77304863408fc48866',
    embedUrl: 'https://open.spotify.com/embed/album/5kXmI1B0BLb2joTTAckz9n?utm_source=generator'
  },
  {
    id: 'non-fiction-deluxe',
    title: 'Non-Fiction (Deluxe)',
    cover: 'https://i.scdn.co/image/ab67616d0000b273b0ace2a1f51747bddb9c9495',
    embedUrl: 'https://open.spotify.com/embed/album/6MGvEl6OdTKKAbmBFjxOKQ?utm_source=generator'
  }
];

export const SpotifyPlayer = () => {
  const { t } = useContext(I18nContext);
  const [currentAlbum, setCurrentAlbum] = useState<string | null>(null);

  return (
    <section id="music" className="relative bg-zinc-950 py-20">
      <div className="mx-auto max-w-[1600px] px-8 md:px-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-6xl md:text-7xl font-bold tracking-tighter mb-4">{t('musicTitle')}</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-xs">{t('musicSubtitle')}</p>
          </div>
        </div>

        <div className="mt-14 overflow-visible">  
          <h3 className="font-display text-3xl font-bold uppercase tracking-tight mb-6">{t('musicSectionTitle')}</h3>
          <div className="flex overflow-x-auto overflow-y-visible gap-12 pb-6 pr-6 snap-x snap-mandatory touch-pan-x scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-950">
            {albums.map((album) => (
              <button
                key={album.id}
                type="button"
                onClick={() => setCurrentAlbum(album.id)}
                className="group relative min-w-[280px] md:min-w-[320px] snap-start flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/20 transition-all duration-500 scale-95 hover:scale-125 hover:z-10 hover:shadow-2xl hover:shadow-black/40"
              >
                <img
                  src={album.cover}
                  alt={`${album.title} album cover`}
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-lg font-display font-bold uppercase tracking-[0.2em] text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{album.title}</div>
                  <div className="text-xs uppercase tracking-[0.4em] text-zinc-300 mb-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{t('musicActionHint')}</div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    {t('musicPlayButton')}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {currentAlbum && (
            <div className="mt-8 mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80">
              <iframe
                title="Spotify Album Embed"
                src={albums.find(album => album.id === currentAlbum)?.embedUrl}
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
    </section>
  );
};