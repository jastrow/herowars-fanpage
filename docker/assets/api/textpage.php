<?php
namespace api;
use api\DB;
use Exception;

require_once('apiConfig.php');
require_once('DB.php');
require_once('functions.php');

$db = DB::getDB();
setJsonHeader();

function getPage($page, $lang = 'de') {
    global $db;
    $res = $db->query('SELECT name,html FROM page WHERE name = "'.addslashes($page).'" AND lang = "'.$lang.'"');
    if(!$res->num_rows) { return ['name'=>$page, 'html'=>'Seite ist bisher nicht angelegt worden.']; }
    $dat = $res->fetch_assoc();
    return $dat;
}

// #################################################################################################
// Seitendaten holen GET
// #################################################################################################
if(isset($_GET['page'])) {
    echo json_encode(getPage($_GET['page'], $_GET['lang']));

// #################################################################################################
// Seitendaten speichern POST
// #################################################################################################
} else if($_GET['save']) {
    $data = getJsonPayload();
    $lang = isset($data['lang']) && in_array($data['lang'], ['en','de']) ? $data['lang'] : 'de';
    if(!in_array($data['name'], TEXTPAGE_WHITELIST)) { throw new Exception(); }
    $res = $db->query('SELECT name FROM page WHERE name = "'.$data['name'].'" AND lang = "'.$lang.'"');
    if(!$res->num_rows) {
        $db->query('INSERT INTO page (name, html, lang) VALUES ("'.$data['name'].'","'.$data['html'].'","'.$lang.'")');
    } else {
        $db->query('UPDATE page SET html = "'.$data['html'].'" WHERE name = "'.$data['name'].'" AND lang = "'.$lang.'"');
    }
    echo json_encode(getPage($data['name'], $lang));
}

?>