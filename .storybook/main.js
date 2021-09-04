const paths = require('../config/paths')
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "webpackFinal": async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': paths.appSrc
    };
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
}
