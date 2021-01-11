module.exports = {
  purge: ["./src/**/*.html"],
  theme: {
    colors:{
      blue:'#1e63ea',
      purple:'#731eea',
      black:'#000',
      white:'#fff',
      gray:"f5f5f5"
    },
    fontFamily:{
      'sans': 'Helvetica, Arial, sans-serif'
    },
    extend: {
      backgroundImage: theme => ({
                 'hero-bg': "url('/images/bg.jpg')"
                })
    },
  },
  variants: {},
  plugins: [],
};
