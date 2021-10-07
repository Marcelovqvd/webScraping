const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://buscacepinter.correios.com.br/app/endereco/index.php?t');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
