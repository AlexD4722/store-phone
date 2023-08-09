<?php
if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}

require_once("../library/classes/user.php");
require_once("../library/models/userTable.php");

$UT = new UserTable();
$data = json_decode($_POST["data"]);

$user = $UT->test_input($data->username);
$pass = $UT->test_input($data->password);
$email = $UT->test_input($data->email);

$result = $UT->checkUser($user);
if (!$result) {
    $response = new APIresponse("Failed");
} else if (count($UT->data) > 0) {
    $response = new APIresponse("Success");
    $response->data->error = "Username existed";
} else {
    $user = new User($user, $pass, $email, "customer");
    $UT->insertUser($user);
    $response = new APIresponse("Success");
    $response->data->result = "Success";
}

echo json_encode($response);
?>