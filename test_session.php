<?php
	// 載入自訂的 Session 處理類別
	require_once('custom_session.php');
	
	// 其餘的部份不用改變
	session_start();
	if(!isset($_SESSION["cnt"]))
		$_SESSION["cnt"] = 0;
	$_SESSION["cnt"]++;
	echo $_SESSION["cnt"];
?>
