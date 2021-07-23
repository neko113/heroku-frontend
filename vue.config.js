module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  devServer: {
    progress: false,
  },
};
