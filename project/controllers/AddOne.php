<?php
session_start();

class AddOne extends CI_Controller {
	// 將值加一的方法
	public function plusOne ($i) {
		return $i+1;
	}
	public function result ($i=0) {
		echo $this->plusOne($i)."\n";
	}
	/* 對自己做 Unit Test 的方法
	 * 在 cli 中以 "php index.php AddOne test" 執行
	 */
	public function test () {
		$this->load->library('unit_test'); // 載入 CI 的 unit test lib
		
		$this->testPlusOne(); // 跑測試方法
		// ... 可能有更多測試方法
		
		print_r($this->unit->result()); // 印測試結果
	}
	// 測試的方法, 2+1 應該要是 3
	public function testPlusOne () {
		$test = $this->plusOne(2);
		$expected_result = 3;
		$test_name = 'Test AddOne->plusOne';
		$this->unit->run($test, $expected_result, $test_name);
	}
}
