<?php
$params = [];
foreach ($_GET as $param) {
    if ($param == "Send" || $param=="") {
        continue;
    }
    array_push($params, $param);
}

echo count($params);

require_once("../class/database.php");
require_once("../class/constants.php");

$database = new Database($DatabaseServerName, "project", $Username, $Password);
?>