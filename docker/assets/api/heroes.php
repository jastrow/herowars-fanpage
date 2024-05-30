<?php
namespace api;
use api\DB;
use Exception;

require_once('DB.php');

$db = DB::getDB();

function getJsonPayload() {
    $postData = file_get_contents('php://input');
    $data = json_decode($postData, true);
    return array_map(function($v) { return addslashes($v??''); }, $data);
}

header("Access-Control-Allow-Origin: " . (isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*'));
header("Access-Control-Allow-Methods: GET, POST, PUT");
header("Access-Control-Allow-Headers: content-type");
header('Content-Type: application/json; charset=utf-8');

if(isset($_GET['heronames'])) {
    $res = $db->query('SELECT name FROM hero ORDER BY name ASC');
    $response = [];
    while($row = $res->fetch_assoc()) {
        $response[] = $row['name'];
    }
    echo json_encode($response);
} else if (isset($_GET['heroByName'])) {
    $sql = 'SELECT * FROM hero WHERE name = "' . addslashes($_GET['heroByName']) . '" LIMIT 1';
    $res = $db->query($sql);
    $data = $res->fetch_assoc();
    if(!isset($_GET['edit'])) { $data['description'] = nl2br($data['description']); }
    echo json_encode($data);
} else if (isset($_GET['hero_id'])) {
    $data = getJsonPayload();
    if ($data['hero_id']) {
        $sql = 'SELECT * FROM hero WHERE hero_id = ' . (int)$data['hero_id'] . ' LIMIT 1';
        $res = $db->query($sql);
        if($res->num_rows) {
            $db->query('UPDATE hero SET
                name = "'.$data['name'].'",
                position = "'.$data['position'].'",
                tierlist = "'.$data['tierlist'].'",
                funktion = "'.$data['funktion'].'",
                description = "'.$data['description'].'",
                artefacts = "'.$data['artefacts'].'",
                glyphs = "'.$data['glyphs'].'",
                skins = "'.$data['skins'].'"
                WHERE hero_id = '.(int)$data['hero_id'].'
            ');
        }
        echo json_encode(['result' => 'ok']);
    } else {
        if(empty($data['name'])) {
            throw new Exception('no name');
        }
        $db->query('INSERT INTO hero (
            name,position,tierlist,funktion,description,artefacts,glyphs,skins
        ) VALUES (
            "'.$data['name'].'",
            "'.$data['position'].'",
            "'.$data['tierlist'].'",
            "'.$data['funktion'].'",
            "'.$data['description'].'",
            "'.$data['artefacts'].'",
            "'.$data['glyphs'].'",
            "'.$data['skins'].'"
        )');
        echo json_encode(['result' => 'ok']);
    }
} else if (isset($_GET['deletehero'])) {
    $rs = $db->query('DELETE FROM hero WHERE name = "'.addslashes($_GET['deletehero']).'"');
    $con = $db->getConnection();
    if (!$con->affected_rows || $con->error) {
        throw new Exception('not deleted');
    }
    echo json_encode(['result' => 'ok']);
} else if (isset($_GET['filtertier'])) {
    $filter = [];
    if(trim($_GET['filtertier']))  { $filter[] = 'tierlist = "'.addslashes(trim($_GET['filtertier'])).'"'; }
    if(trim($_GET['filterklasse']))  { 
        $filter[] = 'funktion LIKE "%'.trim(addslashes($_GET['filterklasse'])).'%"'; 
    }

    $setFilter = $filter ? ' WHERE '.implode(' AND ', $filter) : '';
    $sql = 'SELECT name FROM hero'.$setFilter.' ORDER BY name ASC';
    //echo $sql;
    //var_dump($sql); exit;
    $rs = $db->query($sql);
    $data = [];
    while($row = $rs->fetch_assoc()) {
        $data[] = $row['name'];
    }
    echo json_encode($data);
}

?>