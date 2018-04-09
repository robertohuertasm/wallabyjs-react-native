module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.ts?(x)',
      'test-setup.js',
      'package.json',
      '!src/**/*.spec.ts',
      '!src/**/*.spec.tsx'
    ],

    tests: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({ target: 'es5' })
    },

    preprocessors: {
      '**/*.js?(x)': file => require('@babel/core').transform(
        file.content,
        {
          sourceMap: true, compact: false, filename: file.path, babelrc: true
        })
    },

    setup: wallaby => {
      const jestConfig = require('./package.json').jest;
      jestConfig.testEnvironment = 'jsdom';
      wallaby.testFramework.configure(jestConfig);
    }
  };
};
