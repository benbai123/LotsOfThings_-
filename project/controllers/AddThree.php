<?php
if (session_status() == PHP_SESSION_NONE) {
	/* 因為在做 Unit Test 時會多隔一層 UnitTest Controller
	 * 需要在外層先做 session_start
	 * 因此本身需要多做判斷
	 * 如果不在外層做 session_start 會有錯誤訊息
	 * Cannot start session when headers already sent
	 * 而如果外層做了自己又做則會有錯誤訊息
	 * A session had already been started
	 */
	session_start();
}

class AddThree extends CI_Controller {
	// 將值加三的方法
	public function plusThree ($i) {
		return $i+3;
	}
	public function result ($i=0) {
		echo $this->plusThree($i)."\n";
	}
	/* Unit Test 透過 UnitTest Controller 來做
	 * 在 cli 中以 "php index.php UnitTest test" 執行
	 */
}
