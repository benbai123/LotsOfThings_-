
# webpack 5 中使用 vue 3

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
npm install --save-dev webpack webpack-cli sass-loader sass node-sass
```

安裝 vue 3 及其它 web 相關套件
```
npm install --save axios vue@next vuex@next vue-router@next vue-loader@next @vue/compiler-sfc vue-style-loader file-loader html-loader css-loader style-loader source-map-loader
```

build
```
npx webpack
```

啟動 http server, 若問是否安裝則輸入 y
```
npx http-server
```

之後即可在瀏覽器中開啟 http://127.0.0.1:8080/index 看測試結果
