require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
	// 使用 chrome
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com'); // 連到 google
        // 打字搜尋
        await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);
		// 抓第一筆的文字, 如果 Google 改頁面結構可能會失效
		let firstResult = await driver.wait(until.elementLocated(By.css('h3+div')), 3000);
		// 印出來
        console.log(await firstResult.getAttribute('textContent'));
    }
    finally{
		// 關閉視窗, 結束
        driver.quit();
    }
})();