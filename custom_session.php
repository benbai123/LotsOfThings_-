<?php
	/** 自訂的 Session 處理類別
	 * 將 PHP 的 Session 由讀寫檔案改為讀寫資料庫
	 */
	class Session {
		// 資料庫連線
		private $db;
		public function __construct(){
			$this->initDB();
			$this->setCustomSession();
			// 不直接 session_start, 交給應用程式自行處理
			// session_start();
		}
		private function initDB () {
			// 資料庫連線資訊, 改為你自己的
			$host = 'localhost';
			$user = 'root';
			$passwd = 'root';
			$database = 'testdb';
			$connect = new mysqli($host, $user, $passwd, $database);
			if ($connect->connect_error) {
					die("連線失敗: " . $connect->connect_error);
			}
			$this->db = $connect;
		}
		/** 覆寫 PHP 原本的 Session 處理方式
		 */
		private function setCustomSession () {
			session_set_save_handler(
				array($this, "_open"),
				array($this, "_close"),
				array($this, "_read"),
				array($this, "_write"),
				array($this, "_destroy"),
				array($this, "_gc")
			);
		}
		/** open 方法只單純檢查 DB 連線
		 */
		public function _open(){
			if($this->db){
				return true;
			}
			return false;
		}
		/** close 方法中關閉連線
		 */
		public function _close(){
			if($this->db->close()){
				return true;
			}
			return false;
		}
		/** 讀 Session 資料改為讀 DB
		 */
		public function _read($id){
			$stmt = $this->db->prepare("SELECT data FROM sessions WHERE id = ?");
			$stmt->bind_param("s", $id);
			$stmt->execute();
			$result = $stmt->get_result();
			$rs = $result->fetch_assoc();

			if ($rs !== false && isset($rs)) {
				return $rs["data"];
			}
			return "";
		}
		/** 寫 Session 資料改為寫入 DB
		 */
		public function _write($id, $data){  
			$access = time();

			$stmt = $this->db->prepare("REPLACE INTO sessions VALUES (?, ?, ?)");
			$stmt->bind_param("sss", $id, $access, $data);
			$rs = $stmt->execute();

			return $rs !== false;
		}
		/** 清除 Session 改為刪 DB 中的資料
		 */
		public function _destroy($id){
			$stmt = $this->db->prepare("DELETE FROM sessions WHERE id = ?");
			$stmt->bind_param("s", $id);
			$rs = $stmt->execute();
			return $rs !== false;
		}
		/** 清除 timeout 的 Session
		 */
		public function _gc($max) {
			$old = time() - $max;
			$stmt = $this->db->prepare("DELETE * FROM sessions WHERE access < ?");
			$stmt->bind_param("s", $old);
			$rs = $stmt->execute();
			return $rs !== false;
		}
	}
	// 建立實體, 以建立 DB 連線及覆寫方法
	new Session();
?>
