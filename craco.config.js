const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "dashboard",
          filename: "remoteEntry.js",
          exposes: {
            "./DashboardApp": "./src/App",
          },
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
        })
      );
      return webpackConfig;
    },
  },
};