type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
  invert?: boolean;
};

export function SectionIntro({ eyebrow, title, body, align = 'left', invert = false }: SectionIntroProps) {
  const aligned = align === 'center' ? 'mx-auto text-center' : 'text-left';
  const titleClass = invert ? 'text-secondary' : 'text-primary';
  const bodyClass = invert ? 'text-secondary/78' : 'text-primary/72';
  const eyebrowClass = invert ? 'text-mist' : 'text-muted';

  return (
    <div className={`max-w-3xl ${aligned}`}>
      {eyebrow ? <p className={`eyebrow ${eyebrowClass}`}>{eyebrow}</p> : null}
      <h1 className={`mt-4 text-4xl leading-none md:text-6xl ${titleClass}`}>{title}</h1>
      {body ? <p className={`mt-6 ${bodyClass}`}>{body}</p> : null}
    </div>
  );
}
