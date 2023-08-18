import { useCartContext, useWishlistContext } from "../store/hooks";
import "../styles/product-card.scss";
import React from "react";

function Product(props) {
    const dispatchCart = useCartContext()[1];
    const setWishlist = useWishlistContext()[1];

    const handleCart = () => {
        let userSession = sessionStorage.getItem("user");
        if (userSession){
            let loginStatus = JSON.parse(userSession);
            if (loginStatus.login === "OK"){
                
            }
        }
        let payload = { product: props.product, quantity: 1 };
        let action = { type: "add", payload };
        dispatchCart(action);
    };

    const handleWishlist = () => {
        setWishlist((prev) => {
            if (!prev.includes(props.product)) {
                let wishlist = [...prev, props.product];
                sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
                return wishlist;
            }
            return prev;
        });
    };

    return (
        <div className="product-card">
            <div className="product-card__img-wrap">
                <div className="product-card__img-default">
                    <img src={props.product && props.product.images[0]} alt="" />
                </div>
                <div className="product-card__img-sub">
                    <img src={props.product && props.product.images[1]} alt="" />
                </div>
                <button
                    type="button"
                    className="product-card__box-wishlist"
                    onClick={handleWishlist}
                >
                    <i className="bi bi-heart"></i>
                </button>
            </div>
            <div className="product-card__main">
                <div className="product-card__content-wrapper">
                    <h3 className="product-card__product-title">
                        {" "}
                        {props.product.name}
                    </h3>
                    <div className="product-card__product-rating">
                        <div className="product-card__box-start-rating">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <span className="product-card__count-rating">{1}</span>
                    </div>
                    <div className="product-card__product-price-cart">
                        <div className="product-card__price">
                            <span className="product-card__price-old">
                                ${props.product.inital_price}
                            </span>
                            <span className="product-card__price-new">
                                ${props.product.selling_price}
                            </span>
                        </div>
                        <div
                            className="product-card__box-btn-add"
                            onClick={handleCart}
                        >
                            <div className="product-card__btn-add-cart">
                                <i className="bi bi-cart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-card__footer">
                <ul className="product-footer-details">
                    <li>Screen Size 10.9 in</li>
                    <li> Operating System Apple iOS</li>
                    <li>Product Length 9.74 in</li>
                </ul>
            </div>
        </div>
    );
}
export default Product;
