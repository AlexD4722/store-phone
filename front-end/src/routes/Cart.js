import { useEffect, useState } from "react";
import { useCartContext } from "../store/hooks";
import TableProduct from "../components/tableProduct";
import { Col, Row } from "react-bootstrap";

function Cart() {
    const cart = useCartContext()[0];
    console.log(">>>>>>>>>", cart)
    return (
        <>
            <div className="xo-container">
                <Row>
                    <Col xs={12}>
                        <TableProduct items={cart} />
                    </Col>
                    {/* <Col xs={12} md={3} lg={3}>
                        <div className="cart-totals">
                            <div className="cart-totals__title-box">
                                <h3>
                                    Cart totals
                                </h3>
                            </div>
                            <div className="cart-totals__main-content">
                                <div className="cart-totals__box-comp">
                                    <div className="cart-totals__name-comp">
                                        <h4>address</h4>
                                    </div>
                                    <div className="cart-totals__text-area">
                                        <textarea cols="0" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="cart-totals__box-comp">
                                    <div className="cart-totals__name-comp cart-totals__name-comp--total">
                                        <h4>Total</h4>
                                        <div className="cart-totals__total-price">
                                            <p><span>$</span>100</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </div>
        </>
    );
}

export default Cart;
