import { PageShell } from '@/components/page-shell';

const processSteps = [
  {
    number: '01',
    title: 'Select the frame',
    body: 'Choose from the gallery archive or request a recommendation based on your space.',
  },
  {
    number: '02',
    title: 'Choose finish and size',
    body: 'Pick paper stock, framing style, and the scale that suits the room.',
  },
  {
    number: '03',
    title: 'Printed and packed locally',
    body: 'Every order is quality checked, wrapped carefully, and prepared for safe delivery.',
  },
];

const pricingTiers = [
  ['Standard', 'From NZD 140', 'Unframed print, archival paper, protective sleeve.'],
  ['Premium', 'From NZD 290', 'Framed print, choice of three frame finishes, ready to hang.'],
  ['Collector', 'From NZD 640', 'Large-format framed print, signed certificate, limited release.'],
] as const;

export default function PrintsPage() {
  return (
    <PageShell>
      <main className="bg-secondary pt-28">
        <section className="section-shell pb-12">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow">Fine art prints</p>
              <h1 className="mt-4 text-4xl md:text-6xl">Made to hold light long after the session ends.</h1>
              <p className="mt-6 max-w-2xl text-primary/72">
                Each print is produced using archival inks, exhibition-grade papers, and careful colour balancing to preserve the depth, softness, and movement of the original frame.
              </p>
            </div>
            <div className="overflow-hidden rounded-[32px] shadow-medium">
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&h=1000&fit=crop"
                alt="Framed coastal print displayed in a calm interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-shell bg-white py-16 md:py-24">
          <div className="container-shell grid gap-6 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.number} className="rounded-xl border border-primary/10 bg-secondary p-8 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{step.number}</p>
                <h2 className="mt-5 text-3xl">{step.title}</h2>
                <p className="mt-4 text-primary/72">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell bg-secondary">
          <div className="container-shell grid gap-6 lg:grid-cols-2">
            <article className="rounded-[32px] border border-primary/10 bg-white p-8 shadow-soft md:p-10">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&h=900&fit=crop"
                  alt="Desk and print material detail"
                  className="h-64 w-full object-cover"
                />
              </div>
              <h2 className="mt-8 text-3xl">Paper stocks</h2>
              <ul className="mt-6 space-y-4 text-primary/72">
                <li><strong className="text-primary">Matte Cotton Rag</strong> — Soft texture, rich blacks, gallery-style finish.</li>
                <li><strong className="text-primary">Smooth Fine Art</strong> — Clean detail and crisp tonal range for brighter coastal scenes.</li>
                <li><strong className="text-primary">Lustre Photo Paper</strong> — A durable option with a subtle sheen and punchier contrast.</li>
              </ul>
            </article>
            <article className="rounded-[32px] border border-primary/10 bg-white p-8 shadow-soft md:p-10">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&h=1200&fit=crop"
                  alt="Interior crop featuring framed art"
                  className="h-64 w-full object-cover"
                />
              </div>
              <h2 className="mt-8 text-3xl">Framing options</h2>
              <ul className="mt-6 space-y-4 text-primary/72">
                <li><strong className="text-primary">Raw Oak</strong> — Warm, understated, and ideal for sandy interiors.</li>
                <li><strong className="text-primary">White Ash</strong> — Clean coastal finish for bright spaces.</li>
                <li><strong className="text-primary">Black Gallery Frame</strong> — Sharper contrast for moodier work and darker walls.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section-shell bg-primary">
          <div className="container-shell">
            <div className="max-w-3xl">
              <p className="eyebrow text-mist">Print tiers</p>
              <h2 className="mt-4 text-4xl text-secondary md:text-5xl">Print tiers</h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {pricingTiers.map(([name, price, details]) => {
                const featured = name === 'Premium';
                return (
                  <article
                    key={name}
                    className={`rounded-[32px] p-8 shadow-medium ${featured ? 'border border-accent bg-secondary text-primary' : 'border border-secondary/10 bg-white/6 text-secondary'}`}
                  >
                    <h3 className={`text-3xl ${featured ? 'text-primary' : 'text-secondary'}`}>{name}</h3>
                    <p className={`mt-4 text-2xl ${featured ? 'text-accent' : 'text-accent'}`}>{price}</p>
                    <p className={`mt-5 ${featured ? 'text-primary/72' : 'text-secondary/74'}`}>{details}</p>
                    <a href="/contact" className="button-primary mt-8 inline-flex">
                      Start your order
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-shell bg-secondary">
          <div className="container-shell max-w-reading">
            <p className="eyebrow">Care instructions</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Care instructions</h2>
            <p className="mt-6 text-primary/72">
              Display away from direct harsh sunlight where possible. Dust frames with a soft dry cloth. Keep prints in stable indoor humidity and avoid hanging near salt-heavy exterior doors or steamy bathrooms.
            </p>
          </div>
        </section>

        <section className="bg-primary py-16 md:py-24">
          <div className="container-shell text-center">
            <h2 className="text-4xl text-secondary md:text-5xl">Ready to order a print?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-secondary/74">
              Send through the image title, preferred size, and finish. We’ll confirm availability, lead time, and delivery options.
            </p>
            <a href="mailto:hello@saltwatersessions.co.nz?subject=Print%20order%20enquiry" className="button-primary mt-8 inline-flex">
              Start your order
            </a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
