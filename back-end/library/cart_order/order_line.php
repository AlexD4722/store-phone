<?php
require_once("../class/database.php");
require_once("../class/constants.php");

class OrderLine extends Database
{
    public $data = NULL;

    public function __construct()
    {
        parent::__construct($GLOBALS['DatabaseServerName'], $GLOBALS["Database"], $GLOBALS['Username'], $GLOBALS['Password']);
    }

    public function getOrderLine($id = '', $oid = '', $pid = '')
    {
        $sql = 'SELECT FROM order_line WHERE TRUE ';
        $params = [];
        if ($id != ''){
            $sql .= ' AND id = ?';
            array_push($params, $id);
        }
        if ($oid != ''){
            $sql .= ' AND id = ?';
            array_push($params, $id);
        }
        if ($pid != ''){
            $sql .= ' AND id = ?';
            array_push($params, $id);
        }
        if (count($params) > 0){
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        $this->data = $this->pdo_stm->fetchAll();
        return $result;
    }
    // Hàm lấy dữ liệu từ bảng order_line theo id và/hoặc oid và/hoặc pid. Trả về true nếu thành công, trả về false nếu thất bại. Dữ liệu trả vào thuộc tính $data
    // Tham số là id, oid, pid của OL cần tìm.

    public function addOrderLineToDB($pid, $qty, $oid)
    {
        $sql = 'INSERT INTO order_line VALUES(NULL, ?, ?, ?)';
        $params = [$pid, $qty, $oid];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm thêm 1 OL vào database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là product_id, quantity, order_id.
    public function editOrderLineInDB($id, $pid, $qty, $oid)
    {
        $sql = 'UPDATE order_line
                SET product_id = ?, quantity = ?, order_id = ?
                WHERE id = ?';
        $params = [$pid, $qty, $oid, $id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm sửa 1 OL trong database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là id, product_id, quantity, order_id.
    public function removeOrderLineInDB($id){
        $sql = 'DELETE FROM order_line WHERE id=?';
        $params = [$id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm xóa 1 OL trong database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là id.
}
?>