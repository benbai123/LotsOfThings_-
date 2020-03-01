<?php
session_start();
class UnitTest extends CI_Controller {
	
	public function test () {
		$folder = dirname(__FILE__).'/../unittests'; // 到 project/unittests 目錄
		$this->load->library('unit_test'); // 載入 CI 的 unit test lib
		foreach (scandir($folder) as $filename) {
			$path = $folder.'/'.$filename;
			if (is_file($path)) {
				// 對所有 unittests 目錄下的 php 檔
				if ($this->endsWith($filename, '.php')) {
					require_once($path); // 載入
					$clazz = str_replace(".php","",$filename);\
					// 呼叫 doTest 方法並傳入自己的實體
					call_user_func($clazz."::doTest", $this);
				}
			}
		}
		// 印出測試結果
		print_r($this->unit->result());
	}
	// 以 Controller 名稱取得實體
	function getController ($name) {
		// 以名稱載入 Controller
		require_once(dirname(__FILE__).'/'.$name.'.php');
		$object = new $name(); // 以名稱生成實體
		return $object; // 回傳
	}
	// 判斷某字串 ($needle) 是不是以特定字串 ($haystack) 結尾
	function endsWith($haystack, $needle) {
		return substr_compare($haystack, $needle, -strlen($needle)) === 0;
	}
}

