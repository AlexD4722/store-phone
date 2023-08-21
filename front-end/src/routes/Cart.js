import { useEffect, useState } from "react";
import { useCartContext } from "../store/hooks";

function Cart() {
    const cart = useCartContext()[0];
    
    return (
        <>
            Local Cart <br />
            {cart.map((rLine) => {
                return (
                    <p>
                        {rLine.product.name} {rLine.product.selling_price} x
                        {rLine.quantity}{" "}
                        {rLine.product.selling_price * rLine.quantity}
                    </p>
                );
            })}
        </>
    );
}

export default Cart;
