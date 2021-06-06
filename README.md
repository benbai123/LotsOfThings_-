
# Ubuntu 18.04 安裝與設定 redis

### 安裝
```
$ sudo apt update
$ sudo apt install redis-server
```

### 修改設定, 將 Redis 作為 service
```
# 修改設定檔
# 找到 supervised no
# 把它改成 supervised systemd
$ sudo vi /etc/redis/redis.conf

# 重啟
$ sudo systemctl restart redis.service

# 確認 Redis 執行狀況
# (執行後會維持在訊息畫面, 可按 q 跳出)
$ sudo systemctl status redis
```

### 測試
```
# 進入 CLI
$ redis-cli

# ping 為命令, PONG 為回應, 以下同
127.0.0.1:6379> ping
PONG

# 設值
127.0.0.1:6379> set test "It's working!"
OK

# 取值
127.0.0.1:6379> get test
"It's working!"

# 結束 CLI
127.0.0.1:6379> exit


# 重啟再次取值
$ sudo systemctl restart redis
$ redis-cli

127.0.0.1:6379> get test
"It's working!"
```

### 加入密碼
```
# 修改設定檔
$ sudo vi /etc/redis/redis.conf

# 找到 # requirepass foobared
# 取代為 requirepass redisTest (redisTest 為密碼)

# 重啟
$ sudo systemctl restart redis.service

# 測試
$ redis-cli
127.0.0.1:6379> get test
(error) NOAUTH Authentication required.

127.0.0.1:6379> auth redisTest
OK

127.0.0.1:6379> get test
"It's working!"
```


### 將危險命令停用
```
# 修改設定檔
$ sudo vi /etc/redis/redis.conf
```

```
# 加入以下內容
# 取代為空字串即為停用
# DEL redlock unlock 會需要可保留
rename-command FLUSHDB ""
rename-command FLUSHALL ""
rename-command KEYS ""
rename-command PEXPIRE ""
# rename-command DEL ""
rename-command CONFIG ""
rename-command SHUTDOWN ""
rename-command BGREWRITEAOF ""
rename-command BGSAVE ""
rename-command SAVE ""
rename-command SPOP ""
rename-command SREM ""
rename-command RENAME ""
rename-command DEBUG ""
```

```
# 存檔後重啟
$ sudo systemctl restart redis.service
```

Ref:
[How To Install and Secure Redis on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04)
