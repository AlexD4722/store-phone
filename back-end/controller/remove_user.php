<?php

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}

require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");

$UT = new UserTable();
$data = json_decode($_POST["data"]);

$id = (int) $data->id;

$UT->getUser("", "", "", "", $id);
$username_exist = count($UT->data) === 1;
$username_not_removed = $UT->data[0]->user_type != "removed";

if ((!$username_exist) && $username_not_removed) {
    $return = new APIresponse("Success");
    $return->data->result = "Failed";
} else {
    $result = $UT->deleteUser($id);
    if ($result) {
        $return = new APIresponse("Success");
        $return->data->result = "Success";
    } else {
        $return = new APIresponse("Failed");
    }
}

echo json_encode($return);

?>