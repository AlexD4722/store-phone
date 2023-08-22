import { useEffect, useState } from "react";
import { useCartContext } from "../store/hooks";
import TableProduct from "../components/tableProduct";
import { Col, Row } from "react-bootstrap";

function Cart() {
    const cart = useCartContext()[0];
    console.log(">>>>>>>>>",cart)
    return (
        <>
            <div className="xo-container">
                <Row>
                    <Col xs={12} md={9} lg={9}>
                        <TableProduct items={cart}/>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                        <p></p>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Cart;
