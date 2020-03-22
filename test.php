<?php
	$from = 1;
	$to = 10;
	$key = 123;
	// JSON config with template string
	require_once('JSONConfig.php');
	
	$params = array("from"=>$from, "to"=>$to, "key"=>$key);
	$val = $conf->fetchWithParams("test.config.url", $params);
	echo $val."<br/>";
	
	require_once('config.php');
	$pval = $pconf["test"]["config"]["url"]
		."from=".$from."&to=".$to."&key=".$key;
	echo $pval;
?>
