# LotsOfThings_雜七雜八


### Shell script 中取得 command line 參數

### 簡介

在 shell script 中取得 command line 參數的方法

### 測試

下載或複製 test.sh 的內容並在執行時輸入 `-u=xxx` `-p=xxx` 會顯示輸入的參數內容, 也可輸入更多其它參數

### 測試範例
```shell
./test.sh -u=aaa -p='bbb ccc' -other=otherparam
```

### test.sh 內容

```shell
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
```