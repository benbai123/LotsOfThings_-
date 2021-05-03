# NodeJS Use PM2
使用 PM2 執行 nodejs 程式

### 優點
可在有修改時 hot redeploy, 在有錯誤或記憶體佔用太多時自動重啟等

### 環境

* Ubuntu 18.04
* 使用 nodejs 15, 安裝命令如下

```
## ubuntu 的 shell 中
curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -

sudo apt-get install -y nodejs
```

### 建立專案及測試

#### 安裝在 global, 需實際執行以下命令安裝

安裝 PM2
```
sudo npm install pm2@latest -g
```

執行
```
pm2 start --watch --name pm2test --exp-backoff-restart-delay 100 --max-memory-restart 2000M -i max test.js
```

查看執行時的 log, 其中 pm2test 是執行時給定的名稱
```
pm2 log pm2test
```

其它常用命令
```
# 停止
pm2 stop pm2test

# 再啟動
pm2 start pm2test
```

### Referencs
[pm2](https://pm2.keymetrics.io/)