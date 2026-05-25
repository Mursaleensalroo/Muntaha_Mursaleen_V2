/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1a1614',
        paper: '#f5f0e8',
        cream: '#faf6ee',
        sand: '#e8dfd0',
        rose: '#b8645a',
        sage: '#6b7a5f',
        gold: '#a8884a',
        muted: '#8a7d6e',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [],
};
