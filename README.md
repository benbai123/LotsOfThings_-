# PHP Store Session to Database

### 動機

主要是為了解決使用 load balance 時的 sticky Session 問題

當使用 load balance 時經常要依據不同的使用方式調整 Session 持久化的設置, 例如自行用 apache 和使用 Azure 提供的服務就不同, 因此希望將 Session 直接存放在資料庫, 就能自行處理 Session 持久化

### 步驟

* 首先要在資料庫建立一個存 Session 的 table
```
		CREATE TABLE IF NOT EXISTS sessions (
			id varchar(32) NOT NULL,
			access int(10) unsigned DEFAULT NULL,
			data text,
			PRIMARY KEY (id)
		)

```
* 然後要建立一個 Session 實體, 覆寫 PHP 原本的 Session 機制, 改為由資料庫讀寫, 參見 [custom_session.php](https://github.com/benbai123/LotsOfThings_-/blob/php_store_session_to_database/custom_session.php)
* custom_session.php 的 initDB 方法中有 DB 連線資訊, 改為能到你的 DB 的
* 接著在要自行處理 Session 持久化的程式中, 載入自訂的 Session 實體, 參見 [test_session.php](https://github.com/benbai123/LotsOfThings_-/blob/php_store_session_to_database/test_session.php) 的第一行 `require_once('custom_session.php');`
* 之後就跟一般使用 Session 的方式一樣

### 測試

* 先將
* 由瀏覽器連到 test_session.php, 重整多次頁面, 應該看到數字持續增加
* 以 sql `select * from sessions;` 查詢存 Session 的 table, 應該可以看到儲存在資料庫中的 Session 資料

### 參考資料

[How to save PHP Sessions to a database](https://culttt.com/2013/02/04/how-to-save-php-sessions-to-a-database/)