<?php
    if (isset($_SERVER['HTTP_ORIGIN'])) { header("Access-Control-Allow-Origin: ".$_SERVER['HTTP_ORIGIN']); }
    header("Access-Control-Allow-Methods: GET, POST, PUT");
    header("Access-Control-Allow-Headers: content-type");

    //$pdo = new PDO("mysql:host=localhost;dbname=hw;port=3306", 'hw123', 'hw123');
    //$pdo = new PDO("mysql:unix_socket=/var/lib/mysql/mysql.sock;dbname=hw;port=3306", 'hw123', 'hw123');
    // Statt host -> unix_socket=/var/lib/mysql/mysql.sock /var/lib/mysql/mysql.sock -> /var/run/mysqld/mysqld.sock

    $conn = mysqli_connect('db', 'hw123', 'hw123', 'hw');

    //var_dump($_POST);
    //var_dump($_GET);

    if (isset($_POST['email']) && isset($_POST['pass'])) {
        $sessionId = null;
        $errorMsg = null;

        $result = mysqli_query($conn, '
            SELECT * FROM user 
            WHERE email = "'.addslashes($_POST['email']).'" 
            AND pass = MD5("'.addslashes($_POST['pass']).'")
        ');
        if($result->num_rows) {
            session_start();
            mysqli_query($conn, '
                UPDATE user SET php_session = "'.session_id().'" 
                WHERE email = "'.addslashes($_POST['email']).'"
            ');
            $sessionId = session_id();
        } else {
            $errorMsg = 'Email and/or Password incorrect';
        }

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['sessionId' => $sessionId, 'errorMsg' => $errorMsg]);
    } else {
        echo 'test OK';
        //header("HTTP/1.1 400 Bad Request");
    }

?>