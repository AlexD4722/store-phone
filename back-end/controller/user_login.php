<?php
require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")){
    die("<h1>404 not found</h1>");
}
$UT = new UserTable();
$data = json_decode($_POST["data"]);

$user = $data->username;
$pass = $data->password;
$result = $UT->getUser($user, $pass);
if ($result && count($UT->data) == 1){
    $return = new APIresponse("Success");
    $return->data->result = "Success";
    $return->data->userID = $UT->data[0]->id;
    $return->data->username = $UT->data[0]->username;
    $return->data->email = $UT->data[0]->email;
    $return->data->user_type = $UT->data[0]->user_type;
    $_SESSION["login_status"] = "OK";
    $_SESSION["user"] = $UT->data[0]->username;
} else if (!$result) {
    $return = new APIresponse("Failed");
} else {
    $return = new APIresponse("Success");
    $return->data->result = "Failed";
}

echo json_encode($return);
?>