import Link from 'next/link';

import { footerGridItems, navLinks } from './site-data';
import { NewsletterSignup } from './newsletter-signup';
import { SiteLogo } from './site-logo';

export function SiteFooter() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1fr] lg:py-20">
        <div className="space-y-6">
          <SiteLogo variant="reversed" className="h-10 w-auto min-w-[160px]" />
          <p className="max-w-sm text-secondary/76">
            Editorial ocean photography, collector prints, and field-led workshops from Mount Maunganui.
          </p>
          <p className="text-sm text-secondary/70">
            23 Pacific Avenue, Mount Maunganui 3116 · hello@saltwatersessions.co.nz · +64 7 555 0184
          </p>
        </div>
        <div>
          <h3 className="font-heading text-2xl text-secondary">Browse</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-secondary/76 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h4 className="font-heading text-xl text-secondary">Studio hours</h4>
            <ul className="mt-4 space-y-2 text-secondary/76">
              <li>Mon–Thu: 10am–4pm</li>
              <li>Fri: 10am–2pm</li>
              <li>Sat: Workshop days only</li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2">
          <NewsletterSignup
            compact
            heading="Stay close to the next release."
            body="Occasional updates on print drops, workshop dates, and new coastal studies."
            buttonLabel="Subscribe"
          />
          <div className="mt-8">
            <h3 className="font-heading text-2xl text-secondary">From the shoreline</h3>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {footerGridItems.map((item) => (
                <div key={item.image} className="overflow-hidden rounded-lg border border-secondary/10">
                  <img src={item.image} alt={item.alt} loading="lazy" className="h-24 w-full object-cover sm:h-28" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary/10 py-5">
        <div className="container-shell flex flex-col gap-3 text-sm text-secondary/58 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Saltwater Sessions. All rights reserved.</p>
          <p>Mount Maunganui, New Zealand</p>
        </div>
      </div>
    </footer>
  );
}
