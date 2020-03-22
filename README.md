# PHP Use JSON Config

### 動機
* 以 JSON 寫設定較為簡潔, 如下例可以看到在設定中只會有 key value, 不會混入很多的 array 字串, 一目瞭然

ex
```
$pconf = array(
		"test"=>array(
			"config"=>array(
				"url"=>"purl?"
			)
		)
	);
```
v.s.
```
{
	"test": {
		"config": {
			"url": "url?from=${from}&to=${to}&key=${key}"
		}
	}
}

```

* 另外加上以 template string 的方式組內容, 較為清楚, 如上例中的 url 可以從 config 中就清楚看到完整 pattern, 再如下例若使用字串串接則要 handle 許多 `a.b.c.d...` 及 url 中的 `&...=...&...=...` pattern, 容易出錯也不易閱讀

ex
```
	// 以 array 取值再串接參數
	$pval = $pconf["test"]["config"]["url"]
		."from=".$from."&to=".$to."&key=".$key;
```
v.s.
```
	// 先定義參數
	$params = array("from"=>$from, "to"=>$to, "key"=>$key);
	// 再以 JSON path 讀入 config 並套用參數
	$val = $conf->fetchWithParams("test.config.url", $params);
```

### 測試
將所有檔案放在同一資料夾後以瀏覽器連到 `test.php` 應可看到兩行輸出