/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "shorten-pattern": "url('/src/images/bg-shorten-desktop.svg')",
        "footer-pattern": "url('/src/images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
