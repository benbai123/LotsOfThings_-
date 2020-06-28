# LotsOfThings_雜七雜八


### Shell script 中取得 script 檔案本身所在的路徑

### 簡介

在不同位置執行 shell script 時若需要以 script 本身位置取相對路徑有點麻煩, 以此分支做一個記錄

### 測試

下載或複製 test.sh 的內容並以任何方式 (絕對路徑、相對路徑等) 執行, 不論 terminal 中當前路徑為何都可印出 test.sh 本身的路徑

### test.sh 內容

```shell
#!/bin/bash

# 取得此檔案的位置
script_path="$(readlink -f "$0")"
script_dir="$(dirname "${script_path}")"

# 找到 上一層
parent_dir="$(readlink -f "${script_dir}/..")"

echo "執行此 script 的命令 : $0"
echo "此 script 的絕對路徑 : ${script_path}"
echo "此 script 的所在目錄 : ${script_dir}"
echo "此 script 的上一層目錄 : ${parent_dir}"
```