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
    public $color;
    public $capacity;
    public $status;

    public function __construct($id, $name, $desc, $init, $sell, $qty, $dir, $color, $capacity, $status)
    {
        $this->id = $id;
        $this->name = $name;
        $this->description = $desc;
        $this->inital_price = $init;
        $this->selling_price = $sell;
        $this->quantity = $qty;
        $this->images = $dir;
        $this->color = $color;
        $this->capacity = $capacity;
        $this->status = $status;
    }
}

class ProductLine
{
    public $name;
    public $brand;
    public $product_type;
    public $status = 1;
    public function __construct($name, $brand, $type)
    {
        $this->name = $name;
        $this->brand = $brand;
        $this->product_type = $type;
    }
}
?>