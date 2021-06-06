# NodeJS 使用 redis 與 redlock 做 Distributed locks (分散式鎖)

### 安裝 redis

參照 [Ubuntu 18.04 安裝與設定 redis](https://github.com/benbai123/LotsOfThings_-/tree/ubuntu_1804_redis)

### 初始化專案及安裝 redis 與 redlock
```
$ npm init -y
$ npm install --save redis redlock
```

### 測試

```
$ node test.js

# output
first lock success
falied to lock second lock
third lock success
```

Ref

[Node Redis](https://www.npmjs.com/package/redis)

[Redlock](https://www.npmjs.com/package/redlock)