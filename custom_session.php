<?php
	/**
		CREATE TABLE IF NOT EXISTS sessions (
			id varchar(32) NOT NULL,
			access int(10) unsigned DEFAULT NULL,
			data text,
			PRIMARY KEY (id)
		)
		
		select * from sessions;
	 *
	 */
	class Session {
		private $db;
		public function __construct(){
			$this->initDB();
			$this->setCustomSession();
			// session_start();
		}
		private function initDB () {
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
		public function _open(){
			if($this->db){
				return true;
			}
			return false;
		}
		public function _close(){
			if($this->db->close()){
				return true;
			}
			return false;
		}
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
		public function _write($id, $data){  
			$access = time();

			$stmt = $this->db->prepare("REPLACE INTO sessions VALUES (?, ?, ?)");
			$stmt->bind_param("sss", $id, $access, $data);
			$rs = $stmt->execute();

			return $rs !== false;
		}
		public function _destroy($id){
			$stmt = $this->db->prepare("DELETE FROM sessions WHERE id = ?");
			$stmt->bind_param("s", $id);
			$rs = $stmt->execute();
			return $rs !== false;
		}
		public function _gc($max) {
			$old = time() - $max;
			$stmt = $this->db->prepare("DELETE * FROM sessions WHERE access < ?");
			$stmt->bind_param("s", $old);
			$rs = $stmt->execute();
			return $rs !== false;
		}
	}
	new Session();
?>
