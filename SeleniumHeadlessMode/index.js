require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");

(async function example() {
    console.log('建立 Chrome Driver...');
    // 使用 chrome
    let opts = new chrome.Options();
    opts.addArguments(["--headless", "--disable-gpu"]);
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(opts).build();
    try {
        console.log('連到 Google 搜尋...');
        await driver.get('https://www.google.com'); // 連到 google
        
        // 打字搜尋
        console.log('搜尋 cheese...');
        await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);

        // 抓第一筆的文字, 如果 Google 改頁面結構可能會失效
        console.log('取得第一筆結果的內容...');
        let firstResult = await driver.wait(until.elementLocated(By.css('h3+div')), 3000);
        // 印出來
        console.log(await firstResult.getAttribute('textContent'));
    }
    finally{
        // 關閉視窗, 結束
        driver.quit();
    }
})();