<?php
	require_once('JSONConfig.php');
	require_once('config.php');
	// 參數
	$from = 1;
	$to = 10;
	$key = 123;
	// 使用 JSON config 和 template string 的情形
	// 先定義參數
	$params = array("from"=>$from, "to"=>$to, "key"=>$key);
	// 再以 JSON path 讀入 config 並套用參數
	$val = $conf->fetchWithParams("test.config.url", $params);
	echo $val."<br/>";
	
	// 以 array 取值再串接參數
	$pval = $pconf["test"]["config"]["url"]
		."from=".$from."&to=".$to."&key=".$key;
	echo $pval;
?>
