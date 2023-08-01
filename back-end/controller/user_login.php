<?php
require_once("../library/classes/user.php");
require_once("../library/classes/userTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")){
    die("<h1>404 not found</h1>");
}
$UT = new UserTable();
$data = json_decode($_POST["data"]);

$user = $data->username;
$pass = $data->password;
$result = $UT->getUser($user, $pass);
if ($result){
    $return = new APIresponse("Success");
    $_SESSION["login_status"] = "OK";
    $_SESSION["userLogin"] = $user;
} else {
    $return = new APIresponse("Failure");
}

echo json_encode($return);
?>