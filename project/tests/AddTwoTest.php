<?php
echo "AddTwoTest loaded";
/** 測試 AddTwo Controller 的 class
 */
final class AddTwoTest
{
	/* 測試方法
	 * $inst 為 AddTwo Controller 的實體
	 */
	public static function doTest ($inst) {
		$inst->load->library('unit_test'); // 載入 CI 的 unit test lib
		
		AddTwoTest::testPlusTwo($inst); // 跑測試方法
		// ... 可能有更多測試方法
		
		print_r($inst->unit->result()); // 印測試結果
	}
	// 測試的方法, 3+2 應該要是 5
	public static function testPlusTwo ($inst) {
		$test = $inst->plusTwo(3);
		$expected_result = 5;
		$test_name = 'Test AddTwo->plusTwo';
		$inst->unit->run($test, $expected_result, $test_name);
	}
}
?>
