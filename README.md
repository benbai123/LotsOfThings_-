# PHP Docker Swarm

### 環境
* Ubuntu 18.04, 安裝好 Docker

* 參考 [Install Docker on Ubuntu 18.04](http://ben-bai.blogspot.com/2019/10/motivation-i-want-to-try-rocketmq.html)

* Docker Swarm 主要參考官方文件 [Swarm mode key concepts](https://docs.docker.com/engine/swarm/key-concepts/)、[Create a swarm](https://docs.docker.com/engine/swarm/swarm-tutorial/create-swarm/)、[Deploy a service to the swarm](https://docs.docker.com/engine/swarm/swarm-tutorial/deploy-service/)

### 用來測試的檔案
就是 [這個 Dockerfile](https://github.com/benbai123/LotsOfThings_-/blob/PHP_Docker_Swarm/Dockerfile)

### 步驟
* 首先存好 Dockerfile, 並在 Terminal 中進到存放該 Dockerfile 的目錄
* 執行 `sudo docker build -t phpi .` 將 Dockerfile build 成 image, 這裡取名為 `phpi`
* image build 好後可以先用 `sudo docker run -i -d -p 3333:80 --name phpc phpi` 跑起來看看, 其中 `-p 3333:80` 表示將 host 的 3333 port 連到容器的 80 port
* 跑起來後可以在瀏覽器打 `localhost:3333/test.php` 連到測試頁
* 若有需要可以在 terminal 中打 `sudo docker exec -it phpc bash` 進到容器中 debug
* 之後記得以 `sudo docker stop phpc && docker rm phpc` 移除測試的 container
* 執行 `sudo docker swarm init --advertise-addr 172.17.0.1` 啟動 swarm, 其中 `172.17.0.1` 要改為該 host 的實際 ip, 可在 terminal 中執行 `ifconfig` 或 `hostname -i` 查詢 host ip
* 執行 `sudo docker service create --replicas 2 --publish 3333:80 --name phpcs phpi` 啟動一個 service, 該 service 會有兩個執行實體, 並使用 3333 port
* service 啟動後, 可以使用 `sudo docker service ls` 查詢狀態, 或以 `sudo docker service rm phpcs` 將其移除
* 同樣在 host 的瀏覽器中連到 localhost:3333/test.php 測試，重新整理頁面多次會發現有時數字會不連續，主要是因為以下問題

### 已知問題
* 沒有 sticky session: 每次重整頁面可能會連到不同的 container, 因此 session 會失效, 官方解法需要付費版本, 參見 [Deploy a layer 7 routing solution](https://docs.docker.com/ee/ucp/interlock/deploy/) 以及 [Implement persistent (sticky) sessions](https://docs.docker.com/ee/ucp/interlock/usage/sessions/)

### 一些可能的處理方式
* [NGINX as a Reverse Proxy for Docker Swarm Clusters](https://rollout.io/blog/nginx-reverse-proxy-docker-swarm-clusters/)
* [How to maintain Session Persistence (Sticky Session) in Docker Swarm](http://www.littlebigextra.com/how-to-maintain-session-persistence-sticky-session-in-docker-swarm-with-multiple-containers/)
* 也可以考慮只將與 Session 無關的部份用 Docker Swarm 來跑, 那就需要將相關服務切分清楚, 讓佔大部份 loading 的工作可以與 Session 無關
