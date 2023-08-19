<?php
require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")){
    die("<h1>404 not found</h1>");
}
$UT = new UserTable();
$data = json_decode($_POST["data"]);

$result = $UT->getUser('', '', '', $data->id);
if (count($UT->data) === 1){
    $user = new User($data->username, $UT->data->password, $data->email, $data->user_type, $data->wishlist, $data->cart);
    $result = $UT->editUser($data->id, $user);
    if ($result){
        $return = new APIresponse("Success");
    } else {
        $return = new APIresponse("Failed");
    }
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);
?>