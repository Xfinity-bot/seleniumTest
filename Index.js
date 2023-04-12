const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get("https://xfinity-bot.github.io/seleniumWeb/");
    //await driver.findElement(By.id('name')).sendKeys('Elwin');
    //await driver.findElement(By.css("input[type='submit']")).click();
    //await driver.findElement(By.css("h1")).getText().then((res)=>console.log(res));
    // await driver.findElement(By.id("sel")).click();
    // await driver.findElement(By.id("html")).click();
    //await driver.findElement(By.id('ui')).sendKeys('Vue');
    //      const x = await driver.findElements(By.className('frameworks'));
    // await x.map((ele)=>ele.getRect().then((text)=>console.log(text)))
    await driver.findElement(By.className("click-me")).click().then(() => {
        driver.switchTo().alert().getText().then((res) => console.log(res));
        setTimeout(() => {
          driver.switchTo().alert().accept();
        }, 5000);
      });
  } finally {
    // await driver.quit();
  }
})();
