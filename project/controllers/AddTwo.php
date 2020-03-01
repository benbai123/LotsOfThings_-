<?php
session_start();

class AddTwo extends CI_Controller {
	// 將值加二的方法
	public function plusTwo ($i) {
		return $i+2;
	}
	public function result ($i=0) {
		echo $this->plusTwo($i)."\n";
	}
	/* 對自己做 Unit Test 的方法
	 * 在 cli 中以 "php index.php AddTwo test" 執行
	 */
	public function test () {
		// 載入測試的 class
		require_once(dirname(__FILE__).'/../tests/AddTwoTest.php');
		// 呼叫測試的 class 的方法並傳入自己的實體
		AddTwoTest::doTest($this);
	}
}
