<?php

namespace api;

use mysqli_result;

class DB {
    private static $instance = null;
    
    private const HOST = 'db';
    private const USER = 'hw123';
    private const PASS = 'hw123';
    private const DB = 'hw';

    private $conn = null;

    private function __construct() {
        $this->conn = mysqli_connect(self::HOST, self::USER, self::PASS, self::DB);
    }

    public static function getDB() {
        if(!self::$instance) {
            self::$instance = new DB();
        }
        return self::$instance;
    }

    public function getConnection() {
        return $this->conn;
    }

    public function query(string $sql): mysqli_result|bool {
        return mysqli_query($this->conn, $sql);
    }

    public function insertId() {
        return $this->conn->insert_id;
    }
    
}

?>