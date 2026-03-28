import { Instagram, Mail, MapPin, Phone, PinIcon, Video } from 'lucide-react';

import { PageShell } from '@/components/page-shell';

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'Pinterest', href: 'https://pinterest.com', icon: PinIcon },
  { label: 'Vimeo', href: 'https://vimeo.com', icon: Video },
];

export default function ContactPage() {
  return (
    <PageShell>
      <main className="bg-secondary pt-28">
        <section className="bg-primary py-16 md:py-20">
          <div className="container-shell text-center">
            <p className="eyebrow text-mist">Get in touch</p>
            <h1 className="mt-4 text-4xl text-secondary md:text-6xl">Print orders, workshop questions, and commissions start here.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-secondary/76">
              Reach out for availability, custom print advice, or upcoming session details. We’ll get back to you with clear next steps.
            </p>
          </div>
        </section>

        <section className="section-shell bg-secondary">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="rounded-[32px] bg-white p-8 shadow-soft">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Studio</p>
                  <p className="mt-2 text-primary/74">23 Pacific Avenue, Mount Maunganui 3116</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Phone</p>
                  <a href="tel:+6475550184" className="mt-2 inline-flex items-center gap-3 text-primary/74 hover:text-primary">
                    <Phone size={18} /> +64 7 555 0184
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Email</p>
                  <a href="mailto:hello@saltwatersessions.co.nz" className="mt-2 inline-flex items-center gap-3 text-primary/74 hover:text-primary">
                    <Mail size={18} /> hello@saltwatersessions.co.nz
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Follow</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                      <a key={label} href={href} className="inline-flex items-center gap-2 rounded-pill border border-primary/10 px-4 py-2 text-sm text-primary/74 hover:border-primary hover:text-primary">
                        <Icon size={16} /> {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
            <form
              action="https://formsubmit.co/hello@saltwatersessions.co.nz"
              method="POST"
              className="rounded-[32px] bg-white p-8 shadow-soft"
            >
              <input type="hidden" name="_subject" value="Saltwater Sessions enquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-1">
                  <label htmlFor="name" className="text-sm font-semibold text-primary">Full name</label>
                  <input id="name" name="name" required className="mt-2 w-full rounded-xl border border-mist px-4 py-3" />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="email" className="text-sm font-semibold text-primary">Email address</label>
                  <input id="email" name="email" type="email" required className="mt-2 w-full rounded-xl border border-mist px-4 py-3" />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="phone" className="text-sm font-semibold text-primary">Phone number</label>
                  <input id="phone" name="phone" className="mt-2 w-full rounded-xl border border-mist px-4 py-3" />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="enquiry" className="text-sm font-semibold text-primary">Enquiry type</label>
                  <select id="enquiry" name="enquiry" className="mt-2 w-full rounded-xl border border-mist px-4 py-3">
                    <option>Print order</option>
                    <option>Workshop booking</option>
                    <option>Commission</option>
                    <option>General enquiry</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold text-primary">Message</label>
                  <textarea id="message" name="message" rows={6} required className="mt-2 w-full rounded-xl border border-mist px-4 py-3" />
                </div>
              </div>
              <button type="submit" className="button-primary mt-8">
                Send enquiry
              </button>
            </form>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-[32px] border border-primary/10 bg-mist/40 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&h=700&fit=crop"
                alt="Subtle coastal texture banner"
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 text-primary">
                  <MapPin size={18} />
                  <p className="text-xs font-semibold uppercase tracking-[0.22em]">Studio location map</p>
                </div>
                <div className="mt-6 rounded-[24px] border border-dashed border-primary/20 bg-secondary p-8 text-primary/72">
                  <p>Mount Maunganui studio base.</p>
                  <p className="mt-2">23 Pacific Avenue, Mount Maunganui 3116</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[32px] bg-primary shadow-medium">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&h=700&fit=crop"
                alt="Aerial coastline composition"
                className="h-52 w-full object-cover opacity-85"
              />
              <div className="p-8 text-secondary">
                <h2 className="text-3xl text-secondary">Stay connected to the coast.</h2>
                <p className="mt-4 text-secondary/74">
                  Follow new releases, workshop openings, and quieter studies from the shoreline on Instagram, Pinterest, and Vimeo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary pb-16 md:pb-24 lg:pb-32">
          <div className="container-shell grid gap-4 md:grid-cols-4">
            {['Mon–Thu: 10am–4pm', 'Fri: 10am–2pm', 'Sat: Workshop days only', 'Sun: Closed'].map((item) => (
              <div key={item} className="rounded-xl border border-primary/10 bg-white px-5 py-5 shadow-soft">
                <p className="text-primary/78">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
