type SiteLogoProps = {
  variant?: 'primary' | 'reversed' | 'mono';
  className?: string;
};

export function SiteLogo({ variant = 'primary', className = '' }: SiteLogoProps) {
  const fill = variant === 'reversed' ? '#FBF7F0' : '#0C2340';
  const stroke = fill;

  return (
    <svg
      width="220"
      height="48"
      viewBox="0 0 220 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Saltwater Sessions logo"
      className={className}
    >
      <g fill={fill}>
        <circle cx="24" cy="24" r="20" stroke={stroke} strokeWidth="2" fill="none" />
        <path d="M24 10c-5.8 0-10.6 4.8-10.6 10.6 0 1.9.5 3.7 1.4 5.2 1.1-3.6 4.4-6.1 8.2-6.1 4.8 0 8.7 3.9 8.7 8.7 0 2.8-1.3 5.3-3.4 6.9 4.9-1.8 8.3-6.4 8.3-11.8C36.6 16.1 31.8 10 24 10Z" />
        <path d="M23.8 18.6c-3.7 0-6.7 3-6.7 6.7 0 3.7 3 6.7 6.7 6.7 1.4 0 2.8-.4 4-1.3-1.7-.3-3.1-1.9-3.1-3.7 0-2.1 1.7-3.7 3.7-3.7.5 0 1 .1 1.5.3-.8-2.9-3.4-5-6.1-5Z" />
        <circle cx="24" cy="24" r="3.2" />
      </g>
      <g fill={fill}>
        <text x="56" y="22" fontFamily="'Playfair Display', serif" fontSize="18" fontWeight="700" letterSpacing="0.02em">
          Saltwater
        </text>
        <text x="56" y="38" fontFamily="'Nunito Sans', sans-serif" fontSize="13" fontWeight="600" letterSpacing="0.22em">
          SESSIONS
        </text>
      </g>
    </svg>
  );
}
