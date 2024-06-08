<?php
namespace api;
use api\DB;
use Exception;

require_once('functions.php');
require_once('DB.php');

setJsonHeader();


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
            UPDATE user SET 
                php_session = "'.session_id().'",
                stamp = NOW()
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
    $token = getBearerToken();
    if(!$token) { throw new Exception(AUTH_INVALID_ERROR_MSG); }
    $response = ['sessionId' => null, 'errorMsg' => null];
    $db = DB::getDB();
    if ($db->query('
        UPDATE user SET 
            php_session = NULL, 
        WHERE php_session = "'.addslashes($token).'"
    ')) {
        $response['sessionId'] = null;
        $response['errorMsg'] = null;
    } else {
        $response['sessionId'] = $token;
        $response['errorMsg'] = 'Error on Logout';
    }
    echo json_encode($response);
    exit;
}

if(isset($_GET['recover'])) {
    $db = DB::getDB();
    $email = addslashes($_GET['recover']);
    $rs = $db->query('
        SELECT email FROM user WHERE email = "'.$email.'"
    ');
    if(!$rs->num_rows) {
        echo json_encode(['status' => 'no email']); exit;
    }
    $pass = passGen();
    $db->query('
        UPDATE user SET token = "'.$pass.'" 
        WHERE email = "'.addslashes($email).'"
    ');

    if(!mail(
        $email,
        'Gluecksritter Kennwort',
        'Ihr Token zum Ändern Ihres Kennwortes
         für die Gluecksritter Fanpage: 
         "'.$pass.'"'
    )) {
        echo json_encode(['status' => 'cant send']); exit;
    }
    echo json_encode(['status' => 'ok']); exit;
}

if(isset($_GET['changepassword']) && isset($_GET['token'])) {
    $db = DB::getDB();
    $db->query('
        UPDATE user 
        SET pass = MD5("'.addslashes($_GET['changepassword']).'"),
            token = NULL
        WHERE token = "'.addslashes($_GET['token']).'"');
    if(!$db->affectedRows()) { echo json_encode(['status' => 'not changed']); exit; }
    echo json_encode(['status' => 'ok']); exit;
}


//var_dump($_POST);
//var_dump($_GET);
echo 'test OK';
//header("HTTP/1.1 400 Bad Request");

?>