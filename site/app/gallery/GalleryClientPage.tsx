'use client';

import { X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { PageShell } from '@/components/page-shell';
import { galleryItems } from '@/components/site-data';

const filters = ['All', 'Surf', 'Ocean', 'Lifestyle', 'Aerial'] as const;

export default function GalleryClientPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const selectedItem = galleryItems.find((item) => item.title === selectedTitle) ?? null;

  return (
    <PageShell>
      <main className="bg-primary pt-28 text-secondary">
        <section className="border-b border-secondary/10 bg-primary py-16 md:py-20">
          <div className="container-shell text-center">
            <p className="eyebrow text-mist">Archive</p>
            <h1 className="mt-4 text-4xl text-secondary md:text-6xl">Surf photography gallery in Mount Maunganui.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-secondary/76">
              Browse surf, ocean, lifestyle, and aerial studies. Tap into the detail. Open each frame for print sizes and pricing.
            </p>
          </div>
        </section>

        <section className="sticky top-[84px] z-30 border-b border-secondary/10 bg-primary/95 py-4 backdrop-blur-md">
          <div className="container-shell overflow-x-auto">
            <div className="flex min-w-max gap-3">
              {filters.map((filter) => {
                const active = filter === activeFilter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`inline-flex items-center gap-2 rounded-pill px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] ${active ? 'bg-secondary text-primary' : 'bg-white/6 text-secondary/78 hover:bg-white/12'}`}
                  >
                    <span className={`h-2 w-2 rounded-full ${active ? 'bg-accent' : 'bg-mist/50'}`} />
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-primary py-8 pb-16 md:pb-24 lg:pb-32">
          <div className="mx-auto grid max-w-gallery gap-4 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {filteredItems.map((item, index) => (
              <button
                key={`${item.title}-${index}`}
                type="button"
                onClick={() => setSelectedTitle(item.title)}
                className="group text-left"
              >
                <div className="overflow-hidden rounded-xl bg-white/5">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full min-h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">{item.category}</p>
                    <h2 className="mt-1 text-xl text-secondary">{item.title}</h2>
                  </div>
                  <span className="text-sm text-secondary/56">View</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="bg-secondary py-14 text-primary md:py-20">
          <div className="container-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl">Seen something that belongs on your wall?</h2>
              <p className="mt-4 max-w-2xl text-primary/72">
                Every gallery image is available as a fine art print with archival materials and framing options.
              </p>
            </div>
            <a href="/prints" className="button-primary">
              Explore print options
            </a>
          </div>
        </section>

        {selectedItem ? (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 px-5 py-8">
            <div className="relative grid max-h-full w-full max-w-6xl gap-6 overflow-auto rounded-[32px] bg-primary p-5 shadow-hard lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
              <button
                type="button"
                onClick={() => setSelectedTitle(null)}
                className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
              <div className="overflow-hidden rounded-2xl">
                <img src={selectedItem.image} alt={selectedItem.alt} className="h-full w-full object-cover" />
              </div>
              <aside className="self-end rounded-2xl border border-secondary/10 bg-secondary/8 p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist">{selectedItem.category}</p>
                <h2 className="mt-3 text-3xl text-secondary md:text-4xl">{selectedItem.title}</h2>
                <p className="mt-6 text-sm uppercase tracking-[0.18em] text-secondary/58">Available sizes</p>
                <p className="mt-2 text-lg text-secondary/82">{selectedItem.sizes}</p>
                <p className="mt-6 text-sm uppercase tracking-[0.18em] text-secondary/58">Starting price</p>
                <p className="mt-2 text-lg text-accent">{selectedItem.price}</p>
                <p className="mt-8 text-secondary/72">
                  Printed on archival stock and available framed or unframed. For current edition availability, enquire with the title above.
                </p>
                <a href="/contact" className="button-primary mt-8 inline-flex">
                  Enquire about this print
                </a>
              </aside>
            </div>
          </div>
        ) : null}
      </main>
    </PageShell>
  );
}
