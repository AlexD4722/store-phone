import { useEffect, useState } from "react";
import { useWishlistContext } from "../store";
import APIrequest, { GET_PRODUCTS_BY_WISHLIST } from "../API/callAPI";

function WishList() {
    const wishlist = useWishlistContext()[0];
    const [userWishlist, setWL] = useState([]);

    useEffect(() => {
        const sessionUser = sessionStorage.getItem("user");
        if (sessionUser) {
            const loginStatus = JSON.parse(sessionUser);
            if (loginStatus.login === "OK") {
                let productIdArray = loginStatus.user.wishlist;
                if (!productIdArray) {
                    productIdArray = [];
                }
                APIrequest(GET_PRODUCTS_BY_WISHLIST, productIdArray).then(
                    (response) => setWL(response.data.productArray)
                );
            }
        }
    }, []);

    return (
        <>
            Wishlist in session storage <br />
            {wishlist.map((product) => (
                <>
                    {product.name}
                    <br />
                </>
            ))}
            User's wishlist <br />
            {userWishlist.map((product) => (
                <>
                    {product.name}
                    <br />
                </>
            ))}
        </>
    );
}

export default WishList;
