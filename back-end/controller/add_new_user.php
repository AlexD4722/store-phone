<?php

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}

require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");

$UT = new UserTable();
$data = json_decode($_POST["data"]);

$username = $UT->test_input($data->username);
$password = $UT->test_input($data->password);
$email = $UT->test_input($data->email);
$phone = $UT->test_input($data->phone);
$address = $UT->test_input($data->address);
$user_type = $UT->test_input($data->user_type);

if ($UT->getUser($username) || $UT->getUser("", "", "", $email)) {
    $return = new APIresponse("Success");
    $return->data->result = "Failed";
} else {
    $user = new User($username, $password, $email, $phone, $address, $user_type);
    $result = $UT->insertUser($user);
    if ($result) {
        $return = new APIresponse("Success");
        $return->data->result = "Success";
    } else {
        $return = new APIresponse("Failed");
    }
}

echo json_encode($return);

?>