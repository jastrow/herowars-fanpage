<?php
namespace api;

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

function checkSession() {
    $bearerToken = getBearerToken();
    if(!$bearerToken) { return false; }
    $db = DB::getDB();
    $rs = $db->query('SELECT * FROM user WHERE php_session = "'.addslashes($bearerToken).'"');
    return !!$rs->num_rows;
}


?>