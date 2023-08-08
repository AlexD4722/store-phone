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
if (count($UT->data) == 1){
    $return = new APIresponse("Success");
    $return->data->userID = $UT->data[0]->user;
    $_SESSION["login_status"] = "OK";
    $_SESSION["userLogin"] = $user;
} else {
    $return = new APIresponse("Failure");
}

echo json_encode($return);
?>