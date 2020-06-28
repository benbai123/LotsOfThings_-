# LotsOfThings_雜七雜八


### Shell script 中取檔案中的 property value

### 測試

下載或複製 test.sh 的內容, 與 test.properties 放在同一目錄下, 執行 test.sh 會印出 test.properties 中的 propA 與 propB 的值

### 測試範例
```shell
./test.sh
```

### test.sh 內容

```shell
#!/bin/bash

# 取得此 script 檔案的位置
script_path="$(readlink -f "$0")"
script_dir="$(dirname "${script_path}")"
# 取得 test.properties 路徑
prop_file="$(readlink -f "${script_dir}/test.properties")"

# 讀取 propA
paramDef="`grep propA ${prop_file}`"
# 取等號之後的部份
pval="${paramDef#*=}"
# 去掉前後空白
pval="${pval#* }"
pval="${pval% *}"
# 印出 propA, 前後加 - 確認無空白
echo "propA: -${pval}-"

paramDef="`grep propB ${prop_file}`"
pval="${paramDef#*=}"
pval="${pval#* }"
pval="${pval% *}"
echo "propB: -${pval}-"
```