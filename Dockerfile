# 以 Ubuntu 18.04 的 image 為基礎
FROM ubuntu:18.04

# 就是個版本號
LABEL version="0.0.1"

# 安裝需要的工具, 首先 update 一下
RUN apt-get -y update
RUN apt-get -y upgrade

# 安裝 apache
RUN apt-get -y install apache2

# 這是為了讓裝 PHP 時略過要人工輸入的提問
ARG DEBIAN_FRONTEND=noninteractive
# 安裝 PHP
RUN apt-get -y install php libapache2-mod-php php-mysql

# 生成一個 test.php, 主要用來測 SESSION
RUN echo '<?php session_start(); setcookie("for-sticky-session", "test"); if(!isset($_SESSION["cnt"])) 	$_SESSION["cnt"] = 0; $_SESSION["cnt"]++; echo $_SESSION["cnt"]; ?>' > /var/www/html/test.php

# 執行 container 時, 跑啟動 apache 的命令
# 後面的 tail... 是為了讓 container 保持執行
# ref: https://stackoverflow.com/a/45461426/1042731
CMD  service apache2 start && tail -f /dev/null

