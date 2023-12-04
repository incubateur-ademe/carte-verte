/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      "geist-sans": ["var(--font-geist-sans)", "sans-serif"],
    },
  },
  plugins: [],
  corePlugins: {
    // disable preflight to avoid conflicts with dsfr
    preflight: false,
  },
};
