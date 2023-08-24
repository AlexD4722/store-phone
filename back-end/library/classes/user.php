<?php
class User
{
    public $id;
    public $username;
    public $password;
    public $email;
    public $phone;
    public $address;
    public $user_type;
    public $wishlist;
    public $cart;

    public function __construct($username, $password, $email, $phone, $address, $user_type, $wishlist = [], $cart = [])
    {
        $this->username = $username;
        $this->password = $password;
        $this->email = $email;
        $this->phone = $phone;
        $this->address = $address;
        $this->user_type = $user_type;
        $this->wishlist = $wishlist;
        $this->cart = $cart;
    }
}

?>