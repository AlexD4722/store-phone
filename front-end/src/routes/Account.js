import { Button } from "react-bootstrap";
import {
    useAccountContext,
    useCartContext,
    useWishlistContext,
} from "../store";
import { useCallback } from "react";
import { useNavigate } from "react-router";

function Account() {
    const [account, setAccount] = useAccountContext();
    const setWishlist = useWishlistContext()[1];
    const dispatchCart = useCartContext()[1];
    const navigate = useNavigate();

    const handleSignOut = useCallback(() => {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");
        }
        sessionStorage.removeItem("user");
        setAccount({});
        setWishlist([]);
        const action = { type: "replace", payload: [] };
        dispatchCart(action);
        navigate("..");
    }, []);

    return (
        <>
            Account Page
            <br />
            {Object.keys(account).length > 0 && (
                <Button onClick={handleSignOut}>Sign out</Button>
            )}
        </>
    );
}

export default Account;
