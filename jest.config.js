module.exports = {
    reporters: [
      'default',
      ['jest-html-reporter', {
        pageTitle: 'Test Report',
        outputPath: 'test-report.html',
        includeFailureMsg: true,
        includeConsoleLog: true,
      }],
    ],
    testMatch: ['**/*.test.js', '**/*.spec.js'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    transform: {
    '^.+\\.js$': 'babel-jest',
  },
    globals: {
    __DEV__: process.env.NODE_ENV !== 'production'
  }
  };
  