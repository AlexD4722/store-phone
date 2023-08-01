<?php
class Receipt
{
    public $id;
    public $date;
    public $customer_id;
    public $status;
    private $lines = [];
    public function __construct($date, $cid, $stt)
    {
        $this->date = $date;
        $this->customer_id = $cid;
        $this->status = $stt;
    }

    public function addLine(ReceiptLine $rl)
    {
        if ($rl->order_id === $this->id) {
            array_push($this->lines, $rl);
        } else {
            return false;
        }
        return true;
    }
    public function addLinesArray(array $arr)
    {
        $fail = [];
        $length = count($arr);
        for ($i = 0; $i < $length; $i++) {
            $result = $this->addLine($arr[$i]);
            if (!$result) {
                array_push($fail, $i);
            }
        }
        if (count($fail) > 0) {
            return $fail;
        }
        return true;
    }
    public function getLines()
    {
        return $this->lines;
    }
}

class ReceiptLine
{
    public $id;
    public $product_id;
    public $quantity;
    public $order_id;
    public function __construct($product_id, $quantity, $order_id)
    {
        $this->product_id = $product_id;
        $this->quantity = $quantity;
        $this->order_id = $order_id;
    }
}
?>