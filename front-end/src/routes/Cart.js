import { useEffect, useState } from "react";
import { useCartContext } from "../store/hooks";

function Cart() {
    const cart = useCartContext()[0];
    const [userCart, setUserCart] = useState([]);

    useEffect(() => {
        let loginStatus = sessionStorage.getItem("user");
        if (loginStatus){
            let loginData = JSON.parse(loginStatus);
            if (loginData.login === "OK"){
                setUserCart(loginData.user.cart);
            }
        }
    }, []);

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
            User Cart <br />
            {userCart.map((rLine) => {
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
