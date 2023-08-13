<?php
session_start();
error_reporting(E_ERROR | E_PARSE);
header("Access-Control-Allow-Origin: http://localhost:3000");
require_once("../library/classes/api_response.php");
if (!isset($_POST["action"])) {
    $return = new APIresponse("No action received");
    echo json_encode($return);
    die;
}

require_once("../library/classes/constants.php");
require_once("../library/models/database.php");

$action = $_POST["action"];
$auth = "TRESPASSING NOT ALLOWED";

switch ($action) {
    case GET_ALL_PRODUCTS:
        require("../controller/get_all_products.php");
        break;
    case GET_5_PRODUCTS_BY_NAME:
        require("../controller/get_5_products.php");
        break;
    case SEARCH_PRODUCTS_BY_NAME:
        require("../controller/search_products_by_name.php");
        break;
    case GET_RECEIPTS_BY_CID:
        require("../controller/get_receipts_by_cid.php");
        break;
    case DONE_RECEIPT:
        require("../controller/done_receipt.php");
        break;
    case INSERT_RECEIPT:
        require("../controller/insert_receipt.php");
        break;
    case USER_LOGIN:
        require("../controller/user_login.php");
        break;
    case USER_LOGOUT:
        require("../controller/user_logout.php");
        break;
    case USER_SIGNUP:
        require("../controller/signup.php");
        break;
    case ADD_NEW_PRODUCT:
        require("../controller/add_new_product.php");
        break;
    case ADD_NEW_PRODUCT_LINE:
        require("../controller/add_new_product_line.php");
        break;
    case GET_ALL_PRODUCT_LINE:
        require("../controller/get_all_product_line.php");
        break;
    case FIlTER_PRODUCT:
        require("../controller/filter_product.php");
        break;
    default:
        $return = new APIresponse("Action invalid");
        echo json_encode($return);
        break;
}
?>