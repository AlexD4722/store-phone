<?php

require_once("../library/classes/product.php");
require_once("../library/models/productTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$PT = new ProductTable();
$data = json_decode($_POST["data"]);
$product_line_name = $data->productLine;
$PT->getProductLineList($product_line_name);
$product = new Product(null, $data->name, json_encode($data->description), $data->initalPrice, $data->sellingPrice, $data->quantity, $data->images, json_encode($data->color), json_encode($data->capacity), 1);
$product->product_line = $PT->data[0];
$result = $PT->addProduct($product);
if ($result) {
    $return = new APIresponse("Success");
    $return->data->result = "Success";
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);

?>