import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/template/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        screenMD: 'var(--Media)',
      },
      fontFamily: {
        open_Sans: ['var(--font-Open_Sans)'],
        montserrat: ['var(--font-montserrat)'],
      },
      keyframes: {
        //Essa é uma animação para o component loading, que vai ser usada no seu svg.
        loading: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        loading: 'loading 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
