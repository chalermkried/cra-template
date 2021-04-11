const { whenProd } = require('@craco/craco');

module.exports = {
  // Use Preact in production build for speed and performance
  webpack: whenProd(() => ({
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  })),
};
