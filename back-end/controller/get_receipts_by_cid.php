<?php
require_once("../library/classes/buyer.php");
require_once("../library/classes/receipt.php");
require_once("../library/classes/user.php");
require_once("../library/models/receiptTable.php");
require_once("../library/models/userTable.php");
require_once("../library/models/buyerTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$RT = new ReceiptTable();
$RT2 = new ReceiptTable();
$UT = new UserTable();
$BT = new BuyerTable();
$data = json_decode($_POST["data"]);
$idRecipient = $data->idRecipient;

$result = $BT->getBuyer($idRecipient);
if ($result) {
    $return = new APIresponse("Success");
    $return->data->buyerList = $BT->data;
    $return->data->$resultReceipt= $RT->data;
    $rsGetRe =  $RT->getReceipt("", "", $data->idRecipient);
    if($rsGetRe){
        $return->data->receipt = $RT->data;
        $resultReceiptLine = $RT2->getReceiptLine("", $idRecipient);
        if($resultReceiptLine){
            $return->data->receiptLine = $RT2->data;
        }
    }   
} else {
    $return = new APIresponse("Failure");
    $return->data->receiptArray = null;
}

echo json_encode($return);
?>