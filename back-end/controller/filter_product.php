<?php
require_once("../library/classes/product.php");
require_once("../library/models/productTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$data = json_decode($_POST["data"]);
$name = $data->name_product;
$PT = new ProductTable();
$result = $PT->getProductList($name);

if ($result) {
    $return = new APIresponse("Success");
    $return->data->result = "Found";
    $return->data->productArray = $PT->data;
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);
?>