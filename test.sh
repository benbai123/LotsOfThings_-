#!/bin/bash

other='others : '

# 抓參數
for i in "$@"
do
case $i in
    -u=*)
    	username="${i#*=}"
    ;;
    -p=*)
    	password="${i#*=}"
    ;;

    *)
            other="${other} ${i%=*}: ${i#*=}, "
    ;;
esac
done

# 檢查必要參數
if [[ -z ${username+x} ]]; then
	echo "missing username, usage: -u='xxx'";
elif [[ -z ${password+x} ]]; then
	echo "missing password, usage: -p='xxx'";
else
	# 輸出參數內容
	echo "user name : ${username}"
	echo "password : ${password}"
	echo ${other}
fi
