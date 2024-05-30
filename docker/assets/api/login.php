<?php
namespace api;
use api\DB;
require_once('DB.php');

// CORS
header("Access-Control-Allow-Origin: " . (isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*'));
header("Access-Control-Allow-Methods: GET, POST, PUT");
header("Access-Control-Allow-Headers: content-type");
// JSON Response
header('Content-Type: application/json; charset=utf-8');

if (isset($_POST['email']) && isset($_POST['pass'])) {
    $response = ['sessionId' => null, 'errorMsg' => null];
    $db = DB::getDB();
    $result = $db->query('
        SELECT * FROM user 
        WHERE email = "'.addslashes($_POST['email']).'" 
        AND pass = MD5("'.addslashes($_POST['pass']).'")
    ');

    if($result->num_rows) {
        session_start();
        $db->query('
            UPDATE user SET php_session = "'.session_id().'" 
            WHERE email = "'.addslashes($_POST['email']).'"
        ');
        $response['sessionId'] = session_id();
    } else {
        $response['errorMsg'] = 'Email and/or Password incorrect';
    }

    echo json_encode($response);
    exit;
}

if (isset($_GET['logout'])) {
    $response = ['sessionId' => null, 'errorMsg' => null];
    $db = DB::getDB();
    if ($db->query('
        UPDATE user SET php_session = NULL WHERE php_session = "'.addslashes($_GET['logout']).'"
    ')) {
        $response['sessionId'] = null;
        $response['errorMsg'] = null;
    } else {
        $response['sessionId'] = $_GET['logout'];
        $response['errorMsg'] = 'Error on Logout';
    }
    echo json_encode($response);
    exit;
}

//var_dump($_POST);
//var_dump($_GET);
echo 'test OK';
//header("HTTP/1.1 400 Bad Request");

?>