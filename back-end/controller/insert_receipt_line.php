<?php
require_once("../library/classes/receipt.php");
require_once("../library/models/receiptTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$data = json_decode($_POST["data"]);
$receipt = new ReceiptLine($data->product_id, $data->quantity, $data->color, $data->receipt_id);
$RT = new ReceiptTable();
$result = $RT->addReceiptLine($receipt);
if ($result) {
    $return = new APIresponse("Success");
} else {
    $return = new APIresponse("Failure");
}

echo json_encode($return);

?>