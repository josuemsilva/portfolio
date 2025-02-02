/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        buttons: "#9b9cd2",
        header: "#eeedff",
        footer: "#c0a975",
      },
    },
  },
  plugins: [],
  config: {
    variants: {
      extend: {},
    },
  },
};
