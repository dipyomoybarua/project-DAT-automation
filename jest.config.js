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
  };
  