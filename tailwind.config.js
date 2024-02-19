/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5B2EBC",
        heading: "#323B4B",
        secondary: "#4E5D78",
        success: "#32EFA0",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
