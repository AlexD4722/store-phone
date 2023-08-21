import {
    SearchContext,
    AccountContext,
    WishListContext,
    CartContext,
    ListProductContext,
} from "./Context";
import { useReducer, useState } from "react";
import reducer from "./reducer";
import { useEffect } from "react";
import APIrequest, { GET_ALL_PRODUCTS } from "../API/callAPI";

function SearchProvider({ children }) {
    const [keyword, setKeyword] = useState("");

    return (
        <SearchContext.Provider value={[keyword, setKeyword]}>
            {children}
        </SearchContext.Provider>
    );
}

function AccountProvider({ children }) {
    const [account, setAccount] = useState({});

    return (
        <AccountContext.Provider value={[account, setAccount]}>
            {children}
        </AccountContext.Provider>
    );
}

function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    return (
        <WishListContext.Provider value={[wishlist, setWishlist]}>
            {children}
        </WishListContext.Provider>
    );
}

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    );
}
function ProviderProduct({ children }) {
    const [dataProduct, setDataProduct] = useState([]);
    useEffect(() => {
        APIrequest(GET_ALL_PRODUCTS, "").then((response) => {
            if (response.result === "Success") {
                setDataProduct(response.data.productArray);
            }
        });
    }, []);

    return (
        <ListProductContext.Provider value={[dataProduct, setDataProduct]}>
            {children}
        </ListProductContext.Provider>
    );
}


export { SearchProvider, AccountProvider, WishlistProvider, CartProvider, ProviderProduct };
