<?php

require_once("../library/classes/product.php");
require_once("../library/models/productTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$PT = new ProductTable();
$data = json_decode($_POST["data"]);
$id = $data->id;
$product = new Product($id, $data->product->name, $data->product->description, $data->product->initalPrice, $data->product->sellingPrice, $data->product->quantity, $data->product->images, $data->product->color, $data->product->capacity, $data->product->status);
$product->product_line = new ProductLine($data->product->productLine->name, $data->product->productLine->brand, $data->product->productLine->product_type);

$result = $PT->editProduct($id, $product);
if ($result) {
    $return = new APIresponse("Success");
    $return->data->result = "Success";
} else {
    $return = new APIresponse("Failed");
}

echo json_encode($return);

?>