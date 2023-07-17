<?php
$params = [];
foreach ($_GET as $param) {
    if ($param == "Send" || $param == "") {
        continue;
    }
    array_push($params, $param);
}

require_once("order.php");
$obj = new Receipt();
$obj->getReceipt('','', '','finished');
foreach ($obj->data as $row) {
    echo $row["customer_id"] . $row["date"] . $row["status"] . "<br>";
}
?>