import Logo from "../components/logo.js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import APIrequest, { USER_LOGIN, UPDATE_USER } from "../API/callAPI.js";
import { Link, useNavigate } from "react-router-dom";
import { useAccountContext, useCartContext, useWishlistContext } from "../store";
import { useCallback, useState } from "react";

function Signin() {
    const setAccount = useAccountContext()[1];
    const setWishlist = useWishlistContext()[1];
    const [report, setReport] = useState("");
    const navigate = useNavigate();

    const handleSubmit = useCallback(() => {
        const username = document.querySelector("#formBasicUsername").value;
        const password = document.querySelector("#formBasicPassword").value;
        const remember = document.querySelector("#formBasicCheckbox").checked;
        const data = { username, password };
        APIrequest(USER_LOGIN, data).then((response) => {
            setReport("");
            if (response.result === "Success") {
                if (response.data.result === "Success") {
                    let user = response.data.user;
                    setWishlist(user.wishlist);
                    let cart = sessionStorage.getItem("cart");
                    if (cart) {
                        cart = JSON.parse(cart);
                    }
                    if (user.cart && cart) {
                        user.cart = [...user.cart, ...cart];
                    } else if (cart) {
                        user.cart = [...cart];
                    }
                    const newData = {
                        login: "OK",
                        user,
                    };
                    if (remember) {
                        localStorage.setItem("user", JSON.stringify(newData));
                    } else {
                        sessionStorage.setItem("user", JSON.stringify(newData));
                    }
                    APIrequest(UPDATE_USER, user);
                    setAccount(user);
                    navigate("..");
                } else {
                    setReport("Username or Password is wrong");
                }
            } else {
                setReport("Failed to connect database");
            }
        });
    }, [setAccount, setReport]);

    return (
        <div className="section-account">
            <Container>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <div className="d-flex justify-content-center mb-5 mt-5">
                            <Logo />
                        </div>
                        <h2 className="d-flex justify-content-center mb-5">
                            <strong>Good to see you again</strong>
                        </h2>
                        <div className="section-account-form">
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicUsername"
                                >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="Username"
                                        placeholder="Enter Username"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox"
                                >
                                    <Form.Check
                                        type="checkbox"
                                        label="Remember me"
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    className="ma"
                                    onClick={handleSubmit}
                                >
                                    Sign In
                                </Button>
                                or <Link to="../signup">Sign up</Link>
                                <div>{report}</div>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Signin;
