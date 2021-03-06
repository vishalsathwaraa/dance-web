module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "footer-bg": "#6d6a6a66",
      },
      keyframes: {
        modal: {
            '0%': {
               opacity:'0'
            },
            '100%': {
               opacity:'1'

            },
        }
    },
    animation: {
        modal: 'modal .5s ease-in',
    }
    },

    screens: {
      sm: { max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
