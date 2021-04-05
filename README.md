
# nodejs 中使用 pngjs 處理圖檔

### 環境

* Ubuntu 18.04
* 使用 nodejs 15, 安裝命令如下

```
## ubuntu 的 shell 中
curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -

sudo apt-get install -y nodejs
```

### 建立專案及測試

安裝 pngjs
```
npm install --save pngjs
```

執行 (先將 dest.png 刪除)
```
node test.js
```

執行後可看到重新生成 dest.png, 將 src.png 中白色的部份轉為透明