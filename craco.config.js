const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.output.publicPath = "auto";

            webpackConfig.plugins.push(
                new ModuleFederationPlugin({
                    name: "dashboard",
                    filename: "remoteEntry.js",
                    exposes: {
                        "./DashboardApp": "./src/App",
                    },
                    shared: {
                        // react: {
                        //     singleton: true,
                        //     requiredVersion: false,
                        // },
                        // "react-dom": {
                        //     singleton: true,
                        //     requiredVersion: false,
                        // },
                    },
                })
            );
            return webpackConfig;
        },
    },
};