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

?>