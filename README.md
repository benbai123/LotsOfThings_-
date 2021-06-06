# NodeJS 使用 redis 做 Publish–Subscribe Pattern

### 安裝 redis

參照 [Ubuntu 18.04 安裝與設定 redis](https://github.com/benbai123/LotsOfThings_-/tree/ubuntu_1804_redis)

### 初始化專案及安裝 redis 與 redlock
```
$ npm init -y
$ npm install --save redis
```

### 測試

```
$ node test.js

# output
Subscriber received message in channel 'a channel': another message
```

Ref

[Node Redis PubSub](https://www.npmjs.com/package/redis#pubsub)

[wiki Publish–Subscribe Pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)