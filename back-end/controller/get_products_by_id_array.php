<?php
require_once("../library/classes/product.php");
require_once("../library/models/productTable.php");

if (!isset($auth) || ($auth != "TRESPASSING NOT ALLOWED")) {
    die("<h1>404 not found</h1>");
}
$PT = new ProductTable();
$data = json_decode($_POST["data"]);

$productArray = [];
if (count($data) > 0) {
    foreach ($data as $id) {
        $result = $PT->getProductById($id);
        $product = $PT->data;
        array_push($productArray, $product);
    }
} else {
    $result = true;
}

if ($result) {
    $return = new APIresponse("Success");
    $return->data->productArray = $productArray;
} else {
    $return = new APIresponse("Failed");
}
echo json_encode($return);
?>