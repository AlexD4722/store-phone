import { useEffect, useState } from "react";
import { useCartContext } from "../store/hooks";
import { Link } from "react-router-dom";
import "../styles/cart-page.scss";
import "../styles/box-empty.scss";
import "../styles/order-received.scss";
import APIrequest, { GET_ORDER_RECEIVED, GET_RECEIPT_BY_ID, GET_USER_Receipt, testAPI } from "../API/callAPI";

function OrderReceived() {
    const cart = useCartContext()[0];
    const [dataUser, setDataUser] = useState([]);
    const [idUser, setIdUser] = useState();
    const [listItem, setListItem] = useState();
    const [receipt, setReceipt] = useState();
    const [totalPrice, setTotalPrice] = useState();
    let idReceiptSession = JSON.parse(sessionStorage.getItem("idReceipt"))
    const [reloadCount, setReloadCount] = useState(0);
    useEffect(() => {
        const hasReloaded = localStorage.getItem('hasReloaded');

        if (!hasReloaded) {
            localStorage.setItem('hasReloaded', 'true');
            window.location.reload();
        }
    }, []);
    useEffect(() => {
        const hasReloaded = localStorage.getItem('hasReloaded');

        if (!hasReloaded) {
            localStorage.setItem('hasReloaded', 'true');
            window.location.reload();
        }
    }, []);
    useEffect(() => {
        console.log(idReceiptSession, "-----------------------");
        const userObject = JSON.parse(sessionStorage.getItem("user"));
        const guestObject = JSON.parse(sessionStorage.getItem("guest"));
        let localCartUsing = true;
        let getId = null
        if (userObject) {
            localCartUsing = false;
            if (userObject.login === "OK") {
                if (guestObject) {
                    sessionStorage.removeItem("guest");
                }
                const newData = {
                    userId: userObject.user.id,
                };
                getId = newData;
                setIdUser(newData);
                APIrequest(GET_USER_Receipt, newData).then((obj) => {
                    setDataUser(obj.data.userArray);
                });
            }
        }

        if (guestObject && idReceiptSession) {
            const newData = {
                userId: guestObject.id,
            };
            setIdUser(newData);
            getId = newData;
            APIrequest(GET_USER_Receipt, newData).then((obj) => {
                // console.log(idReceiptSession,"idReceiptSession-----");
                setDataUser(obj.data.userArray);
                // console.log(obj.data.userArray,"obj.data.userArray-----");
            });
        }
        // if (localCartUsing) {
        //     const newData = {
            //         userId: sessionCart.id,
            //     };
            //     setIdUser(newData);
        //     APIrequest(GET_USER_Receipt, newData).then((obj) => {
            //         setDataUser(obj.data.userArray);
            //     });
            // }
            let newData = {}
            if (getId) {
                newData = {
                idReceipt: idReceiptSession,
                customer_id: getId
            }
        }
        // console.log(newData,"++++++++++++++++++++++++++++++++++++++");
        
        if (idReceiptSession && Object.keys(newData).length) {
            console.log(newData, "newData++++++++++");
            APIrequest(GET_ORDER_RECEIVED, newData)
            .then((obj) => {
                    if (obj.data.array_item && obj.data.array_item.length) {
                        setListItem(obj.data.array_item);
                        console.log(obj.data.array_item, "+++");
                        setTotalPrice(obj.data.array_item.reduce((total, product) => total + product.total, 0));
                        // setListItem(obj.data.APIrequest)
                    }
                });
                APIrequest(GET_RECEIPT_BY_ID, newData).then((obj) => {
                    setReceipt(obj.data.receiptArray[0])
                    // setListItem(obj.data.APIrequest)
            });
        }
        
    }, [cart, idReceiptSession]);
    // console.log("datauser++++", dataUser);
    // console.log(receipt, "receipt==============++++++++++++++++++++++++++");
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
                                Order Id:<strong>{receipt && receipt.id}</strong>
                            </p>
                        </li>

                        <li className="order-received__overview">
                            <p>
                                Date:<strong>{receipt && receipt.date}</strong>
                            </p>
                        </li>

                        <li className="order-received__overview">
                            <p>
                                Email:<strong>{dataUser && dataUser[0].email}</strong>
                            </p>
                        </li>
                        <li className="order-received__overview">
                            <p>
                                Phone:<strong>{dataUser && dataUser[0].phone}</strong>
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
                            {listItem &&
                                listItem.map((item, index) => {
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
                                                                item.phone.images[0]
                                                            }
                                                            alt="images product"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="table-product__title-item">
                                                    <Link>
                                                        <h3>
                                                            {item.phone.name}{" "}
                                                            {
                                                                item.phone.capacity
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
                                                    {item.phone.selling_price}
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
                                                {item.total}
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
