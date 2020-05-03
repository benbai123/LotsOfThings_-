# 使用 Jest 測試 JavaScript

### 步驟 - 以 Ubuntu 18.04 為例, 從安裝 yarn 開始
* 安裝 nodejs/yarn
因為 Ubuntu 18.04 預設的 nodejs 和 yarn 不相容, 因此要一併更新
```
# 先裝 curl
sudo apt-get update -y
sudo apt-get install -y curl

# 更新 nodejs package
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

# 加上 yarn package

curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

# 安裝 yarn, 會一併安裝 nodejs
sudo apt-get update -y && sudo apt-get install -y yarn
```

* 建立測試資料夾, 其中 rewire 是為了測試全域方法多裝的
```
# 建立資料夾
cd ~/Public
mkdir hello-jest

# 安裝 jest 及 rewire
cd hello-jest
yarn add --dev jest
yarn add --dev rewire
```

* 編輯 package.json, 加入 test 命令
```
...
  "scripts": {
    "test": "jest",
    "test-watchAll": "jest --watchAll"
  }
...
```
`jest` 會進行一次測試, `jest --watchAll` 則測試時會進入 watch mode, 檔案一有變動就會重新測試, 更多參數可參考 [https://jestjs.io/docs/en/cli.html](https://jestjs.io/docs/en/cli.html)

* 執行測試, jest 會找到當前目錄下檔名後綴為 `.test.js ` 的檔案來執行
```
yarn test # or yarn test-watchAll
```

### 其它說明

一般情況是以 node module 的方式做測試, 如 sum.js 和 sum.test.js, 若要測試一般全域方法的話有兩種方式, 

一種是將要測的方法加到全域變數中, 這種方式需要修改原本的檔案, 這部份可參考 sum2.js 及 sum2.test.js,

另一種是使用 rewire 套件取得要測試檔案中的方法, 這種做法不用改動原本的檔案, 可參考 sum3.js 及 sum3.test.js
