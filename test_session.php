<?php
/**/
	require_once('custom_session.php');
	session_start();
	if(!isset($_SESSION["cnt"]))
		$_SESSION["cnt"] = 0;
	$_SESSION["cnt"]++;
	echo $_SESSION["cnt"];
	/**/
?>
