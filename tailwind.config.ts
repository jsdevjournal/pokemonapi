import type { Config } from 'tailwindcss'

const config: Config = {
  // daisyui: {
  //   themes: ["light"],
  // },
  theme: {
    extend: {
      colors: {
        "base-neutral-light": "#fdfdfd",
        "neutral-20": "#f6f6f7",
        "base-primary": "#024e74",
        "neutral-30": "#e3e1e5",
        "base-neutral-dark": "#23292b",
        black: "#000",
        "enviral-tech-dark-grey": "#363545",
        "text-primary-dark": "#1a1a1a",
      },
      spacing: {},
      fontFamily: {
        "body-1-regular": "Roboto",
        "heading-5-medium": "'Encode Sans'",
      },
      borderRadius: {
        "80xl": "99px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // plugins: [require("daisyui")],
}
export default config
