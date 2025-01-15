/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        textColor: {
          light: "#072125",
          DEFAULT: "#072125",
          dark: "#072125",
        },
        white: {
          light: "#f9f9f9",
          DEFAULT: "#ffffff",
          dark: "#e0e0e0",
        },
        bgColor: {
          light: "#FAFAFA",
          DEFAULT: "#FAFAFA",
          dark: "#1E1E1E",
        },
        primaryColor: {
          light: "#F44335",
          DEFAULT: "#F44335",
          dark: "#F44335",
        },
      },
      backgroundImage: {
        'quote-img': "url('../images/review_bg_img.png')",
      },
    },
  },
  plugins: [],
};
