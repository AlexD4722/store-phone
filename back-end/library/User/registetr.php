<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register</title>
</head>

<body>
    <h1>Form register</h1>
    <?php
    require_once('./User.php');
    $clsUser = new User();

    $username = "";
    $password = "";
    $user_type = "";

    if (isset($_REQUEST["submit"])) {
        $username = $_REQUEST["username"];
        $password = $_REQUEST["password"];
        $user_type = $_REQUEST["user_type"];

        if ($username == "")
            echo 'chua nhap username';
        else if ($clsUser->checkUser($username))
            echo 'user ton tai';
        if ($password == "")
            echo 'chua nhap password';
        if ($user_type == "")
            echo 'chua nhap user_type';

        if ($username != ""  &&  $password != ""  &&  $user_type != "") {
            $result = $clsUser->insertUser($username, $password, $user_type);
            echo 'them thanh cong';
        }
    }
    ?>
    <form action="" method="get">
        Username : <input name="username" id="" type="text">
        Password : <input name="password" id="" type="password">
        User_type : <input name="user_type" id="" type="text">
        <input name="submit" type="submit" value="SEND">
    </form>

</body>

</html>