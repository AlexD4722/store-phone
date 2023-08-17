import { useWishlistContext } from "../store";

function WishList() {
    const wishlist = useWishlistContext()[0];

    return (
        <>
            {wishlist.map((product) => (
                <>{product.name}<br/></>
            ))}
        </>
    );
}

export default WishList;
