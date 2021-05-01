# NodeJS Swagger UI and Generator
NodeJS 中使用 Supertest 搭配 Swagger Generator 自動生成 Swagger 文件

### 前言

swagger 是前端 api 文件化及線上測試的工具, nodejs 中有 `swagger-ui-express` 用來搭配 express 呈現網頁介面, `express-oas-generator` 則用來自動生成文件

生成方式是截取 request/response 解析其中參數

此分支延續 [NodeJS 中使用 Supertest 測試 API](https://github.com/benbai123/LotsOfThings_-/tree/nodejs_supertest_apitesting),
繼續加入 swagger ui 及 generator

### 目錄結構

nodejs app 及 API 的部份使用 express, 放置於 app 目錄下

Swagger UI 及 Generator 的相關配置在 `app/app.js` 中

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

安裝 Swagger UI 及 Generator
```
npm install --save swagger-ui-express
npm install --save-dev express-oas-generator
```

安裝 Jest 及 supertest
```
npm install --save-dev jest supertest
```

加入 scripts 到 `package.json`
```
  "scripts": {
    "test": "NODE_ENV=test jest"
  },
```

執行測試 並同時生成文件
```
npm run test
```

會看到執行測試並通過, 且生成 output.json 及 output_v3.json 兩個檔案


查看文件

執行 `node app/app.js` 啟動 server 並連到
[localhost:3000/api-docs](localhost:3000/api-docs) 查看 swagger 文件,

可以試試點開 /testApi/hello 再點 Try it out, 修改 request 參數中的 name 後按下 Execute 即可看到回傳結果