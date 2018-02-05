const builder = require('electron-builder');

const opts = {
  config: {
    appId: 'com.joshsora.toontask-editor',
    productName: 'ToonTask Editor',
    copyright: 'Copyright © 2018 Joshua Scott',
    win: {
      target: [
        {
          target: 'nsis',
          arch: ['ia32', 'x64']
        }
      ]
    },
    directories: {
      output: 'dist',
      buildResources: 'res'
    },
    files: [
      'app',
      'node_modules',
      'main.js',
      '!**/*.map'
    ]
  }
};

builder.build(opts)
  .catch((err) => {
      console.log(err);
      process.exit(1);
  });
