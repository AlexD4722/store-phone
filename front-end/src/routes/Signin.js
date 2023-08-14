import Logo from "../components/logo.js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import APIrequest, { USER_LOGIN } from "../API/callAPI.js";
import { Link } from "react-router-dom";
import { useAccountContext } from "../store";
import { useState } from "react";

function Signin() {
    const [account, setAccount] = useAccountContext();
    const [report, setReport] = useState("");

    const handleSubmit = () => {
        const username = document.querySelector("#formBasicUsername").value;
        const password = document.querySelector("#formBasicPassword").value;
        const remember = document.querySelector("#formBasicCheckbox").checked;
        const data = { username, password };
        APIrequest(USER_LOGIN, data).then((response) => {
            setReport("");
            if (response.result === "Success") {
                if (response.data.result == "Success") {
                    if (remember) {
                        localStorage.setItem("userID", response.data.userID);
                    } else {
                        sessionStorage.setItem("userID", response.data.userID);
                    }
                    setAccount({
                        userID: response.data.userID,
                        username: response.data.username,
                        email: response.data.email,
                        userType: response.data.user_type,
                    });
                } else {
                    setReport("Username or Password is wrong");
                }
            } else {
                setReport("Failed to connect database");
            }
        });
    };

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
