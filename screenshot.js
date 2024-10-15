const puppeteer = require('puppeteer');

async function takeScreenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Load the HTML report generated by Jest
  await page.goto('file://' + __dirname + '/test-report.html', { waitUntil: 'networkidle0' });
  
  // Take a screenshot
  await page.screenshot({ path: 'test-report-screenshot.png', fullPage: true });
  
  await browser.close();
}

takeScreenshot().catch(console.error);