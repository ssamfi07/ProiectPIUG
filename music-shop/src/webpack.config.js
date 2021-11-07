const path = require('path');

module.exports = {
    resolve: {
      extensions: ['js', 'ts'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@components': path.resolve(__dirname, 'src/components'),
        // ...etc
      },
    },
  }