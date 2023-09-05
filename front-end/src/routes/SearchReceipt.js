import { Button, Container, Row, Col, Badge, Card } from "react-bootstrap";
import {
    useAccountContext,
    useCartContext,
    useWishlistContext,
} from "../store";
import { useCallback, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/form-search.scss';
import APIrequest, { GET_RECEIPTS_BY_CID, testAPI } from "../API/callAPI";

function SearchReceipt() {
    const [keyword, setKeyword] = useState([]);
    const handleChangeKey = (event)=>{
        console.log(event.target.value,"--------------------");
        setKeyword(event.target.value);
    }
    const handleButton = ()=>{
        const dataRequest = {
            idRecipient: keyword
        }
        testAPI(GET_RECEIPTS_BY_CID, dataRequest).then((obj) => {
            
        });
    }

    return (
        <>
            <div className="xo-container">
                <div className="order-received">
                    <form className="form-search">
                        <div className="form-search__wrapper-search">
                            <div className="form-search__box-input"
                            >
                                <input
                                    onChange={(event) => handleChangeKey(event)}
                                    value={keyword}
                                    type="text"
                                    placeholder="Enter the order recipient's id..."
                                />
                            </div>

                            <div className="form-search__button">
                                <button
                                    className="form-search__button-detail form-search__button-detail--second"
                                    type="button"
                                onClick={handleButton}
                                >
                                    <span>search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* <ul className="order-received__overview">
                        <li className="order-received__overview">
                            <p>
                                Order Recipient Name:<strong>{dataUser.name}</strong>
                            </p>
                        </li>
                        <li className="order-received__overview">
                            <p>
                                Phone:<strong>{dataUser.phone}</strong>
                            </p>
                        </li>
                        <li className="order-received__overview">
                            <p>
                                Address:<strong>{dataUser.address}</strong>
                            </p>
                        </li>
                        <li className="order-received__overview">
                            <p>
                                Total:<strong>${totalPrice}</strong>
                            </p>
                        </li>
                    </ul>
                    <div className="order-received__order-detail">
                        <h3 className="order-received__title-order-detail">
                            ORDER DETAILS
                        </h3>
                    </div>
                    <table className="table-product">
                        <thead>
                            <tr>
                                <th className="table-product__colum-product">
                                    Product
                                </th>
                                <th className="table-product__colum-pice">
                                    Price
                                </th>
                                <th className="table-product__colum-quantity">
                                    Quantity
                                </th>
                                <th className="table-product__colum-subtotal">
                                    Subtotal
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart &&
                                cart.map((item, index) => {
                                    return (
                                        <tr
                                            className="table-product__row-item"
                                            key={index}
                                        >
                                            <td
                                                className="table-product__value-product"
                                                data-label="Product:"
                                            >
                                                <div className="table-product__img-item">
                                                    <div className="table-product__img-detail">
                                                        <img
                                                            src={
                                                                item.product.images[0]
                                                            }
                                                            alt="images product"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="table-product__title-item">
                                                    <Link to="/">
                                                        <h3>
                                                            {item.product.name}{" "}
                                                            {
                                                                item.product.capacity
                                                            }{" "}
                                                            {item.color}
                                                        </h3>
                                                    </Link>
                                                </div>
                                            </td>
                                            <td
                                                className="table-product__value-pice"
                                                data-label="Price:"
                                            >
                                                <p>
                                                    <span>$</span>
                                                    {item.product.selling_price}
                                                </p>
                                            </td>
                                            <td
                                                className="table-product__value-quantity"
                                                data-label="Quantity:"
                                            >
                                                <div className="table-product__info-quantity-detail">
                                                    <div> {item.quantity}</div>
                                                </div>
                                            </td>
                                            <td
                                                className="table-product__value-subtotal"
                                                data-label="Subtotal:"
                                            >
                                                <span>$</span>
                                                {item.totalPrice}
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                    <div className="order-received__box-btn-footer">
                        <button
                            type="button"
                            className="order-received__btn"
                        >
                            <span className="order-received__btn-content order-received__btn-content--cancel">
                                Cancel
                            </span>
                        </button>
                        <button
                            type="button"
                            className="order-received__btn"
                            onClick={handelAccept}
                        >
                            <span className="order-received__btn-content">
                                accept
                            </span>
                        </button>
                    </div>
                    <div className={`order-received__box-messenger ${messenger}`}>
                        <div className="order-received__messenger-content">
                            <p>Please wait to be contacted to confirm your order.</p>
                            <p>Thank you!</p>
                            <div onClick={() => HandleMoveLinkSearch()} className="order-received__link-search-order">
                                <p> Search your order</p>
                            </div>
                        </div>
                    </div>
                    <div className={`order-received__layout ${messenger}`}>

                    </div> */}
                </div>
            </div>
        </>
    );
}

export default SearchReceipt;
