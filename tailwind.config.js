/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  corePlugins: {
    preflight: false,
  },
  content: [],
  theme: {
    extend: {
      colors: {
        border: "#9b8f80",
      },
    },
  },
  plugins: [],
};
