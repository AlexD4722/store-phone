<?php
class User
{
    public $id;
    public $username;
    public $password;
    public $email;
    public $user_type;
    public function __construct($username, $password, $email, $user_type)
    {
        $this->username = $username;
        $this->password = $password;
        $this->email = $email;
        $this->user_type = $user_type;
    }
}

?>