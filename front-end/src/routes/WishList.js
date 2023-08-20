import { useEffect, useState } from "react";
import { useWishlistContext } from "../store";

function WishList() {
    const wishlist = useWishlistContext()[0];
    const [login, setLogin] = useState(false);

    useEffect(() => {
        const sessionUserStatus = sessionStorage.getItem("user");
        const sessionUserObject = JSON.parse(sessionUserStatus);
        if (sessionUserObject && sessionUserObject.login === "OK") {
            setLogin(true);
        }
    }, []);

    return (
        <>
            {!login && "Not login yet"}
            {login && (
                <div>
                    User's Wishlist <br />
                    {wishlist.map((product) => (
                        <>
                            {product.name}
                            <br />
                        </>
                    ))}
                </div>
            )}
        </>
    );
}

export default WishList;
