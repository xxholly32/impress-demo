module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/impress-demo/'
    : '/',
  configureWebpack: {
    externals: {
      impress: "impress",
    },
  },
};
