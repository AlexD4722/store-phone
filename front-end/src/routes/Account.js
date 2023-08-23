import { Button } from "react-bootstrap";
import {
    useAccountContext,
    useCartContext,
    useWishlistContext,
} from "../store";
import { useCallback, useEffect } from "react";
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

    const goToDashboard = useCallback(()=>{
        navigate("admin-dashboard")
    },[account])

    return (
        <>
            Account Page
            <br />
            {account.user_type === "admin" && (
                <Button onClick={goToDashboard}>Admin Dashboard</Button>
            )}
            <br />
            {Object.keys(account).length > 0 && (
                <Button onClick={handleSignOut}>Sign out</Button>
            )}
        </>
    );
}

export default Account;
