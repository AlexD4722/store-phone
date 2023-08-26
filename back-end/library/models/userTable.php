<?php
class UserTable extends Database
{
    public $data = NULL;
    public function __construct()
    {
        parent::__construct(DatabaseServerName, Database, Username, Password);
    }
    public function getUser($username = '', $password = '', $user_type = '', $email = '', $id = 0)
    {
        $sql = "SELECT * FROM user WHERE TRUE";
        $params = [];
        if ($username) {
            $sql .= " AND username = ?";
            array_push($params, $username);
        }
        if ($password) {
            $sql .= " AND password = MD5(?)";
            array_push($params, $password);
        }
        if ($user_type) {
            $sql .= " AND user_type = ?";
            array_push($params, $user_type);
        }
        if ($email) {
            $sql .= " AND email = ?";
            array_push($params, $email);
        }
        if ($id != 0) {
            $sql .= " AND id = ?";
            array_push($params, $id);
        }
        if (count($params)) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        if ($result) {
            $data = $this->pdo_stm->fetchAll();
            $arr = [];
            foreach ($data as $row) {
                $one = new User($row["username"], $row["password"], $row["email"], $row["phone"], $row["address"], $row["user_type"], json_decode($row["wishlist"]), json_decode($row["cart"]));
                $one->id = $row["id"];
                array_push($arr, $one);
            }
            $this->data = $arr;
        }
        return $result;
    }
    //hàm __construct dùng để kết nối với CSDL
    public function getUserReceipt($id = "", $username = '', $password = '', $user_type = '', $email = '')
    {
        $sql = "SELECT * FROM user WHERE TRUE";
        $params = [];
        // if ($username) {
        //     $sql .= " AND username = ?";
        //     array_push($params, $username);
        // }
        // if ($password) {
        //     $sql .= " AND password = MD5(?)";
        //     array_push($params, $password);
        // }
        // if ($user_type) {
        //     $sql .= " AND user_type = ?";
        //     array_push($params, $user_type);
        // }
        // if ($email) {
        //     $sql .= " AND email = ?";
        //     array_push($params, $email);
        // }
        $params = [];
        if ($id) {
            $sql .= " AND id = ?";
            array_push($params, $id);
        }
        if (count($params) > 0) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        $data = $this->pdo_stm->fetchAll();
        $this->data = [];
        if (count($data) > 0) {
            foreach ($data as $row) {
                array_push($this->data, new User($row["username"], $row["password"], $row["email"], $row["phone"], $row["address"], $row["user_type"], json_decode($row["wishlist"]), json_decode($row["cart"])));
                $this->data->id = $row["id"];
            }
        }
        return $result;
    }
    //Hàm getUser để tìm kiếm user. Trả về true nếu tìm thấy, false nếu không tìm thấy. Dữ liệu trả vào thuộc tính data.
    //Dữ liệu trả về dạng mảng các object User.
    public function insertUser(User $user)
    {
        $sql = "INSERT INTO user VALUES(NULL,?,MD5(?), ?, ?, ?, ?, ?, ?)";
        $params = [$user->username, $user->password, $user->user_type, $user->email, json_encode($user->wishlist), json_encode($user->cart), $user->phone, $user->address];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    //hàm insertUser để thêm user mới

    public function deleteUser($id)
    {
        $sql = "DELETE FROM user WHERE id=?";
        $params = [$id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    //hàm xóa user theo id

    public function editUser($id, User $user)
    {
        $sql = "UPDATE user SET username = ?, email = ?, phone = ?, address = ?, cart = ?, wishlist = ?, user_type = ? WHERE id=?";
        $params = [$user->username, $user->email, $user->phone, $user->address, json_encode($user->cart), json_encode($user->wishlist), $user->user_type, $id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    //hàm edit user theo id

    public function editUserPassword($id, $pass)
    {
        $sql = "UPDATE user SET password = ? WHERE id = ?";
        $params = [$pass, $id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    // hàm edit user password
    public function checkUser($username)
    {
        $sql = "SELECT * FROM user WHERE username = ?";
        $params = [$username];
        $result = $this->SQLexec($sql, $params);
        $this->data = $this->pdo_stm->fetchAll();
        return $result;
    }
}