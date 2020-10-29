require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
	// 使用 chrome
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await gotoTestPage()
            // 測試選取 dom element 的方法
            .then(testElementsSelection);
    } catch (e) {
        console.log(e);
    } finally{
		// 關閉視窗, 結束
        driver.quit();
    }


    async function gotoTestPage (){
        return driver.get('http://benbai123.github.io/TestPages/Automation/Selenium/CommandsTesting.html'); // 連到 google
    };
    // 測試選取 dom element 的方法
    async function testElementsSelection (){
        let testingBlock = await driver.findElement(By.className('elements-selection'));

        // test find element by ID
        await testingBlock.findElement(By.id('inpOne')).sendKeys('found')
            .then(() => driver.sleep(500))
            .then(() => testingBlock.findElement(By.css('#inpOne'))
                    .sendKeys(Key.chord(Key.COMMAND, 'a'), 'found 2')
            ).then(() => driver.sleep(500))
            .then(() => testingBlock.findElement(By.xpath('//*[@id="inpOne"]'))
                    .sendKeys(Key.chord(Key.COMMAND, 'a'), 'found 3')
            ).then(() => driver.sleep(500))
            .then(() => driver.findElement(By.xpath('/html/body/div/*[@id="inpOne"]'))
                    .sendKeys(Key.chord(Key.COMMAND, 'a'), 'found 4')
            ).then(() => driver.sleep(500));

        // test find element by class name
        await testingBlock.findElement(By.className('inpTwo')).sendKeys('inpTwo found')
            .then(() => driver.sleep(500) )
            .then(() => testingBlock.findElement(By.css('.inpTwo'))
                    .sendKeys(Key.chord(Key.COMMAND, 'a'), 'inpTwo found 2')
            ).then(() => driver.sleep(500))
            .then(() => testingBlock.findElement(By.xpath('//*[contains(@class, "inpTwo")]'))
                    .sendKeys(Key.chord(Key.COMMAND, 'a'), 'inpTwo found 3')
            ).then(() => driver.sleep(500))
            .then(() => driver.findElement(By.xpath('/html/body/div/*[contains(@class, "inpTwo")]'))
                    .sendKeys(Key.chord(Key.COMMAND, 'a'), 'inpTwo found 4')
            ).then(() => driver.sleep(500));

        // test find element by name
        await testingBlock.findElement(By.name('inpThree')).sendKeys('inpThree found')
            .then(() => driver.sleep(500) )
            .then(() => testingBlock.findElement(By.css('[name="inpThree"]'))
                    .sendKeys(Key.chord(Key.COMMAND, 'a'), 'inpThree found 2')
            ).then(() => driver.sleep(500))
            .then(() => testingBlock.findElement(By.xpath('//*[@name="inpThree"]'))
                    .sendKeys(Key.chord(Key.COMMAND, 'a'), 'inpThree found 3')
            ).then(() => driver.sleep(500))
            .then(() => driver.findElement(By.xpath('/html/body/div/*[@name="inpThree"]'))
                    .sendKeys(Key.chord(Key.COMMAND, 'a'), 'inpThree found 4')
            ).then(() => driver.sleep(500));

        // test find element by tag name
        await testingBlock.findElement(By.tagName('textarea')).sendKeys('textarea found')
            .then(() => driver.sleep(500) )
            .then(() => testingBlock.findElement(By.css('textarea'))
                    .sendKeys(Key.chord(Key.COMMAND, 'a'), 'textarea found 2')
            ).then(() => driver.sleep(500))
            .then(() => testingBlock.findElement(By.xpath('//textarea[1]'))
                    .sendKeys(Key.chord(Key.COMMAND, 'a'), 'textarea found 3')
            ).then(() => driver.sleep(500))
            .then(() => driver.findElement(By.xpath('/html/body/div/textarea[1]'))
                    .sendKeys(Key.chord(Key.COMMAND, 'a'), 'textarea found 4')
            ).then(() => driver.sleep(500));

        // test find element by link text
        await testingBlock.findElement(By.linkText('google')).then( ele=>changeTextContent(ele, 'google found') )
            .then(() => driver.sleep(500) )
            .then(() => testingBlock.findElement(By.xpath(`//a[text()='google found']`))
                    .then( ele=>changeTextContent(ele, 'google found 2') )
            ).then(() => driver.sleep(500))
            .then(() => driver.findElement(By.xpath(`/html/body/div/a[text()='google found 2']`))
                    .then( ele=>changeTextContent(ele, 'google found 3') )
            ).then(() => driver.sleep(500));

        // test find element by link text
        await testingBlock.findElement(By.partialLinkText('ithu')).then( ele=>changeTextContent(ele, 'github found') )
            .then(() => driver.sleep(500) )
            .then(() => testingBlock.findElement(By.xpath(`//a[contains(text(), 'ub found')]`))
                    .then( ele=>changeTextContent(ele, 'github found 2') )
            ).then(() => driver.sleep(500))
            .then(() => driver.findElement(By.xpath(`/html/body/div/a[contains(text(), 'ithub fo')]`))
                    .then( ele=>changeTextContent(ele, 'github found 3') )
            ).then(() => driver.sleep(500));

        // test select multiple elements
        await testingBlock.findElements(By.className("inp4Multiple"))
            .then( (eles)=>{
                eles.forEach((ele)=>{
                    ele.sendKeys('multiple found');
                });
            } ).then(() => driver.sleep(1000));

        // test select multiple elements by javascript
        await driver.executeScript("return document.querySelectorAll('.inp4Multiple')")
            .then( (eles)=>{
                eles.forEach((ele)=>{
                    ele.sendKeys(Key.chord(Key.COMMAND, 'a'), 'multiple found 2');
                });
            } ).then(() => driver.sleep(1000));
    };
    function changeTextContent (ele, text) {
        driver.executeScript(`arguments[0].textContent = '${text}';`, ele);
    }
})();