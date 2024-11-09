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
// Heldennamen alle GET
// #################################################################################################
if(isset($_GET['heronames'])) {
    $res = $db->query('SELECT name FROM hero ORDER BY name ASC');
    $response = [];
    while($row = $res->fetch_assoc()) {
        $response[] = $row['name'];
    }
    echo json_encode($response);

// #################################################################################################
// Held per Name GET
// #################################################################################################
} else if (isset($_GET['heroByName'])) {
    $sql = 'SELECT * FROM hero WHERE name = "' . addslashes($_GET['heroByName']) . '" LIMIT 1';
    $res = $db->query($sql);
    $data = null;
    if($res->num_rows) {
        $data = $res->fetch_assoc();
        if(!isset($_GET['edit'])) { $data['description'] = nl2br($data['description']); }
    }
    echo json_encode($data);

// #################################################################################################
// Held edit/new POST
// #################################################################################################
} else if (isset($_GET['hero_id'])) {
    checkSession();
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

// #################################################################################################
// Held löschen GET
// #################################################################################################
} else if (isset($_GET['deletehero'])) {
    checkSession();
    $rs = $db->query('DELETE FROM hero WHERE name = "'.addslashes($_GET['deletehero']).'"');
    $con = $db->getConnection();
    if (!$con->affected_rows || $con->error) {
        throw new Exception('not deleted');
    }
    echo json_encode(['result' => 'ok']);

// #################################################################################################
// Helden Liste Filter GET
// #################################################################################################
} else if (isset($_GET['filtertier'])) {
    $filter = [];
    if(trim($_GET['filtertier']))  { $filter[] = 'tierlist = "'.addslashes(trim($_GET['filtertier'])).'"'; }
    if(trim($_GET['filterklasse']))  { 
        $filter[] = 'funktion LIKE "%'.trim(addslashes($_GET['filterklasse'])).'%"'; 
    }

    $setFilter = $filter ? ' WHERE '.implode(' AND ', $filter) : '';
    $sql = 'SELECT name FROM hero'.$setFilter.' ORDER BY name ASC';
    $rs = $db->query($sql);
    $data = [];
    while($row = $rs->fetch_assoc()) {
        $data[] = $row['name'];
    }
    echo json_encode($data);

// #################################################################################################
// Helden Team Liste GET
// #################################################################################################
} else if (isset($_GET['teams'])) {
    $rs = $db->query('
        SELECT
            hero_team.hero_team_id,
            hero_team.name AS tname,
            hero_team.description,
            hero_team.pet_name as pet,
            hero.name,
            hero_team_hero.pet_name
        FROM hero_team
        JOIN hero_team_hero USING (hero_team_id)
        LEFT JOIN hero USING (hero_id)
        ORDER BY hero_team.name ASC
    ');
    $data = [];
    while($row = $rs->fetch_assoc()) {
        if(isset($data[$row['hero_team_id']])) {
            $data[$row['hero_team_id']]['heroes'][] = $row['name'];
            $data[$row['hero_team_id']]['pets'][] = $row['pet_name'];
        } else {
            $data[$row['hero_team_id']] = [
                'id' => $row['hero_team_id'],
                'name' => $row['tname'] ? $row['tname'] : 'kein Name',
                'pet' => $row['pet'],
                'description' => $row['description'],
                'heroes' => [$row['name']],
                'pets' => [$row['pet_name']],
            ];
        }
    }
    echo json_encode(array_values($data));

// #################################################################################################
// Helden Team GET
// #################################################################################################
} else if (isset($_GET['team'])) {
    $rs = $db->query('
        SELECT
            hero_team.hero_team_id,
            hero_team.pet_name as pet,
            hero_team.name,
            hero_team.description,
            hero.name as hname,
            hero_team_hero.pet_name
        FROM hero_team
        JOIN hero_team_hero USING (hero_team_id)
        JOIN hero USING (hero_id)
        WHERE hero_team.hero_team_id = '.(int)$_GET['team'].'
    ');
    $data = [];
    while($row = $rs->fetch_assoc()) {
        if(!$data) {
            $data['heroes'] = [$row['hname']];
            $data['pets'] = [$row['pet_name']];
            $data['id'] = $row['hero_team_id'];
            $data['name'] = $row['name'];
            $data['pet'] = $row['pet'];
            $data['description'] = $row['description'];
        } else {
            $data['heroes'][] = $row['hname'];
            $data['pets'][] = $row['pet_name'];
        }
    }
    echo json_encode($data);

// #################################################################################################
// Helden Team edit/new POST
// #################################################################################################
} else if (isset($_GET['saveteam'])) {
    checkSession();
    $data = getJsonPayload();
    $data['id'] = (int)$data['id'];
    if(!is_array($data['heroes']) || !count($data['heroes'])) {
        throw new Exception('no heroes');
    }
    $setId = null;
    if($data['id']) {
        $db->query('UPDATE hero_team SET
            name = "'.$data['name'].'",
            description = "'.$data['description'].'",
            pet_name = "'.$data['pet'].'"
            WHERE hero_team_id = '.$data['id'].'
        ');
        if (($db->getConnection())->error) {
            throw new Exception('not deleted');
        }
        $db->query('DELETE FROM hero_team_hero WHERE hero_team_id = '.$data['id']);
        $setId = $data['id'];
    } else {
        $db->query('INSERT INTO hero_team (name,description,pet_name) VALUES (
            "'.$data['name'].'", "'.$data['description'].'", "'.$data['pet'].'"
        )');
        $setId = $db->insertId();
    }

    if($setId) {
        $inserts = [];
        foreach($data['heroes'] as $i => $h) {
            $inserts[] = '('.$setId.', (SELECT hero_id FROM hero WHERE name = "'.$h.'"), "'.$data['pets'][$i].'")';
        }
        $sql = '
            INSERT INTO hero_team_hero (hero_team_id, hero_id, pet_name) VALUES
            '.implode(',', $inserts);
        $db->query($sql);
    } else {
        throw new Exception('not saved');
    }
    echo json_encode($data);

// #################################################################################################
// Helden Team löschen GET
// #################################################################################################
} else if (isset($_GET['deleteteam'])) {
    checkSession();
    $rs = $db->query('DELETE FROM hero_team WHERE hero_team_id = '.(int)$_GET['deleteteam']);
    $con = $db->getConnection();
    if (!$con->affected_rows || $con->error) {
        throw new Exception('not deleted');
    }
    echo json_encode(['result' => 'ok']);
}

?>