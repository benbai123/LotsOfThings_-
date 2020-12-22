require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
	// 使用 chrome
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await gotoTestPage()
            // 測試選取 dom element 的方法
            .then(testElementsSelection)
            // 測試與各種輸入元素互動
            .then(testInput)
            // 測試 select/option
            .then(testSelect)
            // test move to iframe and back
            .then(testIFrames).catch(e=>console.log(e))
            // test move to child window(s) and back
            .then(testNewBrowserWindows)
            // test window history
            .then(testBrowserHistory)
            // flow control
            .then(testFlowControl)
            // Screenshot
            .then(testScreenShot);
    } catch (e) {
        console.log(e);
    } finally{
		// 關閉視窗, 結束
        driver.quit();
    }


    async function gotoTestPage (){
        return driver.get('http://benbai123.github.io/TestPages/Automation/Selenium/CommandsTesting.html'); // 連到 google
    }
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
    }
    // 測試與各種輸入元素互動
    async function testInput () {
        let testingBlock = await driver.findElement(By.className('input-elements'));

        await testingBlock.findElement(By.className('text-input'))
            .then(async (input)=>{
                // get initial value
                console.log('initial value '+ await input.getAttribute('value'));
                // select all then delete
                await input.sendKeys(Key.chord(Key.COMMAND, 'a')).then(waitForEyes);
                await input.sendKeys(Key.DELETE).then(waitForEyes);
                // input some text
                await input.sendKeys("some text").then(waitForEyes)
                    .then(async ()=>{
                        // get updated value
                        console.log('updated value '+ await input.getAttribute('value'));
                    });
            })
            .then(() => driver.sleep(500));

        // readonly
        await testingBlock.findElement(By.className('readonly-text-input'))
            .then(async (readonlyinput)=>{
                driver.executeScript(`arguments[0].style.cssText = 'border: 1px solid red;';`, readonlyinput);
                await driver.sleep(1000);
                // input some text, no effect
                await readonlyinput.sendKeys("sometext").then(waitForEyes);
                await driver.executeScript(`arguments[0].style.cssText = '';`, readonlyinput);
            })
            .then(() => driver.sleep(500));

        // disabled
        await testingBlock.findElement(By.className('disabled-text-input'))
            .then(async (disabledinput)=>{
                driver.executeScript(`arguments[0].style.cssText = 'border: 1px solid red;';`, disabledinput);
                await driver.sleep(1000);
                // input some text, no effect
                await disabledinput.sendKeys("sometext").then(waitForEyes);
            })
            .then(() => driver.sleep(500))
            .catch(err=>console.log(`error when send keys to disabled input ${err}`))
            .finally(async ()=>{
                let disabledinput = await testingBlock.findElement(By.className('disabled-text-input'));
                await driver.executeScript(`arguments[0].style.cssText = '';`, disabledinput);
            } );
        await waitForEyes();

        // checkbox
        await testingBlock.findElement(By.className('test-checkbox'))
            .then(async (checkbox)=>{
                // get label text
                let label = await driver.executeScript("return arguments[0].parentNode;", checkbox);
                console.log('label text ' + await label.getText() );

                // check
                await checkbox.click()
                    .then(async ()=>{console.log(`is selected? ${await checkbox.isSelected()}`)})
                    .then(waitForEyes);

                // uncheck
                await checkbox.click()
                    .then(async ()=>{console.log(`is selected? ${await checkbox.isSelected()}`)})
                    .then(waitForEyes);

            }).then(waitForEyes);

        // radio
        await testingBlock.findElement(By.className('test-radios'))
            .then(async (radiosBlock)=>{
                // select
                await testingBlock.findElement(By.css("[type='radio'][name='gender'][value='female']"))
                    .click().then(waitForEyes);
                await testingBlock.findElement(By.css("[type='radio'][name='gender'][value='male']"))
                    .click().then(waitForEyes);
                let selectedRadio = await testingBlock.findElement(By.css("[type='radio'][name='gender']:checked"))
                await selectedRadio.getAttribute("value")
                    // get selected value
                    .then(value=>console.log(`Selected gender: ${value}`)).then(waitForEyes)
                    .then(()=>{
                        // deselect it
                        driver.executeScript("arguments[0].checked = false;", selectedRadio);
                    })

            }).then(waitForEyes);

        // number, 0~100 step 0.2
        await testingBlock.findElement(By.className("test-number-input"))
            .then(async (numberInput)=>{
                // try to input some wrong value, should see some notification in browser
                await numberInput.sendKeys("0.3");
                await driver.executeScript("arguments[0].blur();", numberInput);
                await driver.sleep(2000);

                // inc
                await numberInput.sendKeys(Key.ARROW_UP).then(waitForEyes);
                await numberInput.sendKeys(Key.ARROW_UP).then(waitForEyes);
                await numberInput.sendKeys(Key.ARROW_UP).then(waitForEyes);

                await numberInput.sendKeys(Key.chord(Key.COMMAND, "a"), 200).then(waitForEyes);
                await driver.executeScript("arguments[0].blur();", numberInput);
                await driver.sleep(2000);

                // dec
                await numberInput.sendKeys(Key.ARROW_DOWN).then(waitForEyes);
                await numberInput.sendKeys(Key.ARROW_DOWN).then(waitForEyes);
                await numberInput.sendKeys(Key.ARROW_DOWN).then(waitForEyes);
            });

        // range, 0~100 step 0.2
        await testingBlock.findElement(By.className("test-range-input"))
            .then(async (rangeInput)=>{
                await driver.sleep(1000);
                // click on range input
                await driver.actions().move({x: 30, y: 5, origin: rangeInput})
                    .click().perform().then(waitForEyes);
                // inc
                await rangeInput.sendKeys(Key.ARROW_UP).then(waitForEyes);
                await rangeInput.sendKeys(Key.ARROW_UP).then(waitForEyes);
                await rangeInput.sendKeys(Key.ARROW_UP).then(waitForEyes);
                // dec
                await rangeInput.sendKeys(Key.ARROW_DOWN).then(waitForEyes);
                await rangeInput.sendKeys(Key.ARROW_DOWN).then(waitForEyes);
                await rangeInput.sendKeys(Key.ARROW_DOWN).then(waitForEyes);
            });

        // color input
        await testingBlock.findElement(By.className("test-color-input"))
            .then(async (colorInput)=>{
                await driver.sleep(1000);
                await driver.executeScript("arguments[0].value = '#8347AE'", colorInput)
                    .then(waitForEyes);
            });

        // date, 2019-01-06~2019-12-29, step 7 days, default 2019-10-27
        await testingBlock.findElement(By.className("test-date-input"))
            .then(async (dateInput)=>{
                // scroll to element
                await driver.executeScript("arguments[0].scrollIntoView({block: 'center', behavior: 'auto'});", dateInput);
                await driver.sleep(3000);

                // get default date
                let defaultDate = await driver.executeScript("return arguments[0].value;", dateInput);
                console.log(`default date: ${defaultDate}`);
                await driver.sleep(3000);

                // change value to 2019-01-05, use JavaScript to set value directly
                // to avoid the gap between different browser
                await driver.executeScript("arguments[0].value = '2019-01-05';", dateInput);
                await driver.executeScript("arguments[0].onchange();", dateInput).then(waitForEyes);
                await driver.sleep(3000);

                // increase date by js (see commands_testing.js)
                // http://benbai123.github.io/TestPages/Automation/Selenium/js/commands_testing.js
                await driver.executeScript("addDays(arguments[0], 1);", dateInput).then(waitForEyes);
                await driver.sleep(3000);

                // inc
                await driver.executeScript("addDays(arguments[0], 1);", dateInput).then(waitForEyes);
                await driver.sleep(3000);

                // dec 2 days
                await driver.executeScript("addDays(arguments[0], -2);", dateInput).then(waitForEyes);
                await driver.sleep(3000);
            });
    }
    async function testSelect () {
        let testingBlock = await driver.findElement(By.className('select-option'));

        await driver.executeScript("arguments[0].scrollIntoView({block: 'center', behavior: 'auto'});", testingBlock);
        await driver.sleep(3000);

        let select = testingBlock.findElement(By.className("test-single-select"));

        /*
         * select another option by click
         */
        await select.click()
            .then(async ()=>{
                await driver.sleep(500);
                let e = await select.findElement(By.css("option[value='sleep']"));
                await e.click();
                await select.click();
                await driver.sleep(1000)
            });

        // get test-multiple-select
        select = testingBlock.findElement(By.className("test-multiple-select"));
        // select cheese
        await select.findElement(By.css("option[value='cheese']")).then(async (e)=>{
                await e.click();
                await driver.sleep(500);

                // control-select ham
                await driver.actions().keyDown(Key.COMMAND)
                    .click( await select.findElement(By.css("option[value='ham']")) )
                    .keyUp(Key.COMMAND).perform();
                await driver.sleep(500);

                // shift-select egg to beef
                await driver.actions().keyDown(Key.SHIFT)
                    .click( await select.findElement(By.css("option[value='beef']")) )
                    .keyUp(Key.SHIFT).perform();

                await driver.sleep(1000);
            })

    }
    async function testIFrames() {
        let iframe = await driver.findElement(By.id('iframe001'));
        // move to iframe001
        await driver.switchTo().frame(iframe)
            .then(async ()=>{
                let ele = await driver.findElement(By.className("iframe-content"));
                let content = await ele.getText();
                console.log('iframe001 content');
                console.log(content);
                if ('content in iframe 001' != content) throw 'content not expected';
            });

        // move to iframe002 inside iframe001
        iframe = await driver.findElement(By.id('iframe002'));
        await driver.switchTo().frame(iframe)
            .then(async ()=>{
                let ele = await driver.findElement(By.className("iframe-content"));
                let content = await ele.getText();
                console.log('iframe002 content');
                console.log(content);
                if ('content in iframe 002' != content) throw 'content not expected';
            });

        // back to default window
        await driver.switchTo().defaultContent();
        // move to iframe003
        iframe = await driver.findElement(By.id('iframe003'));
        await driver.switchTo().frame(iframe)
            .then(async ()=>{
                let ele = await driver.findElement(By.className("iframe-content"));
                let content = await ele.getText();
                console.log('iframe003 content');
                console.log(content);
                if ('content in iframe 003' != content) throw 'content not expected';
            });
        await driver.switchTo().defaultContent();
    }
    async function testNewBrowserWindows() {
        let testingBlock = await driver.findElement(By.className("child-windows"));
        let testElem = await testingBlock.findElement(By.tagName("a"));
        let origin = await driver.getWindowHandle();

        let winHandles = {};

        await driver.executeScript("arguments[0].scrollIntoView({block: 'center', behavior: 'auto'});", testingBlock);


        await testElem.click();
        // track the opened window
        await driver.getAllWindowHandles().then((all)=>{
            winHandles['win001'] = all.filter(e=>e!=origin && !Object.values(winHandles).includes(e))[0];
        });
        // switch to win001
        driver.switchTo().window(winHandles['win001']);
        await driver.sleep(500);

        let content = await driver.findElement(By.className("window-content")).getText();
        let expected = "content in window 001";
        console.log(content);
        if (expected != content) throw 'content should be ' + expected;

        // back to original window
        await driver.switchTo().window(origin);
        await driver.sleep(500);


        // test window_002
        testElem = await testingBlock.findElement(By.className("newwin-002"));
        await testElem.click();

        // track the opened window
        await driver.getAllWindowHandles().then((all)=>{
            winHandles['win002'] = all.filter(e=>e!=origin && !Object.values(winHandles).includes(e))[0];
        });
        await driver.switchTo().window(winHandles['win002']);
        await driver.sleep(500);

        content = await driver.findElement(By.className("window-content")).getText();
        expected = "content in window 002";
        console.log(content);
        if (expected != content) throw 'content should be ' + expected;
        await driver.switchTo().window(origin);


        // test window_003
        testElem = await testingBlock.findElement(By.className("newwin-003"));
        await testElem.click();
        await driver.getAllWindowHandles().then((all)=>{
            winHandles['win003'] = all.filter(e=>e!=origin && !Object.values(winHandles).includes(e))[0];
        });
        await driver.switchTo().window(winHandles['win003']);
        await driver.sleep(500);
        content = await driver.findElement(By.className("window-content")).getText();
        expected = "content in window 003";
        console.log(content);
        if (expected != content) throw 'content should be ' + expected;
        await driver.switchTo().window(origin);


        // close win001~win003
        await driver.switchTo().window(winHandles['win001']);
        await driver.sleep(500);
        await driver.close();
        await driver.sleep(500);
        
        await driver.switchTo().window(winHandles['win002']);
        await driver.sleep(500);
        await driver.close();
        await driver.sleep(500);

        await driver.switchTo().window(winHandles['win003']);
        await driver.sleep(500);
        await driver.close();
        await driver.sleep(500);

        // back to origin
        await driver.switchTo().window(origin);
        await driver.sleep(1000);
    }
    async function testBrowserHistory () {
        // locate to testing block first
        let testingBlock = await driver.findElement(By.className("browser-history"));
        await driver.executeScript("arguments[0].scrollIntoView({block: 'center', behavior: 'auto'});", testingBlock);
        // to next page 001
        await testingBlock.findElement(By.className("nextpage001")).click();
        await driver.sleep(500);
        // to next page 002
        await driver.findElement(By.className("nextpage002")).click();
        await driver.sleep(500);

        // back
        await driver.navigate().back();
        await driver.sleep(500);
        console.log(await driver.findElement(By.className("next-page-content")).getText());
        // forward
        await driver.navigate().forward();
        await driver.sleep(500);
        console.log(await driver.findElement(By.className("next-page-content")).getText());

        // back to first page (second history) from last page
        await driver.executeScript("window.history.go(-(window.history.length - 2))");
        // relocate testing block
        testingBlock = await driver.findElement(By.className("browser-history"));
        await driver.executeScript("arguments[0].scrollIntoView({block: 'center', behavior: 'auto'});", testingBlock);
        await driver.sleep(500);


        // test history.pushState
        let ele = await driver.findElement(By.className("push-state-link"));
        await ele.click();
        await driver.sleep(500);
        if (await ele.isDisplayed()) throw 'push-state-link is visible';
        await driver.navigate().back();
        await driver.sleep(500);
        if (false == await ele.isDisplayed()) throw 'push-state-link is not visible';
        driver.navigate().forward();
        await driver.sleep(500);
        if (await ele.isDisplayed()) throw 'push-state-link is visible';

        await driver.sleep(1000);
    }
    async function testFlowControl() {
        // locate to testing block first
        let testingBlock = await driver.findElement(By.className("flow-control"));
        let ele = await testingBlock.findElement(By.className("add-child"));
        await driver.executeScript("arguments[0].scrollIntoView({block: 'center', behavior: 'auto'});", testingBlock);
        await driver.sleep(500);

        await ele.click();
        await driver.wait(until.elementLocated(By.className('added-child')), 6000);


        ele = await testingBlock.findElement(By.className('to-be-hidden'));
        await ele.click();
        await driver.wait(until.elementIsNotVisible(ele), 12000);

        await driver.sleep(1000);
    }
    async function testScreenShot() {
        await driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('out.png', image, 'base64', function(err) {
                    if (err) console.log(err);
                    else console.log('screenshot saved');
                });
            }
        );
        await driver.sleep(1000);
    }
    async function waitForEyes() {
        await driver.sleep(500);
    }
    function changeTextContent (ele, text) {
        driver.executeScript(`arguments[0].textContent = '${text}';`, ele);
    }
})();