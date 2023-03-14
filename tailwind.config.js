module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  fontFamily: {
    Roboto: ["Roboto", "sans-serif"],
  },
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
