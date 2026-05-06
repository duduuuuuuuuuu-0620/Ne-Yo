/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Camera, Music, Heart } from 'lucide-react';

const ExperienceItem = ({ icon: Icon, title, subtitle, description, year }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border-l border-zinc-800 pl-8 pb-12 relative"
  >
    <div className="absolute -left-3 top-0 w-6 h-6 bg-[#050505] border-2 border-brand-red flex items-center justify-center">
      <Icon className="w-3 h-3 text-brand-red" />
    </div>
    <span className="text-brand-red font-display font-medium text-sm mb-2 block">{year}</span>
    <h3 className="text-3xl font-display font-bold uppercase mb-1">{title}</h3>
    <h4 className="text-brand-red/60 text-xs font-bold tracking-widest uppercase mb-4">{subtitle}</h4>
    <p className="text-zinc-500 text-sm leading-relaxed max-w-md">{description}</p>
  </motion.div>
);

export const Career = () => {
  return (
    <section id="career" className="py-32 px-8 md:px-20 grid md:grid-cols-2 gap-20 bg-zinc-950">
      <div>
        <h2 className="font-display text-7xl font-bold tracking-tighter mb-12 uppercase leading-none">
          Beyond<br /><span className="text-stroke">The Mic</span>
        </h2>
        <div className="space-y-4">
          <ExperienceItem
            icon={Award}
            year="2006 - PRESENT"
            title="Grammy Laurels"
            subtitle="Recognition of Excellence"
            description="Winner of 3 Grammy Awards and 15 nominations. His signature songwriting for others changed the landscape of late 2000s pop."
          />
          <ExperienceItem
            icon={Camera}
            year="2007 - PRESENT"
            title="Silver Screen"
            subtitle="The Actor's Journey"
            description="Starred in cult classics like 'Stomp the Yard' and 'Save the Last Dance 2', and historical drama 'Red Tails'."
          />
           <ExperienceItem
            icon={Music}
            year="THE GHOSTWRITER"
            title="Songwriting"
            subtitle="The Pen behind 'Irreplaceable'"
            description="Wrote massive hits for Beyoncé, Rihanna ('Unfaithful'), and more. A true master of emotional R&B narratives."
          />
        </div>
      </div>

      <div className="relative">
         <div className="sticky top-32 space-y-8">
            <div className="aspect-[4/5] bg-zinc-900 relative overflow-hidden group">
               <img
                 src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&fit=crop"
                 alt="Performing"
                 className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute bottom-8 left-8">
                  <div className="text-[120px] font-display font-black leading-none opacity-20 select-none">01</div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-8 border border-zinc-800 flex flex-col justify-between aspect-square">
                  <Heart className="text-brand-red w-8 h-8" />
                  <div>
                    <h5 className="font-display font-bold uppercase">Personal Life</h5>
                    <p className="text-[10px] text-zinc-500 mt-2 uppercase tracking-tight">Focus on family and philanthropy through the Composite Foundation.</p>
                  </div>
               </div>
               <div className="bg-brand-red p-8 flex flex-col justify-between aspect-square text-white">
                  <span className="font-display text-4xl font-bold">15+</span>
                  <p className="text-[10px] font-bold uppercase tracking-wider">Years of dominating the R&B charts globally.</p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};
