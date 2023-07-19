<?php
require_once("../class/database.php");
require_once("../class/constants.php");
class User extends Database
{
    public $data = NULL;
    public function __construct()
    {
        parent::__construct($GLOBALS['DatabaseServerName'], $GLOBALS["Database"], $GLOBALS['Username'], $GLOBALS['Password']);
    }
    //hàm __construct dùng để kết nối với CSDL

    public function insertUser($username, $password, $user_type)
    {
        $sql = "INSERT INTO user VALUES(NULL,?,MD5(?),?)";
        $params = [$username, $password, $user_type];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    //hàm insertUser để thêm user mới

    public function checkUser($username)
    {
        $sql = "SELECT * FROM user WHERE username=?";
        $params = [$username];
        $result = $this->SQLexec($sql, $params);
        if (($result->rowCount()) > 0 ) {
            return TRUE;
        }else{
            return FALSE;
        }
    }
    //hàm kiểm tra người dùng có trong csdl hoặc tìm kiếm người dùng bằng username

    public function deleteUser($id)
    {
        $sql = "DELETE FROM user WHERE id=?";
        $params = [$id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    //hàm xóa user theo id

    public function editUser($id, $username, $user_type)
    {
        $sql = "UPDATE user SET $username AND $user_type WHERE id=?";
        $params = [$id];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    //hàm edit user theo id

    public function checkLogin($username, $password)
    {
        $sql = "SELECT * FROM user WHERE username=? AND password=MD5(?)";
        $params = [$username, $password];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
    //hàm checkLogin để kiểm tra xem người dùng có nhập đúng tk và mk ?

}
