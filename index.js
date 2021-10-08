const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
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

  fs.writeFile('correios.json', JSON.stringify(imgList, null, 2), err => {
    if(err) throw new Error('Something went worng');
    console.log('Success!')
  })

  await browser.close();
})();
