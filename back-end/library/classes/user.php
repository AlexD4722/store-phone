<?php
class User
{
    public $id;
    public $username;
    public $password;
    public $user_type;
    public function __construct($username, $password, $user_type)
    {
        $this->username = $username;
        $this->password = $password;
        $this->user_type = $user_type;
    }
}

?>