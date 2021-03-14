
# webpack 中於前端頁面使用 yoastseo

### 環境

* Ubuntu 18.04
* 使用 nodejs 15, 安裝命令如下

```
## ubuntu 的 shell 中
curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -

sudo apt-get install -y nodejs
```

### 建立專案及測試

安裝 webpack
```
npm install --save-dev webpack webpack-cli
```

安裝 yoastseo (可能要花好幾分鐘)
```
npm install --save yoastseo buffer util url process
```
其中 buffer, util 及 url 是 yoastseo 需要的 module, process 則是用來在 webpack.config.js 中加入對應的 webpack plugin, 來讓 util 可以在瀏覽器中正常運作

build
```
npx webpack
```

之後即可在瀏覽器中開啟 test.html, 修改輸入框中的文字看字數統計結果
