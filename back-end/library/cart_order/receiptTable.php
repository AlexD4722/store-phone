<?php
//Phải include file database, constants và receipt
class ReceiptTable extends Database
{
    public $data = NULL;

    public function __construct()
    {
        parent::__construct(DatabaseServerName, Database, Username, Password);
    }

    public function getReceipt($id = '', $date = '', $cid = '', $stt = '')
    {
        $sql = 'SELECT * FROM receipt WHERE TRUE';
        $params = [];
        if ($id != '') {
            $sql .= ' AND id = ?';
            array_push($params, (int) $id);
        }
        if ($date != '') {
            $sql .= ' AND date = ?';
            array_push($params, $date);
        }
        if ($cid != '') {
            $sql .= ' AND customer_id = ?';
            array_push($params, (int)$cid);
        }
        if ($stt != '') {
            $sql .= ' AND status = ?';
            array_push($params, $stt);
        }
        if (count($params) > 0) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        $data = $this->pdo_stm->fetchAll();
        $arr = [];
        foreach ($data as $row){
            $one = new Receipt($row["date"], $row["customer_id"], $row["status"]);
            array_push($arr, $one);
        }
        $this->data = $arr;
        return $result;
    }
    // Hàm lấy dữ liệu từ bảng receipt theo id, date, customer_id, status. Trả về true nếu thành công, trả về false nếu thất bại. Dữ liệu trả vào thuộc tính $data
    // Tham số là id, date, customer_id, status của receipt cần tìm.
    public function addReceiptToDB(Receipt $re)
    {
        $sql = 'INSERT INTO receipt VALUES(NULL, ?, ?, ?)';
        $params = [$re->date, $re->customer_id, $re->status];
        $result = $this->SQLexec($sql, $params);
        if ($result){
            foreach ($re as $line){
                $lineAddResult = $this->addReceiptLineToDB($line);
                if (!$lineAddResult){
                    $result = false;
                }
            }
        }
        return $result;
    }
    // Hàm thêm 1 receipt vào database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là kiểu dữ liệu Receipt.
    public function editReceiptInDB($id, Receipt $re)
    {
        $sql = 'UPDATE receipt
                SET date = ?, customer_id = ?, status = ?
                WHERE id = ?';
        $params = [$re->date, $re->customer_id, $re->status, $id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm sửa 1 receipt trong database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là id và kiểu dữ liệu Receipt.
    public function removeReceiptInDB($id){
        $sql = 'DELETE FROM receipt WHERE id=?';
        $params = [$id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm xóa 1 receipt trong database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là id.
    public function getReceiptLine($id = '', $oid = '', $pid = '')
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
        $data = $this->pdo_stm->fetchAll();
        $arr = [];
        foreach ($data as $row){
            $one = new ReceiptLine($row["product_id"], $row["quantity"], $row["order_id"]);
            array_push($arr, $one);
        }
        $this->data = $arr;
        return $result;
    }
    // Hàm lấy dữ liệu từ bảng order_line theo id và/hoặc oid và/hoặc pid. Trả về true nếu thành công, trả về false nếu thất bại. Dữ liệu trả vào thuộc tính $data
    // Tham số là id, oid, pid của OL cần tìm.

    public function addReceiptLineToDB(ReceiptLine $rl)
    {
        $sql = 'INSERT INTO order_line VALUES(NULL, ?, ?, ?)';
        $params = [$rl->product_id, $rl->quantity, $rl->order_id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm thêm 1 OL vào database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là product_id, quantity, order_id.
    public function editReceiptLineInDB($id, ReceiptLine $rl)
    {
        $sql = 'UPDATE order_line
                SET product_id = ?, quantity = ?, order_id = ?
                WHERE id = ?';
        $params = [$rl->product_id, $rl->quantity, $rl->order_id, $id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm sửa 1 OL trong database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là id, product_id, quantity, order_id.
    public function removeReceiptLineInDB($id){
        $sql = 'DELETE FROM order_line WHERE id=?';
        $params = [$id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // Hàm xóa 1 OL trong database. Trả về true nếu thành công, trả về false nếu thất bại.
    // Tham số là id.
}

?>