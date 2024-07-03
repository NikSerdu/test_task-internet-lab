/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A6CEA",
        "primary-hover": "#397DFF",
        "primary-disabled": "#ABCAE6",
        black: "#191C1F",
        "dark-grey": "#5E646A",
        gray: "#83898F",
        "mid-grey": "#C2C8CD",
        "light-grey": "#ECEFF2",
        "extra-light-grey": "#F6F8FA",
        dangerous: "#F13636",
        green: "#25CD82",
      },
    },
  },
  plugins: [],
};
