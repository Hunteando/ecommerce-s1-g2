/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "768px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        "#FBD1A1": "#FBD1A1",
        "#F79E38": "#F79E38",
        "#C96C26": "#C96C26",
      },
    },
    plugins: [],
  },
};
