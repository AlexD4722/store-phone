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
    function getListData($name = '')
    {
        $sql = "SELECT * FROM product_line WHERE TRUE";
        $prameters = [];
        if ($name) {
            $sql .= " AND `name` like '% $name %' ";
            array_push($prameters, $name);
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
    // parameters: $name=''
    // return: boolean

    function addData(
        $name,
        $brand,
        $product_type,
    ) {
        $sql = "INSERT INTO `product_line`(`name`, `brand`, `product_type`) VALUES ( ?, ?, ?)";
        $data = [
            $name,
            $brand,
            $product_type
        ];
        $result = $this->dbObj->SQLexec($sql, $data);
        return $result;
    }
    // function addData() is used to insert a data into the list Product 
    // parameters: $name, $brand, $product_type
    // return: boolean

    function removeData($name)
    {
        $sql = "DELETE FROM product WHERE `name`=? ";
        $data = [$name];
        $result = $this->dbObj->SQLexec($sql, $data);
        return $result;
    }
    // function removeData() is used to delete a data from the list Product 
    // parameters: $name
    // return: boolean

    function editData(
        $name,
        $brand,
        $product_type,
        $name_old
    ) {
        $sql = "UPDATE `product_line` SET `name`=?,`brand`=?,`product_type`=? WHERE `name` = ?";

        $data = [
            $name,
            $brand,
            $product_type,
            $name_old,
        ];
        $result = $this->dbObj->SQLexec($sql, $data);
        return $result;
    }
    // function removeData() is used to update a data from the list Product 
    // parameters: $name, $brand, $product_type, $name_old,
    // return: boolean
}
