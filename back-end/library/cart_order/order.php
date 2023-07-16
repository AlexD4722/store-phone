<?php
require_once("../class/database.php");
require_once("../class/constants.php");

class Order extends Database
{
    public $data = NULL;

    public function __construct()
    {
        parent::__construct($GLOBALS['DatabaseServerName'], $GLOBALS["Database"], $GLOBALS['Username'], $GLOBALS['Password']);
    }

    public function getOrder($id = '', $date = '', $cid = '', $stt = '')
    {
        $sql = 'SELECT FROM order WHERE TRUE';
        $params = [];
        if ($id != '') {
            $sql = ' AND id = ?';
            array_push($params, $id);
        }
        if ($date != '') {
            $sql = ' AND date = ?';
            array_push($params, $date);
        }
        if ($cid != '') {
            $sql = ' AND customer_id = ?';
            array_push($params, $cid);
        }
        if ($stt != '') {
            $sql = ' AND status = ?';
            array_push($params, $stt);
        }
        if (count($params) > 0) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        $this->data = $this->pdo_stm->fetchAll();
        return $result;
    }
    // Hàm lấy dữ liệu từ bảng order theo id, date, customer_id, status. Trả về true nếu thành công, trả về false nếu thất bại. Dữ liệu trả vào thuộc tính $data
    // Tham số là id của order cần tìm.
    public function addOrderToDB($date, $cid, $stt)
    {
        $sql = 'INSERT INTO order VALUES(NULL, ?, ?, ?)';
        $params = [$date, $cid, $stt];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm thêm 1 order vào database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là date, customer_id, status.
    public function editOrderInDB($id, $date, $cid, $stt)
    {
        $sql = 'UPDATE order
                SET date = ?, customer_id = ?, status = ?
                WHERE id = ?';
        $params = [$date, $cid, $stt, $id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm sửa 1 order trong database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là id, date, customer_id, status.
    public function removeOrderInDB($id){
        $sql = 'DELETE FROM order WHERE id=?';
        $params = [$id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm xóa 1 order trong database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là id.
}

?>