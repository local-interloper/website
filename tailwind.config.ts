import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "background": "#000000",
        "background-light": "#151515",
        "background-bright": "#292929",

        "text": "#FAFAFA",

        "primary": "#FB7E14",
      }
    },
  },
  plugins: [],
};
export default config;
