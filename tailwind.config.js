module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1050px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { "900_b2": "var(--black_900_b2)" },
        blue: {
          50: "var(--blue_50)",
          100: "var(--blue_100)",
          200: "var(--blue_200)",
          400: "var(--blue_400)",
          a100: "var(--blue_a100)",
          a100_33: "var(--blue_a100_33)",
          a100_7f: "var(--blue_a100_7f)",
          a100_99: "var(--blue_a100_99)",
        },
        blue_gray: {
          100: "var(--blue_gray_100)",
          300: "var(--blue_gray_300)",
          500: "var(--blue_gray_500)",
          "500_7f": "var(--blue_gray_500_7f)",
        },
        cyan: { 400: "var(--cyan_400)", "400_01": "var(--cyan_400_01)" },
        deep_purple: {
          "50_59": "var(--deep_purple_50_59)",
          a200: "var(--deep_purple_a200)",
          a200_01: "var(--deep_purple_a200_01)",
        },
        gray: { 50: "var(--gray_50)", 900: "var(--gray_900)", "900_01": "var(--gray_900_01)" },
        indigo: {
          50: "var(--indigo_50)",
          100: "var(--indigo_100)",
          200: "var(--indigo_200)",
          300: "var(--indigo_300)",
          "300_99": "var(--indigo_300_99)",
        },
        light_blue: { a100: "var(--light_blue_a100)" },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: { xs: "0 0 55px 0 #75baff33", sm: "0 0 27px 0 #eeebff59" },
      fontFamily: { inter: "Inter", montserrat: "Montserrat", poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(102deg, #b8cff2,#ebf1fa)",
        gradient1: "linear-gradient(102deg, #b8cff2,#f4f8ff)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
