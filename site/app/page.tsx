import Link from 'next/link';

import { NewsletterSignup } from '@/components/newsletter-signup';
import { PageShell } from '@/components/page-shell';

const previewItems = [
  {
    title: 'Salt On Film',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900&h=1200&fit=crop',
    alt: 'Surfer lifestyle portrait in warm coastal light',
  },
  {
    title: 'Hold The Edge',
    category: 'Surf',
    image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=900&h=1400&fit=crop',
    alt: 'Surfer moving through breaking wave',
  },
  {
    title: 'Amber Break',
    category: 'Ocean',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900&h=1100&fit=crop',
    alt: 'Textured ocean surface at sunset',
  },
  {
    title: 'Inside The Section',
    category: 'Surf',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&h=1300&fit=crop',
    alt: 'Wave action with sunlit spray',
  },
  {
    title: 'Sandbar Geometry',
    category: 'Aerial',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=1000&fit=crop',
    alt: 'Aerial coastal patterns and sandbars',
  },
  {
    title: 'Boardwalk Quiet',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=900&h=1250&fit=crop',
    alt: 'Figure walking near shoreline at dusk',
  },
];

export default function HomePage() {
  return (
    <PageShell transparentHeader>
      <main>
        <section className="relative flex min-h-screen items-end overflow-hidden bg-primary">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&h=2200&fit=crop"
            alt="Golden light over ocean swell rolling toward shore"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/35 to-primary/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/55 via-transparent to-transparent" />
          <div className="container-shell relative z-10 grid gap-10 pb-14 pt-36 md:pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pb-16">
            <div className="max-w-3xl reveal">
              <p className="eyebrow text-secondary/80">Mount Maunganui, New Zealand</p>
              <h1 className="mt-5 max-w-4xl font-heading text-5xl leading-[0.95] text-secondary md:text-7xl lg:text-[5.5rem]">
                Surf culture, framed like fine art.
              </h1>
              <p className="mt-6 max-w-2xl text-secondary/82">
                Saltwater Sessions documents swell, stillness, and golden-hour texture from the shoreline to the sky. Limited-edition prints, gallery releases, and hands-on workshops for people who see the ocean as more than backdrop.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/gallery" className="button-primary">
                  View the Gallery
                </Link>
                <Link href="/prints" className="inline-flex items-center justify-center rounded-pill border border-secondary/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-secondary hover:-translate-y-0.5 hover:bg-secondary hover:text-primary">
                  Explore Prints
                </Link>
              </div>
            </div>
            <div className="reveal reveal-delay-1 justify-self-end rounded-xl border border-secondary/14 bg-secondary/10 p-5 backdrop-blur-sm lg:max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary/60">From the shoreline</p>
              <ul className="mt-4 grid gap-3 text-sm uppercase tracking-[0.16em] text-secondary/82">
                <li>Limited-edition prints</li>
                <li>Surf + ocean photography</li>
                <li>Workshops at the Mount</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-shell bg-secondary">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="reveal max-w-xl">
              <p className="eyebrow">Featured frames</p>
              <h2 className="mt-4 text-4xl md:text-6xl">A study in motion, light, and salt.</h2>
              <p className="mt-6 text-primary/72">
                A rotating selection from recent surf, ocean, lifestyle, and aerial sessions. Shot with a documentary eye. Finished for the wall.
              </p>
              <Link href="/gallery" className="button-secondary mt-8">
                See all works
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {previewItems.map((item, index) => (
                <article key={item.title} className={`image-lift reveal reveal-delay-${(index % 4) + 1}`}>
                  <img src={item.image} alt={item.alt} loading="lazy" className="h-full min-h-[260px] w-full object-cover" />
                  <div className="bg-white px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">{item.category}</p>
                    <h3 className="mt-2 text-xl">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 md:py-24">
          <div className="container-shell grid gap-10 overflow-hidden rounded-[32px] border border-secondary/10 bg-gradient-to-r from-primary via-[#112d50] to-primary lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow text-mist">Learn in the field</p>
              <h2 className="mt-4 text-4xl text-secondary md:text-5xl">Read the water. Chase the light. Shoot with intent.</h2>
              <p className="mt-6 max-w-xl text-secondary/78">
                Small-group sessions for photographers who want stronger timing, cleaner composition, and more confidence working in fast coastal conditions.
              </p>
              <Link href="/workshops" className="button-primary mt-8">
                View workshops
              </Link>
            </div>
            <div className="image-lift h-full min-h-[320px] lg:min-h-[100%]">
              <img
                src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&h=900&fit=crop"
                alt="Photographer walking shoreline with camera gear at dusk"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-shell bg-secondary">
          <div className="container-shell">
            <div className="mx-auto max-w-4xl rounded-[32px] border border-primary/10 bg-white px-8 py-12 text-center shadow-soft md:px-16 md:py-16">
              <p className="font-heading text-3xl leading-tight text-primary md:text-5xl">
                “The images feel like the Mount at its best — calm, powerful, and full of light. We bought one print and came back for three more.”
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted">— Hannah R., Mount Maunganui</p>
            </div>
          </div>
        </section>

        <section className="bg-secondary pb-16 md:pb-24 lg:pb-32">
          <div className="container-shell">
            <div className="mx-auto max-w-4xl">
              <NewsletterSignup
                heading="Golden hour, delivered occasionally."
                body="New print drops, workshop dates, and select releases. No spam. Just the good light."
                buttonLabel="Join the list"
              />
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
