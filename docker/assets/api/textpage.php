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
    $res = $db->query('SELECT html FROM page WHERE name = "'.addslashes($page).'"');
    if(!$res->num_rows) { return ''; }
    $dat = $res->fetch_assoc();
    return $dat['html'];
}

// #################################################################################################
// Seitendaten holen GET
// #################################################################################################
if(isset($_GET['page'])) {
    echo json_encode(['name' => 'Abenteuer', 'html' => getPage($_GET['page'])]);

// #################################################################################################
// Seitendaten speichern POST
// #################################################################################################
} else if($_GET['save']) {
    $data = getJsonPayload();
    $res = $db->query('SELECT name FROM page WHERE name = "'.$data['name'].'"');
    if(!$res->num_rows) {
        $db->query('INSERT INTO page (name, html) VALUES ("'.$data['name'].'","'.$data['html'].'")');
    } else {
        $db->query('UPDATE page SET html = "'.$data['html'].'" WHERE name = "'.$data['name'].'"');
    }

    echo json_encode(['name' => 'Abenteuer', 'html' => getPage($data['name'])]);
}

?>