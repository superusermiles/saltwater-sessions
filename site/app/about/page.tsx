import type { Metadata } from 'next';

import { PageShell } from '@/components/page-shell';

export const metadata: Metadata = {
  title: 'About Saltwater Sessions | Mount Maunganui Surf Photography',
  description:
    'Learn about Saltwater Sessions, a Mount Maunganui surf photography studio creating coastal prints, editorial imagery, and ocean photography workshops.',
  alternates: {
    canonical: 'https://saltwater-sessions.vercel.app/about',
  },
  openGraph: {
    title: 'About Saltwater Sessions | Mount Maunganui Surf Photography',
    description:
      'Meet the studio behind Saltwater Sessions and the ocean-first approach to surf photography in Mount Maunganui.',
    url: 'https://saltwater-sessions.vercel.app/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Saltwater Sessions | Mount Maunganui Surf Photography',
    description: 'About the Mount Maunganui surf photography studio behind Saltwater Sessions.',
  },
};

const equipment = [
  'Sony A1 body',
  'Sony A7R V backup body',
  '70–200mm f/2.8',
  '100–400mm GM',
  '24–70mm f/2.8',
  'Polarising and ND filters',
  'DJI Air series drone',
  'Aquatech water housing',
];

const pressMentions = [
  {
    outlet: 'Feature 01',
    copy:
      'Selected in an editorial-style coastal feature focused on surf culture, quiet image making, and contemporary New Zealand shoreline photography.',
  },
  {
    outlet: 'Feature 02',
    copy:
      'Included in a local design and hospitality round-up spotlighting fine art prints for boutique accommodation and coastal interiors.',
  },
  {
    outlet: 'Feature 03',
    copy:
      'Profiled in a Bay of Plenty creative story covering workshops, print releases, and documentary-inspired ocean photography from the Mount.',
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <main className="bg-secondary pt-28">
        <section className="section-shell pb-12">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="eyebrow">About the studio</p>
              <h1 className="mt-4 text-4xl md:text-6xl">About Saltwater Sessions, a surf photography studio in Mount Maunganui.</h1>
              <p className="mt-6 max-w-2xl text-primary/72">
                Saltwater Sessions began as a way to document the Mount honestly — not just the action, but the atmosphere around it. The work sits between surf culture, local memory, and fine-art image making.
              </p>
            </div>
            <div className="order-1 overflow-hidden rounded-[32px] shadow-medium lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=1200&h=1400&fit=crop"
                alt="Mount Maunganui surf photographer holding a camera by the coast"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-shell bg-white py-16 md:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div className="max-w-reading">
              <p className="eyebrow">Founder story</p>
              <h2 className="mt-4 text-4xl md:text-5xl">How the studio took shape</h2>
              <p className="mt-6 text-primary/72">
                Founded by ocean photographer Maia Kells, Saltwater Sessions grew out of dawn patrol habits, years of coastal wandering, and an obsession with how fast light changes on water. Maia’s approach is less about chasing spectacle and more about waiting for the frame where motion, texture, and mood settle into something lasting. What started as personal field notes became commissioned shoots, print releases, and a studio known for calm, artful coastal imagery.
              </p>
            </div>
            <div className="rounded-[32px] border border-primary/10 bg-secondary p-8 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">At a glance</p>
              <dl className="mt-6 space-y-5 text-primary/72">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Founded</dt>
                  <dd>Mount Maunganui, Bay of Plenty, New Zealand</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Focus</dt>
                  <dd>Surf culture, coastal observation, limited-edition print releases</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Approach</dt>
                  <dd>Quiet confidence. Editorial pacing. Ocean-first image making.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section-shell relative overflow-hidden bg-primary">
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&h=900&fit=crop"
            alt="Ocean photography texture with evening light across open water"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="container-shell relative z-10 max-w-4xl">
            <p className="eyebrow text-mist">Philosophy</p>
            <h2 className="mt-4 text-4xl text-secondary md:text-5xl">An ocean-first way of working</h2>
            <p className="mt-6 text-xl text-secondary/82 md:text-2xl">
              The ocean doesn’t repeat itself. That’s the point.
            </p>
            <p className="mt-6 text-secondary/74">
              Saltwater Sessions photographs each break, tide, and weather shift as a one-off condition. The goal is to make images that still feel alive on a wall months later — not just proof that someone surfed there.
            </p>
          </div>
        </section>

        <section className="section-shell bg-secondary">
          <div className="container-shell grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Equipment list</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Tools used in the field</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {equipment.map((item) => (
                <div key={item} className="rounded-xl border border-primary/10 bg-white px-5 py-5 shadow-soft">
                  <p className="text-primary/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-white py-16 md:py-24">
          <div className="container-shell">
            <p className="eyebrow">Press and features</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Press and features</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {pressMentions.map((mention) => (
                <article key={mention.outlet} className="rounded-[32px] border border-primary/10 bg-secondary p-8 shadow-soft">
                  <div className="flex h-12 w-32 items-center justify-center rounded-pill border border-primary/10 bg-white text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                    {mention.outlet}
                  </div>
                  <p className="mt-6 text-primary/72">{mention.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary pb-16 md:pb-24 lg:pb-32">
          <div className="container-shell overflow-hidden rounded-[32px] bg-white shadow-medium">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1400&h=900&fit=crop"
                alt="Small creative photography team outdoors near the Mount Maunganui coast"
                className="h-full min-h-[320px] w-full object-cover"
              />
              <div className="p-8 md:p-12">
                <p className="eyebrow">Small crew. Sharp eye. Ocean-first.</p>
                <h2 className="mt-4 text-4xl md:text-5xl">A lean team built for coastal shoots</h2>
                <p className="mt-6 text-primary/72">
                  Production stays intentionally lean. Depending on the shoot, Saltwater Sessions works with a retoucher, framing partner, and local assistant photographers who know the coastline well.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
