import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        onest: ['var(--font-onest)'],
      },
      colors: {
        primary: '#1E64E9',
        secondary: '#0A32B7',
        white: '#F8F8FC',
        black: '#191E27',
        'pure-white': '#FFFFFF',
        border: '#BBBBBB',
      },
    },
  },
  plugins: [],
};
export default config;
