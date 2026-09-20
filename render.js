// Renders poster.html to poster.pdf at exact A0 portrait dimensions
// (33.1in x 46.8in), matching the @page size set in poster.html.
//
// Usage:
//   node render.js [poster.html path] [output .pdf path]
//   node render.js                      # renders ./poster.html -> ./poster.pdf

const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const htmlPath = path.resolve(process.argv[2] || 'poster.html');
  const outPath = path.resolve(process.argv[3] || 'poster.pdf');

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath);
  // Let webfonts/layout settle before measuring/printing.
  await page.waitForTimeout(300);

  await page.pdf({
    path: outPath,
    width: '33.1in',
    height: '46.8in',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });

  await browser.close();
  console.log('wrote', outPath);
})();
