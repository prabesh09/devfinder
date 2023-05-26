/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tiny: "392px",
      small: "684px",
      medium: "848px",
    },
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Mono", "monospace"],
        nun: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
