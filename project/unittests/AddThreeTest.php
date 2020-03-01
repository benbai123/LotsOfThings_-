<?php
echo "AddThreeTest loaded";
/** 測試 AddThree Controller 的 class
 */
final class AddThreeTest
{
	/* 測試方法, 其中 $ut 是 UnitTest Controller 的實體
	 */
	public static function doTest ($ut) {
		// 透過 UnitTest Controller 取得 AddThree Controller 的實體
		$inst = $ut->getController('AddThree');
		
		// 做測試
		AddThreeTest::testPlusThree($ut, $inst);
		// ... 可能有更多其它測試
	}
	// 測試方法, 5+3 應該要是 8
	public static function testPlusThree ($ut, $inst) {
		$test = $inst->plusThree(5);
		$expected_result = 8;
		$test_name = 'Test AddThree->plusThree';
		$ut->unit->run($test, $expected_result, $test_name);
	}
}
?>
