<?php
class UserTable extends Database
{
    public $data = NULL;
    public function __construct()
    {
        parent::__construct(DatabaseServerName, Database, Username, Password);
    }
    //hàm __construct dùng để kết nối với CSDL

    public function getUser($username = '', $password = '', $user_type = '')
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
        if (count($params)) {
            $result = $this->SQLexec($sql, $params);
        } else {
            $result = $this->SQLexec($sql);
        }
        if ($result) {
            $data = $this->pdo_stm->fetchAll();
            $arr = [];
            foreach ($data as $row) {
                $one = new User($row["username"], $row["password"], $row["email"], $row["user_type"]);
                $one->id = $row["id"];
                array_push($arr, $one);
            }
            $this->data = $arr;
        }
        return $result;
    }
    //Hàm getUser để tìm kiếm user. Trả về true nếu tìm thấy, false nếu không tìm thấy. Dữ liệu trả vào thuộc tính data.
    //Dữ liệu trả về dạng mảng các object User.
    public function insertUser(User $user)
    {
        $sql = "INSERT INTO user VALUES(NULL,?,MD5(?), ?, ?, '[]', NULL)";
        $params = [$user->username, $user->password, $user->user_type, $user->email];
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
        $sql = "UPDATE user SET username = ? AND password = MD5(?) AND user_type = ? WHERE id=?";
        $params = [$user->username, $user->password, $user->user_type, $id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    //hàm edit user theo id

    public function checkUser($username)
    {
        $sql = "SELECT * FROM user WHERE username = ?";
        $params = [$username];
        $result = $this->SQLexec($sql, $params);
        $this->data = $this->pdo_stm->fetchAll();
        return $result;
    }
}