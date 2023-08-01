<?php
class Product
{
    public $id;
    public $name;
    public $description;
    public $inital_price;
    public $selling_price;
    public ProductLine $product_line;
    public $quantity;
    public $images;

    public function __construct($name, $desc, $init, $sell, $qty, $dir)
    {
        $this->name = $name;
        $this->description = $desc;
        $this->inital_price = $init;
        $this->selling_price = $sell;
        $this->quantity = $qty;
        $this->images = $dir;
    }
}

class ProductLine
{
    public $name;
    public $brand;
    public $product_type;
    public function __construct($name, $brand, $type)
    {
        $this->name = $name;
        $this->brand = $brand;
        $this->product_type = $type;
    }
}
?>