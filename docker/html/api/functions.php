<?php
namespace api;
use Exception;

require_once('apiConfig.php');

function getJsonPayload() {
    $postData = file_get_contents('php://input');
    $data = json_decode($postData, true);
    return walkRec($data);
}

function walkRec($arr) {
    return array_map(function($v) {
        if(is_array($v)) {
            return walkRec($v);
        }
        if(is_string($v)) { return addslashes($v??''); }
    }, $arr);
}

function setJsonHeader() {
    header("Access-Control-Allow-Origin: " . (isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*'));
    header("Access-Control-Allow-Methods: GET, POST, PUT");
    header("Access-Control-Allow-Headers: content-type");
    header('Content-Type: application/json; charset=utf-8');
}

function getBearerToken() {
    $headers = null;
    if (function_exists('getallheaders')) {
        $headers = getallheaders();
    } else {
        $headers = [];
        foreach ($_SERVER as $name => $value) {
            if (substr($name, 0, 5) == 'HTTP_') {
                $name = str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))));
                $headers[$name] = $value;
            }
        }
    }
    if (isset($headers['Authorization'])) {
        $matches = [];
        if (preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) {
            return $matches[1];
        }
    }
    return null;
}


function send401Unauthorized() {
    header('HTTP/1.1 401 Unauthorized');
    header('WWW-Authenticate: Bearer realm="Access to the staging site"');
    echo json_encode(['error' => AUTH_INVALID_ERROR_MSG]);
    exit();
}

/**
 * Prüft gültigkeit des Bearer/Auth Token.
 * @throws Exception if auth is invalid
 * @return void
 */
function checkSession() {
    $bearerToken = getBearerToken();
    if(!$bearerToken) { send401Unauthorized(); }

    $db = DB::getDB();
    $rs = $db->query('SELECT * FROM user WHERE php_session = "'.addslashes($bearerToken).'"');
    if(!$rs->num_rows) { send401Unauthorized(); }
    $dat = $rs->fetch_assoc();

    $now = explode('-', date('H-i-s-m-d-Y'));
    $nowStamp = mktime($now[0],$now[1],$now[2],$now[3],$now[4],$now[5]);
    $login = preg_split('/[ :-]/', $dat['stamp']);
    $loginStamp = mktime(
        $login[3] + AUTH_TOKEN_VALID_HOUR,
        $login[4] + AUTH_TOKEN_VALID_MINUTE,
        $login[5] + AUTH_TOKEN_VALID_SECOND,
        $login[1] + AUTH_TOKEN_VALID_MONTH,
        $login[2] + AUTH_TOKEN_VALID_DAY,
        $login[0] + AUTH_TOKEN_VALID_YEAR
    );
    if($nowStamp > $loginStamp) { send401Unauthorized(); }
}

function passGen($signs = 8) {
    $pass = '';
    $alphabet = "abcdefghjkmnpqrstuwxyzABCDEFGHJKMNPQRSTUWXYZ123456789";
    for ($i = 0; $i < $signs; $i++) {
        $n = rand(0, strlen($alphabet)-1);
        $pass .= $alphabet[$n];
    }
    return $pass;
}

?>