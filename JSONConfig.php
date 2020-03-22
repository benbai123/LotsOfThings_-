<?php
	class JSONConfig {
		private $configs;
		public function load ($path) {
			$configJSON = file_get_contents($path);
			$this->configs = json_decode($configJSON, true);
		}
		/** 依傳入的 JSON path 字串取得對應 config 的值
		 * ex: config = {
		 *		a: {
		 *			b: 123
		 *		}
		 *	}
		 * fetch("a.b") 則回傳  123
		 */
		public function fetch ($path) {
			// 將 path 以 . 分割
			$nodes = explode(".", $path);
			$obj = $this->configs;
			// 依每一截分割後的 key 由 configs 中取值
			foreach ($nodes as $key) {
				$obj = $obj[$key];
			}
			return $obj;
		}
		/** 取值同時套用參數
		 */
		public function fetchWithParams ($path, $params) {
			$config = $this->fetch($path);
			return $this->applyParamsToConfig($config, $params);
		}
		/** 將 config 套用參數
		 * 	ex 傳入 config 為 abc${var}
		 * 		傳入 params 為 array("var" => 123)
		 * 		則回傳 abc123
		 */
		public function applyParamsToConfig ($config, $params) {
			$toapply = array();
			// 將傳入的 key 包上 "${}"
			// ex var 變成 ${var}
			foreach ($params as $key => $val) {
				$toapply['${'.$key.'}'] = $val;
			}
			return strtr($config, $toapply);
		}
	}
	
	// 載入 config 檔,
	// 也可以在程式中依需要生成實體載入不同的檔案
	$conf = new JSONConfig();
	$conf->load('config.json');
?>
