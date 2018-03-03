module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 version']
    }),
    require('postcss-flexbugs-fixes'),
    require('css-mqpacker')
  ]
};
