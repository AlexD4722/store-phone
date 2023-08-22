<?php

class TemporaryUserTable extends Database
{
    public $data = NULL;
    public function __construct()
    {
        parent::__construct(DatabaseServerName, Database, Username, Password);
    }

    public function getUser($username)
    {
        $sql = "SELECT * FROM temporary_user WHERE username = ?";
        $params = [$username];
        $result = $this->SQLexec($sql, $params);
        if ($result) {
            $data = $this->pdo_stm->fetch();
            $return = new stdClass();
            $return->username = $data["username"];
            $return->password = $data["password"];
            $return->email = $data["email"];
            $return->validation_code = $data["validation_code"];
            $this->data = $return;
        }
        return $result;
    }

    public function insertUser($username, $password, $email, $validation_code)
    {
        $sql = "INSERT INTO temporary_user VALUES(?, ? ,? ,?)";
        $params = [$username, $password, $email, $validation_code];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }

    public function deleteUser($username)
    {
        $sql = "DELETE FROM temporary_user WHERE username = ?";
        $params = [$username];
        $result = $this->SQLexec($sql, $params);
        return $result;
    }
}

?>