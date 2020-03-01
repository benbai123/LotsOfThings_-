# PHP CI Unit Testing

### 三種方式, 一樣都是使用 CodeIgniter 本身的 unit test library, 差別在組織的方式

#### 假設 project 是 CodeIgniter 專案的根目錄

#### 第一種方式

相關檔案為 `project/controllers/AddOne.php`, 直接將測試寫在 Controller 中, 

好處
* 單純
* 私有方法也能測

缺點
* 會將與 Controller 職責無關的程式也都放在一起
* 每增加一個 Controller 就要加一個執行命令

執行命令: php cli 中執行 `php index.php AddOne test`

執行結果

```
Array
(
    [0] => Array
        (
            [Test Name] => Test AddOne->plusOne
            [Test Datatype] => Integer
            [Expected Datatype] => Integer
            [Result] => Passed
            [File Name] => /var/www/html/application/controllers/AddOne.php
            [Line Number] => 23
            [Notes] => 
        )

)
```

#### 第二種方式

相關檔案為 `project/controllers/AddTwo.php`、`project/tests/AddTwoTest.php`, 

好處
* 測試相關的主要程式移入專門的檔案

缺點
* Controller 及測試檔案之間會有雙向的依賴
* 每增加一個 Controller 就要加一個執行命令

執行命令: php cli 中執行 `php index.php AddTwo test`

執行結果

```
Array
(
    [0] => Array
        (
            [Test Name] => Test AddTwo->plusTwo
            [Test Datatype] => Integer
            [Expected Datatype] => Integer
            [Result] => Passed
            [File Name] => /var/www/html/application/tests/AddTwoTest.php
            [Line Number] => 14
            [Notes] => 
        )

)
```

#### 第三種方式

相關檔案為 `project/controllers/AddThree.php`、`project/controllers/UnitTest.php`、`project/unittests/AddThreeTest.php`, 由 UnitTest.php 執行所有在 `project/unittests` 目錄下的 php 檔案, 而要測試的 Controller 實體則在測試檔案中取得,

好處
* 結構最乾淨, Controller 不需要知道測試
* 加測試檔不用加測試命令

缺點
* 因為測試時多隔了一層 UnitTest Controller, 會有 PHP 本身 life cycle 的問題

執行命令: php cli 中執行 `php index.php UnitTest test`

執行結果

```
Array
(
    [0] => Array
        (
            [Test Name] => Test AddThree->plusThree
            [Test Datatype] => Integer
            [Expected Datatype] => Integer
            [Result] => Passed
            [File Name] => /var/www/html/application/unittests/AddThreeTest.php
            [Line Number] => 13
            [Notes] => 
        )

)
```