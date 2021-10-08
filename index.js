const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.correios.com.br/');

  const imgList = await page.evaluate(() => {
    const images = document.querySelectorAll('img');

    const imgArray = [...images];

    const imgList = imgArray.map(({src}) => ({
      src
    }))

    return imgList
  })

  await page.screenshot({ path: 'example.png' });

  // await browser.close();
})();
