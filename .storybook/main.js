const path = require('path')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  features: {
    previewCsfV3: true,
  },
  stories: [
    '../src'
  ],
  addons: [
    "@storybook/addon-links",
    "storybook-vue3-router",
    "@storybook/addon-essentials",
  ],
  webpackFinal: (config) => {
    config.resolve.alias["~/"] = `${path.resolve(__dirname, '..', 'src')}/`
    return config
  },
}