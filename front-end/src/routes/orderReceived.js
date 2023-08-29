import { useEffect, useState } from "react";
import { useCartContext } from "../store/hooks";
import { Link } from "react-router-dom";
import "../styles/cart-page.scss";
import "../styles/box-empty.scss";
import "../styles/order-received.scss";
import APIrequest, { GET_USER_Receipt } from "../API/callAPI";

function OrderReceived() {
    const cart = useCartContext()[0];
    const [dataUser, setDataUser] = useState({});
    const [idUser, setIdUser] = useState();
    const [totalPriceOrder, setTotalPriceOrder] = useState();
    useEffect(() => {
        let userObject = JSON.parse(sessionStorage.getItem("user"));
        let guestObject = JSON.parse(sessionStorage.getItem("guest"));
        const sessionCart = JSON.parse(sessionStorage.getItem("cart"));
        let localCartUsing = true;
        if (userObject) {
            localCartUsing = false;
            if (userObject.login === "OK") {
                const newData = {
                    userId: userObject.user.id,
                };
                setIdUser(newData);
                APIrequest(GET_USER_Receipt, newData).then((obj) => {
                    setDataUser(obj.data.userArray);
                });
            }
        }
        if (guestObject) {
            localCartUsing = false;
            if (guestObject.login === "OK") {
                const newData = {
                    userId: guestObject.guest.id,
                };
                setIdUser(newData);
                APIrequest(GET_USER_Receipt, newData).then((obj) => {
                    setDataUser(obj.data.userArray);
                });
            }
        }
        if (localCartUsing) {
            const newData = {
                userId: sessionCart.id,
            };
            setIdUser(newData);
            APIrequest(GET_USER_Receipt, newData).then((obj) => {
                setDataUser(obj.data.userArray);
            });
        }
    }, []);

    return (
        <>
            {dataUser && dataUser[0] ? (
                <div className="xo-container">
                    <div className="order-received">
                        <h2 className="order-received__text-success">
                            Thank you. Your order has been received.
                        </h2>
                    </div>
                    <ul className="order-received__overview">
                        <li className="order-received__overview">
                            <p>
                                Order Id:<strong>{dataUser[0].id}</strong>
                            </p>
                        </li>

                        <li className="order-received__overview">
                            <p>
                                Date:<strong>August 25, 2023</strong>
                            </p>
                        </li>

                        <li className="order-received__overview">
                            <p>
                                Email:<strong>{dataUser[0].email}</strong>
                            </p>
                        </li>
                        <li className="order-received__overview">
                            <p>
                                Phone:<strong>{dataUser[0].phone}</strong>
                            </p>
                        </li>
                        <li className="order-received__overview">
                            <p>
                                Total:<strong>$635.99</strong>
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
                                                                item.product
                                                                    .images[0]
                                                            }
                                                            alt="images product"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="table-product__title-item">
                                                    <Link>
                                                        <h3>
                                                            {item.product.name}{" "}
                                                            {
                                                                item.product
                                                                    .capacity
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
                                                    <div>100</div>
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
                </div>
            ) : (
                " NO DATA USER"
            )}
        </>
    );
}

export default OrderReceived;
