const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack(config, _) {
    // Further custom configuration here
    return config;
  }
});
