# NodeJS Supertest API Testing
NodeJS 中使用 Supertest 測試 API

### 前言

supertest 可以在不實際啟動 Server 的情形下進行 api 測試,

它實際上是自動起一個服務並將 request 導去該服務中

### 目錄結構

nodejs app 及 API 的部份使用 express, 放置於 app 目錄下

Jest/Supertest 的部份放置於 test 目錄下

### 環境

* Ubuntu 18.04
* 使用 nodejs 15, 安裝命令如下

```
## ubuntu 的 shell 中
curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -

sudo apt-get install -y nodejs
```

### 建立專案及測試

安裝 express
```
npm install --save express
```

安裝 Jest 及 supertest
```
npm install --save-dev jest supertest
```

加入 scripts 到 `package.json`
```
  "scripts": {
    "test": "jest"
  },
```

執行測試
```
npm run test
```

會看到執行測試並通過

可試試將 `test/testApi.test.js` 中的 `toBe('Hello Ben!');` 改成其它字串看看測試錯誤的情形

### Reference
[supertest](https://www.npmjs.com/package/supertest)