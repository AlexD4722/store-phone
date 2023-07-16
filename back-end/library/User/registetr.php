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
    require_once("User.php");
    ?>
    <form action="User.php" method="get">
        Username : <input name="username" id="" type="text">
        Password : <input name="password" id="" type="password">
        User_type : <input name="user_type" id="" type="text">
        <input name="submit" type="submit" value="SEND">
    </form>
</body>
</html>