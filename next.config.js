const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
  images: {
    domains: ['s3.amazonaws.com', 'images.getaroom-cdn.com'],
  },
  compiler: {
    styledComponents: true,
  },
  staticPageGenerationTimeout: 1000,
  webpack: (config) => {
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      })
    );
    config.resolve.modules.push(__dirname);
    return config;
  },
};
