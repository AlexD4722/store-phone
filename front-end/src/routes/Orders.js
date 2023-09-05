import { Button, Container, Row, Col, Badge, Card } from "react-bootstrap";
import {
    useAccountContext,
    useCartContext,
    useWishlistContext,
} from "../store";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/form-search.scss';
import APIrequest, { GET_RECEIPTS_BY_CID, GET_RECEIPTS_BY_ID_USER, testAPI } from "../API/callAPI";
import '../styles/table-product.scss';

function Orders() {
    const [keyword, setKeyword] = useState([]);
    const [dataReceipt, setDataReceipt] = useState([]);
    const [dataOrders, setOrders] = useState([]);
    const handleChangeKey = (event) => {
        console.log(event.target.value, "--------------------");
        setKeyword(event.target.value);
    }
    useEffect(() => {
        const userObject = JSON.parse(sessionStorage.getItem("user"));
        const dataRequest = {
            idUser: userObject.user.id
        }
        APIrequest(GET_RECEIPTS_BY_ID_USER, dataRequest).then((obj) => {
            let items = []
            obj.data.listObj.forEach((item) => {
                items.push({
                    id: item.buyer.id,
                    date: item.receipt[0].date,
                    name: item.buyer.name,
                    phone: item.buyer.phone,
                    address: item.buyer.address,
                    status: item.receipt[0].status,
                })
            })
            setDataReceipt(items)
        });
        // if(items.length){
        //     console.log(items,"=================================================");
        // }
        // console.log(items,"=================================================");
    }, [])
    if (dataReceipt) {
        console.log(dataReceipt, "++++++++++++++++++++=================================================");
    }
    return (
        <>
            <div className="xo-container">
                <div className="order-received">
                    <div className="order-received__order-detail">
                        <h3 className="order-received__title-order-detail">
                            LIST ORDER
                        </h3>
                    </div>
                    <table className="table-product">
                        <thead>
                            <tr>
                                <th className="table-product__colum">
                                    Code Recipient
                                </th>
                                <th className="table-product__colum">
                                    Name
                                </th>
                                <th className="table-product__colum">
                                    Phone
                                </th>
                                <th className="table-product__colum">
                                    Address
                                </th>
                                <th className="table-product__colum">
                                    Date Time
                                </th>
                                <th className="table-product__colum">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataReceipt.length && dataReceipt.map((icon) => {
                                    return (
                                        <tr
                                            className="table-product__row-item"
                                        >
                                            <td
                                                className="table-product__value-item table-product__value-item--id-recipient"
                                                data-label="Id Recipient:"
                                            >
                                                <p>{icon && icon.id}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Name:"
                                            >
                                                <p>{icon && icon.name}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Phone:"
                                            >
                                                <p>{icon && icon.phone}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Address:"
                                            >
                                                <p>{icon && icon.address}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Date Time:"
                                            >
                                                <p>{icon && icon.date}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Status:"
                                            >
                                                <p></p>
                                                {
                                                    icon && icon.status == 0 ?
                                                        <p className="table-product__value-status-content table-product__value-status-content--pending">Pending</p>
                                                        : ""
                                                }
                                                {
                                                    icon && icon.status == 1 ?
                                                        <p className="table-product__value-status-content table-product__value-status-content--being-transported">being transported</p>
                                                        : ""
                                                }
                                                {
                                                    icon && icon.status == -1 ?
                                                        <p className="table-product__value-status-content table-product__value-status-content--canceled">canceled</p>
                                                        : ""
                                                }
                                                {
                                                    icon && icon.status == 2 ?
                                                        <p className="table-product__value-status-content table-product__value-status-content--complete">complete</p>
                                                        : ""
                                                }
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {/* <div className="order-received__box-btn-footer">
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
                            Please wait to be contacted to confirm your order.</p>
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

export default Orders;
