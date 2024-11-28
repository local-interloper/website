import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mom: ['mom']
      },
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["retro"]
  }
} satisfies Config;
