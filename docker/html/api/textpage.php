<?php
namespace api;
use api\DB;
use Exception;

require_once('apiConfig.php');
require_once('DB.php');
require_once('functions.php');

$db = DB::getDB();
setJsonHeader();

function getPage($page) {
    global $db;
    $res = $db->query('SELECT * FROM page WHERE name = "'.addslashes($page).'"');
    if(!$res->num_rows) { return ['name'=>$page, 'html'=>'Seite ist bisher nicht angelegt worden.']; }
    $dat = $res->fetch_assoc();
    return $dat;
}

// #################################################################################################
// Seitendaten holen GET
// #################################################################################################
if(isset($_GET['page'])) {
    echo json_encode(getPage($_GET['page']));

// #################################################################################################
// Seitendaten speichern POST
// #################################################################################################
} else if($_GET['save']) {
    $data = getJsonPayload();
    if(!in_array($data['name'], TEXTPAGE_WHITELIST)) { throw new Exception(); }
    $res = $db->query('SELECT name FROM page WHERE name = "'.$data['name'].'"');
    if(!$res->num_rows) {
        $db->query('INSERT INTO page (name, html) VALUES ("'.$data['name'].'","'.$data['html'].'")');
    } else {
        $db->query('UPDATE page SET html = "'.$data['html'].'" WHERE name = "'.$data['name'].'"');
    }
    echo json_encode(getPage($data['name']));
}

?>