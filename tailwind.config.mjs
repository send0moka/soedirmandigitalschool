import defaultTheme from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

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
      textShadow: {
        sm: "1px 1px var(--tw-shadow-color)",
        DEFAULT: "2px 2px var(--tw-shadow-color)",
        md: "3px 3px var(--tw-shadow-color)",
        lg: "4px 4px var(--tw-shadow-color)",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          })
        },
        { values: theme("textShadow") }
      )
    })
  ],
}