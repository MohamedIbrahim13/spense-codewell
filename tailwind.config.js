module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Cabin"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
