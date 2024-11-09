<?php

namespace api;
use api\DB;
use Exception;

require_once('apiConfig.php');
require_once('DB.php');
require_once('functions.php');

$db = DB::getDB();
setJsonHeader();


// #################################################################################################
// Titanennamen alle GET
// #################################################################################################
if(isset($_GET['titannames'])) {
    $res = $db->query('SELECT name FROM titan ORDER BY name ASC');
    $response = [];
    while($row = $res->fetch_assoc()) {
        $response[] = $row['name'];
    }
    echo json_encode($response);

// #################################################################################################
// Titan per Name GET
// #################################################################################################
} else if (isset($_GET['titanByName'])) {
    $sql = 'SELECT * FROM titan WHERE name = "' . addslashes($_GET['titanByName']) . '" LIMIT 1';
    $res = $db->query($sql);
    $data = null;
    if($res->num_rows) {
        $data = $res->fetch_assoc();
        if(!isset($_GET['edit'])) { $data['description'] = nl2br($data['description']); }
    }
    echo json_encode($data);

// #################################################################################################
// Titan edit/new POST
// #################################################################################################
} else if (isset($_GET['titan_id'])) {
    checkSession();
    $data = getJsonPayload();
    if ($data['titan_id']) {
        $sql = 'SELECT * FROM titan WHERE titan_id = ' . (int)$data['titan_id'] . ' LIMIT 1';
        $res = $db->query($sql);
        if($res->num_rows) {
            $db->query('UPDATE titan SET
                name = "'.$data['name'].'",
                position = "'.$data['position'].'",
                tierlist = "'.$data['tierlist'].'",
                funktion = "'.$data['funktion'].'",
                description = "'.$data['description'].'"
                WHERE titan_id = '.(int)$data['titan_id'].'
            ');
        }
        echo json_encode(['result' => 'ok']);
    } else {
        if(empty($data['name'])) {
            throw new Exception('no name');
        }
        $db->query('INSERT INTO titan (
            name, position, tierlist, funktion, description
        ) VALUES (
            "'.$data['name'].'",
            "'.$data['position'].'",
            "'.$data['tierlist'].'",
            "'.$data['funktion'].'",
            "'.$data['description'].'"
        )');
        echo json_encode(['result' => 'ok']);
    }

// #################################################################################################
// Titan löschen GET
// #################################################################################################
} else if (isset($_GET['deletetitan'])) {
    checkSession();
    $rs = $db->query('DELETE FROM titan WHERE name = "'.addslashes($_GET['deletetitan']).'"');
    $con = $db->getConnection();
    if (!$con->affected_rows || $con->error) {
        throw new Exception('not deleted');
    }
    echo json_encode(['result' => 'ok']);

// #################################################################################################
// Titanen Liste Filter GET
// #################################################################################################
} else if (isset($_GET['filtertier'])) {
    $filter = [];
    if(trim($_GET['filtertier']))  { $filter[] = 'tierlist = "'.addslashes(trim($_GET['filtertier'])).'"'; }
    if(trim($_GET['filterklasse']))  { 
        $filter[] = 'funktion LIKE "%'.trim(addslashes($_GET['filterklasse'])).'%"'; 
    }

    $setFilter = $filter ? ' WHERE '.implode(' AND ', $filter) : '';
    $sql = 'SELECT name FROM titan'.$setFilter.' ORDER BY name ASC';
    $rs = $db->query($sql);
    $data = [];
    while($row = $rs->fetch_assoc()) {
        $data[] = $row['name'];
    }
    echo json_encode($data);

// #################################################################################################
// Titanen Team Liste GET
// #################################################################################################
} else if (isset($_GET['teams'])) {
    $rs = $db->query('
        SELECT
            titan_team.titan_team_id,
            titan_team.name AS tname,
            titan_team.description,
            titan.name
        FROM titan_team
        JOIN titan_team_titan USING (titan_team_id)
        JOIN titan USING (titan_id)
        ORDER BY titan_team.titan_team_id ASC, titan.name ASC
    ');
    $data = [];
    while($row = $rs->fetch_assoc()) {
        if(isset($data[$row['titan_team_id']])) {
            $data[$row['titan_team_id']]['titans'][] = $row['name'];
        } else {
            $data[$row['titan_team_id']] = [
                'id' => $row['titan_team_id'],
                'name' => $row['tname'] ? $row['tname'] : 'kein Name',
                'description' => $row['description'],
                'titans' => [$row['name']]
            ];
        }
    }
    echo json_encode(array_values($data));

// #################################################################################################
// Titanen Team GET
// #################################################################################################
} else if (isset($_GET['team'])) {
    $rs = $db->query('
        SELECT
            titan_team.titan_team_id,
            titan_team.name,
            titan_team.description,
            titan.name as hname
        FROM titan_team
        JOIN titan_team_titan USING (titan_team_id)
        JOIN titan USING (titan_id)
        WHERE titan_team.titan_team_id = '.(int)$_GET['team'].'
        ORDER BY titan_team.titan_team_id ASC, titan.name ASC
    ');
    $data = [];
    while($row = $rs->fetch_assoc()) {
        if(!$data) {
            $data['titans'] = [$row['hname']];
            $data['id'] = $row['titan_team_id'];
            $data['name'] = $row['name'];
            $data['description'] = $row['description'];
        } else {
            $data['titans'][] = $row['hname'];
        }
    }
    echo json_encode($data);

// #################################################################################################
// Titanen Team edit/new POST
// #################################################################################################
} else if (isset($_GET['saveteam'])) {
    checkSession();
    $data = getJsonPayload();
    $data['id'] = (int)$data['id'];
    if(!is_array($data['titans']) || !count($data['titans'])) {
        throw new Exception('no titans');
    }
    $setId = null;
    if($data['id']) {
        $db->query('UPDATE titan_team SET
            name = "'.$data['name'].'",
            description = "'.$data['description'].'"
            WHERE titan_team_id = '.$data['id'].'
        ');
        if (($db->getConnection())->error) {
            throw new Exception('not deleted');
        }
        $db->query('DELETE FROM titan_team_titan WHERE titan_team_id = '.$data['id']);
        $setId = $data['id'];
    } else {

        $db->query('INSERT INTO titan_team (name,description) VALUES (
            "'.$data['name'].'", "'.$data['description'].'"
        )');
        $setId = $db->insertId();
    }

    if($setId) {
        $names = implode(',', array_map(
            function($h) { return '"'.$h.'"'; }, 
            $data['titans']
        ));
        $sql = '
            INSERT INTO titan_team_titan (titan_team_id, titan_id)
            SELECT '.$setId.', titan_id FROM titan WHERE name IN ('.$names.')
        ';
        $db->query($sql);
    } else {
        throw new Exception('not saved');
    }
    echo json_encode($data);

// #################################################################################################
// Titanen Team löschen GET
// #################################################################################################
} else if (isset($_GET['deleteteam'])) {
    checkSession();
    $rs = $db->query('DELETE FROM titan_team WHERE titan_team_id = '.(int)$_GET['deleteteam']);
    $con = $db->getConnection();
    if (!$con->affected_rows || $con->error) {
        throw new Exception('not deleted');
    }
    echo json_encode(['result' => 'ok']);
}

?>