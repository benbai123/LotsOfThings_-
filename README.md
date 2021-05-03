# NodeJS Jest Unittest
使用 Jest 對 js 程式做 unit test

### 環境

* Ubuntu 18.04
* 使用 nodejs 15, 安裝命令如下

```
## ubuntu 的 shell 中
curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -

sudo apt-get install -y nodejs
```

### 建立專案及測試

安裝 Jest
```
npm install --save-dev jest
```

加入 scripts
```
  "scripts": {
    "test": "jest",
    "test-watchAll": "jest --watchAll"
  },
```

執行 (單次), jest 會自動執行副檔名為 `.test.js` 的檔案
```
npm run test
```

或者執行 watch all, 當程式修改時自動重新測試
```
npm run test-watchAll
```

可以試試 watch all 再故意將 sum.js 改成錯誤的 `return a + b + 2;`

會看到重跑 test 並出現錯誤訊息

### Reference
[jest](https://jestjs.io/)