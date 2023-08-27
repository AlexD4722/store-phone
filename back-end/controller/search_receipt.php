<?php
require_once("../library/classes/receipt.php");
require_once("../library/models/receiptTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")){
    die("<h1>404 not found</h1>");
}

$RT = new ReceiptTable();
$data = json_decode($_POST["data"]);
$receipt_id = $data->order_id;
$customer_id = $data->customer_id;
if ($data->date){
    $date = strtotime($data->date);
}
$status = $data->status;

$result = $RT->getReceipt($receipt_id, $date, $customer_id, $status);
if ($result){
    $return = new APIresponse("Success");
    $return->data->receipt_array = $RT->data;
    if (count($return->data->receipt_array) > 0){
        $return->data->result = "Success";
        foreach ($return->data->receipt_array as $receipt){
            $RT->getReceiptLine("", $receipt->id);
            $receipt->addLinesArray($RT->data);
        }
    }
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);
?>