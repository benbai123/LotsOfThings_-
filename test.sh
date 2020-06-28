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
