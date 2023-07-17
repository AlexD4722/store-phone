<?php
require_once("../class/constants.php");
require_once("../class/database.php");
class ManageProduct
{
    public $dbObj;
    public $data;
    function __construct()
    {
        $this->dbObj = new Database($GLOBALS("DatabaseServerName"), $GLOBALS("database"), $GLOBALS("Username"), $GLOBALS("Password"));
    }
    // conditions to search
    // type
    // brand
    // price 
    function getListData($product_type='', $brand = '')
    {   
        $data = [];
        $sql = "SELECT * FROM product JOIN  product_line on product.product_line = product_line.name WHERE TRUE";
        if($product_type){
            $sql .= " AND `product_type` = ?";
            array_push($data, $product_type);
            $sql .= " AND `brand` = ?";
            array_push($data, $product_type);
        }
        if($brand){
            $sql .= "AND `brand` = ?";
            array_push($data, $product_type);
        }
        $this->data = NULL;
        $resullt = $this->dbObj->SQLexec($sql);
        if ($resullt == false) {
            return false;
        } else {
            $this->data = $this->dbObj->pdo_stm->fetchAll();
            return true;
        }
    }
    // function getListData() is used to get all data list of product 
    // parameters: $product_type='', $brand = ''
    // return: boolean
    // function searchData($name ='', $properties = '')
    // {   
    //     $data = [];
    //     $sql = "SELECT * FROM product JOIN  product_line on product.product_line = product_line.name WHERE TRUE ";
    //     if($product_type){
    //         $sql .= "AND `product_type` = ?";
    //         array_push($data, $product_type);
    //     }
    //     if($brand){
    //         $sql .= "AND `brand` = ?";
    //         array_push($data, $product_type);
    //     }
    //     $this->data = NULL;
    //     $resullt = $this->dbObj->SQLexec($sql);
    //     if ($resullt == false) {
    //         return false;
    //     } else {
    //         $this->data = $this->dbObj->pdo_stm->fetchAll();
    //         return true;
    //     }
    // }
    // // function getListData() is used to get all data list of product 
    // // parameters: $product_type='', $brand = ''
    // // return: boolean

    function addData(
        $id,
        $name,
        $description,
        $inital_price,
        $selling_price,
        $product_line,
        $images,
        $quantity
    ) {
        $sql = "INSERT INTO `product`(`id`, `name`, `description`, `inital_price`, `selling_price`, `product_line`, `images`, `quantity`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)";
        $data = [
            $id,
            $name,
            $description,
            $inital_price,
            $selling_price,
            $product_line,
            $images,
            $quantity
        ];
        $result = $this->dbObj->SQLexec($sql, $data);
        return $result;
    }
    // function addData() is used to insert a data into the list Product 
    // parameters: $id, $name, $description, $inital_price, selling_price, $product_line, $images, $quantity
    // return: boolean

    function removeData($id)
    {
        $sql = "DELETE FROM product WHERE id=?";
        $data = [$id];
        $result = $this->dbObj->SQLexec($sql, $data);
        return $result;
    }
    // function removeData() is used to delete a data from the list Product 
    // parameters: $id
    // return: boolean

    function editData(
        $id,
        $name,
        $description,
        $inital_price,
        $selling_price,
        $product_line,
        $images,
        $quantity,
        $id_old
    ) {
        $sql = "UPDATE `product` SET `id`= ?, `name`= ?,`description`= ?,`inital_price`= ?,`selling_price`= ?,`product_line`= ?,`images`= ?,`quantity`= ? WHERE `id` = ?";

        $data = [
            $id,
            $name,
            $description,
            $inital_price,
            $selling_price,
            $product_line,
            $images,
            $quantity,
            $id_old
        ];
        $result = $this->dbObj->SQLexec($sql, $data);
        return $result;
    }
    // function editData() is used to update a data from the list Product 
    // parameters: $id, $name, $description, $inital_price, selling_price, $product_line, $images, $quantity, id_old
    // return: boolean

    // function searchData($title)
    // {
    //     $sql = "SELECT * FROM `product` WHERE TRUE ";
    //     $data = [$title];
    //     $result = $this->dbObj->SQLexec($sql, $data);
    //     if ($result == true) {
    //         echo "<h3> running</h3>";
    //     }
    //     if ($result == false) {
    //         return false;
    //     } else {
    //         $this->data = $this->dbObj->pdo_stm->fetchAll();
    //         return true;
    //     }
    // }
    // // function getListData() is used to search a data from the list Product 
    // // parameters: $id, $name, $description, $inital_price, selling_price, $product_line, $images, $quantity, id new
    // // return: boolean
}
