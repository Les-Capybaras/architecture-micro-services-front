module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FFFFFF",
          "secondary": "#72757E",
          "tertiary": "#2CB67D",
          "accent": "#7F5AF0",
          "base-100": "#16161A",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require('daisyui')],
};
