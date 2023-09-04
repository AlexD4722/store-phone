
<?php
class Buyer
{
    public $id;
    public $id_account;
    public $name;
    public $phone;
    public $address;
    public function __construct($id, $id_account= "4", $name = "", $phone= "", $address = "")
    {   
        $this->id = $id;
        $this->id_account = $id_account;
        $this->name = $name;
        $this->phone = $phone;
        $this->address = $address;
    }
}

?>