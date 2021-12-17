# NodeJS Selenium Headless Text Mode

##### NodeJS 中使用 Selenium 並以 headless mode 在無顯示器狀態下使用

### 說明

* 基本上與 [nodejs_selenium_gettingstarted](https://github.com/benbai123/LotsOfThings_-/tree/nodejs_selenium_gettingstarted) 一致

* 只是 ChromeDriver 啟動參數多加了 `--headless` 及 `--disable-gpu` 等 Options


### 環境

* Ubuntu 20.04
* 使用 nodejs 14, 安裝命令如下
* 安裝 chrome

```
## ubuntu 的 shell 中

# 切換成 root
sudo su

# 安裝 NodeJS 14
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install -y nodejs

# 安裝 Chrome
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
```

### 步驟

以下為由空資料夾開始的步驟, 如果是 Clone 此分支的話, 可以直接由第 3 步開始

1. 建立一個專案資料夾, 以 cmd (Command Prompt) 進入
2. 在 cmd 中執行 `npm init` 初始化專案, 會需要回答一些問題
3. 在 cmd 中執行 `npm install selenium-webdriver` 安裝 selenium 相關 library
4. 在 cmd 中執行 `npm install chromedriver` 安裝 chrome driver
5. 然後就可以在 cmd 中執行 `node index.js` 進行測試, 會看到 Chrome 開起來、連到 Google 搜尋 Cheese 過幾秒後關閉

### 其它說明

* 顯示器的有無對瀏覽器來說，只是有沒有要輸出資料到一個輸出裝置

* 沒有顯示器對瀏覽器的運作本身沒有影響