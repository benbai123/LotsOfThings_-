# PHP Use JSON Config

### 動機
* 以 JSON 寫設定較為簡潔,

ex
```
array("API"=>array(
		"url"=>"http",
		"key"=>"abc"
	)
)
```
v.s.
```
{
	api: {
		url: "http",
		key: "abc"
	}
}
```

* 另外加上以 template string 的方式組內容, 較為清楚

ex
```
"htttp?from=".$from."&to=".$to."&key=".$key;
```
v.s.
```
applyParams(
	"http?from=${from}&to=${to}&key=${key}",
	array(
		"from"=>$from,
		"to"=>$to,
		"key"=>$key
	)
);
```
