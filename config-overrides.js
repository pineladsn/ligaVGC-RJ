const { addBabelPlugin, override } = require("customize-cra");

module.exports = {
  webpack: override(
    addBabelPlugin([
      "babel-plugin-root-import",
      {
        rootPathPrefix: "~",
        rootPathSuffix: "src",
      },
    ])
  ),
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      config.historyApiFallback = true;
      config.historyApiFallback.disableDotRule = true;
      return config;
    };
  },
};
