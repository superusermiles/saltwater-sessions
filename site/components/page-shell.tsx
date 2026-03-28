import type { ReactNode } from 'react';

import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

type PageShellProps = {
  children: ReactNode;
  transparentHeader?: boolean;
};

export function PageShell({ children, transparentHeader = false }: PageShellProps) {
  return (
    <>
      <SiteHeader transparentOnTop={transparentHeader} />
      {children}
      <SiteFooter />
    </>
  );
}
