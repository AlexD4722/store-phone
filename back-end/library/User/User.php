<?php
$username = "";
$password = "";
$user_type = "";
if(isset($_REQUEST["submit"]))
{
    $username = $_REQUEST["username"];
    $password = $_REQUEST["password"];
    $user_type = $_REQUEST["user_type"];

    if ($username == "") {
        echo '<h2>Chưa nhập username</h2>';
    } else if (checkUser($username) == true) {
        echo '<h2> Username đã tồn tại, vui lòng nhập username khác </h2>';
        return;
    }
    if($password == ""){
        echo '<h2>Chưa nhập password</h2>';
    }
    if($user_type == ""){
        echo '<h2>Chưa nhập user_type</h2>';
    }
    if ($username != "" && $password != "" && $user_type != "") {
        $ketqua = insertUser($username, $password , $user_type);
        if ($ketqua == TRUE)
            echo  '<div style="color:#090">Thêm thành công !</div>';
        else
            echo "<h3>Chưa thêm được user </h3>";
    }
}

function ConnectDB()
{
    $conn = NULL;
    try {
        $conn = new PDO("mysql:host=localhost:3306;dbname=project", "root", "");
        $conn->query("SET NAMES UTF8");
    } catch (PDOException $ex) {
        echo "<p>" . $ex->getMessage() . "</p>";
        die('<h3>LỖI KÊT NỐI CSDL</h3>');
    }
    return $conn;
}
//hàm ConnectDB dùng để kết nối với CSDL

function insertUser($username, $password, $user_type)
{
    $conn = ConnectDB();
    $sql = "INSERT INTO user VALUES(NULL,?,MD5(?),?)";
    $pdo_stm = $conn->prepare($sql);
    $data = [$username, $password, $user_type];
    $ketqua = $pdo_stm->execute($data);
    return $ketqua;
}
//hàm insertUser để thêm người dùng vào CSDL, và có dùng mã hóa MD5 cho mật khẩu người dùng khi thêm mới .

function checkUser($username)
{
    $conn = ConnectDB();
    $sql = "SELECT * FROM user WHERE username=?";
    $pdo_stm = $conn->prepare($sql);
    $data = [$username];
    $ketqua = $pdo_stm->execute($data);
    if ($ketqua == TRUE) {
        $n = $pdo_stm->rowCount();
        if ($n > 0)
            return TRUE;
        else
            return FALSE;
    } else {
        return FALSE;
    }
}
//hàm checkUser để kiểm tra hoặc tìm kiếm người dùng có tồn tại trong CSDL hay không ?

function checkLogin($username, $password)
{
    $conn = ConnectDB();
    $sql = "SELECT * FROM user WHERE username=? AND password=MD5(?)";
    $pdo_stm = $conn->prepare($sql);
    $data = [$username, $password];
    $ketqua = $pdo_stm->execute($data);
    if ($ketqua == TRUE) {
        $n = $pdo_stm->rowCount();
        if ($n > 0)
            return $pdo_stm->fetch();
        else
            return NULL;
    } else {
        return FALSE;
    }
}
//hàm checkLogin để kiểm tra khi người dùng đăng nhập có đúng tài khoản hay chưa mới cho vào trang khác để thực hiện chức năng khác , và có dùng MD5 để mã hóa ngược lại trước khi đăng nhập .
?>
