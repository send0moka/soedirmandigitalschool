import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ijo-tua": "#43594B",
        "ijo-muda": "#DFDDAE",
        "kuning": "#F9A402",
        "oren": "#FB6500",
        "bata": "#992800",
        "hitam": "#252525",
      },
      fontFamily: {
        "sans": ["Literata", ...defaultTheme.fontFamily.sans],
        "display": ["Sugo Bold", ...defaultTheme.fontFamily.sans],
        "body": ["Sugo Regular", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "full",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}