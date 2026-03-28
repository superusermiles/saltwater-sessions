import type { Metadata } from 'next';

import { PageShell } from '@/components/page-shell';

export const metadata: Metadata = {
  title: 'Photography Workshops in Mount Maunganui | Saltwater Sessions',
  description:
    'Book photography workshops in Mount Maunganui with Saltwater Sessions to improve surf photography, ocean timing, and coastal composition.',
  alternates: {
    canonical: 'https://saltwater-sessions.vercel.app/workshops',
  },
  openGraph: {
    title: 'Photography Workshops in Mount Maunganui | Saltwater Sessions',
    description:
      'Small-group photography workshops in Mount Maunganui focused on surf, ocean light, and coastal storytelling.',
    url: 'https://saltwater-sessions.vercel.app/workshops',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photography Workshops in Mount Maunganui | Saltwater Sessions',
    description: 'Book Mount Maunganui photography workshops for surf and coastal shooting.',
  },
};

const workshops = [
  {
    title: 'First Light Foundations',
    date: '12 April 2026',
    level: 'Beginner to intermediate',
    location: 'Main Beach, Mount Maunganui',
    price: 'NZD 180',
    spots: '5 spots left',
    summary: 'An early-morning session covering exposure, shoreline positioning, and reading incoming sets.',
  },
  {
    title: 'Golden Hour Water Texture',
    date: '26 April 2026',
    level: 'Intermediate',
    location: 'Pilot Bay',
    price: 'NZD 220',
    spots: '3 spots left',
    summary: 'Learn how to work with reflective water, changing colour temperature, and layered compositions near sunset.',
  },
  {
    title: 'Surf Action From Shore',
    date: '10 May 2026',
    level: 'Intermediate to advanced',
    location: 'Moturiki edge, Mount Maunganui',
    price: 'NZD 260',
    spots: '4 spots left',
    summary: 'Track fast-moving subjects, anticipate manoeuvres, and shoot cleaner sequences without over-spraying frames.',
  },
  {
    title: 'Aerial Coastline Study',
    date: '24 May 2026',
    level: 'Advanced',
    location: 'Mount shoreline and harbour edge',
    price: 'NZD 320',
    spots: '2 spots left',
    summary: 'A composition-led session focused on pattern, tide shape, and abstract coastal storytelling from elevated angles.',
  },
];

const learnItems = [
  'How to read swell direction, light quality, and shoreline movement before you even lift the camera',
  'How to expose for whitewater, dark water, and reflective sunset surfaces',
  'How to compose surf imagery that feels intentional rather than reactive',
  'How to protect gear and move safely in salt-heavy, shifting conditions',
  'How to edit for cohesion without flattening the mood of the scene',
];

export default function WorkshopsPage() {
  return (
    <PageShell>
      <main className="bg-secondary pt-28">
        <section className="section-shell pb-12">
          <div className="container-shell text-center">
            <p className="eyebrow">In the field</p>
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl md:text-6xl">Photography workshops in Mount Maunganui for stronger surf imagery.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-primary/72">
              Saltwater Sessions workshops are designed for photographers who want to work closer to the water with more confidence, better judgement, and cleaner visual storytelling.
            </p>
            <div className="mt-10 overflow-hidden rounded-[32px] shadow-medium">
              <img
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=900&fit=crop"
                alt="Mount Maunganui photography workshop participant preparing a camera near the surf at sunrise"
                className="h-[340px] w-full object-cover md:h-[440px]"
              />
            </div>
          </div>
        </section>

        <section className="section-shell bg-white py-16 md:py-24">
          <div className="container-shell grid gap-6 md:grid-cols-2">
            {workshops.map((workshop) => (
              <article
                key={workshop.title}
                className="rounded-[32px] border border-primary/10 bg-[linear-gradient(135deg,rgba(216,226,230,0.85),rgba(251,247,240,1),rgba(12,35,64,0.04))] p-8 shadow-soft"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-pill bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    {workshop.date}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">{workshop.spots}</span>
                </div>
                <h2 className="mt-6 text-3xl">{workshop.title}</h2>
                <dl className="mt-6 space-y-3 text-primary/72">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Skill level</dt>
                    <dd>{workshop.level}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Location</dt>
                    <dd>{workshop.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Price</dt>
                    <dd className="text-accent">{workshop.price}</dd>
                  </div>
                </dl>
                <p className="mt-6 text-primary/72">{workshop.summary}</p>
                <a href="/contact" className="button-secondary mt-8 inline-flex">
                  View details
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell bg-secondary">
          <div className="container-shell grid gap-6 lg:grid-cols-2">
            <div>
              <p className="eyebrow">What you’ll learn</p>
              <h2 className="mt-4 text-4xl md:text-5xl">What you’ll learn</h2>
            </div>
            <div className="grid gap-5">
              {learnItems.map((item) => (
                <div key={item} className="border-b border-primary/10 pb-5 text-primary/72 last:border-b-0">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-primary">
          <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[32px] shadow-hard">
              <img
                src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&h=900&fit=crop"
                alt="Ocean photography workshop backdrop with long rolling waves under moody coastal light"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow text-mist">Field notes</p>
              <h2 className="mt-4 text-4xl text-secondary md:text-5xl">A workshop should feel like a working session, not a lecture.</h2>
              <p className="mt-6 text-secondary/76">
                Expect practical guidance, direct feedback, and a lot of time watching water before shooting. We focus on patience, timing, and the small adjustments that separate a good frame from a lasting one.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16 md:py-24">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl rounded-[32px] border border-primary/10 bg-white px-8 py-12 text-center shadow-soft md:px-12">
              <h2 className="text-4xl md:text-5xl">Want a place in the next session?</h2>
              <a href="mailto:hello@saltwatersessions.co.nz?subject=Workshop%20booking" className="button-primary mt-8 inline-flex">
                Book your workshop
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
