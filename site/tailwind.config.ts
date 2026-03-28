import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C2340',
        secondary: '#FBF7F0',
        accent: '#E8A838',
        text: '#1C1C1C',
        muted: '#6B8F9E',
        mist: '#D8E2E6',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
        xl: '32px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(12,35,64,0.08)',
        medium: '0 18px 50px rgba(12,35,64,0.14)',
        hard: '0 24px 80px rgba(12,35,64,0.2)',
      },
      maxWidth: {
        gallery: '1600px',
        reading: '48rem',
      },
    },
  },
  plugins: [],
};

export default config;
