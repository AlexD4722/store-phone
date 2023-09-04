<?php
require_once("../library/classes/buyer.php");
require_once("../library/models/buyerTable.php");
require_once("../library/classes/receipt.php");
require_once("../library/models/receiptTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$BT = new BuyerTable();
$data = json_decode($_POST["data"]);
$buyer = new Buyer($data->buyer->id, $data->buyer->id_account, $data->buyer->name, $data->buyer->phone, $data->buyer->address);
$result = $BT->insertBuyer($buyer);
if ($result) {
    $return = new APIresponse("Success");
} else {
    $return = new APIresponse("Failure");
}


echo json_encode($return);
?>