import Logo from "../components/logo.js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import APIrequest, { USER_LOGIN, testAPI } from "../API/callAPI.js";
import { Link, useNavigate } from "react-router-dom";
import { useAccountContext } from "../store";
import { useState } from "react";

function Signin() {
    const setAccount = useAccountContext()[1];
    const [report, setReport] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        const username = document.querySelector("#formBasicUsername").value;
        const password = document.querySelector("#formBasicPassword").value;
        const remember = document.querySelector("#formBasicCheckbox").checked;
        const data = { username, password };
        APIrequest(USER_LOGIN, data).then((response) => {
            setReport("");
            if (response.result === "Success") {
                if (response.data.result == "Success") {
                    const user = response.data;
                    const data = {
                        login : "OK",
                        user
                    }
                    if (remember) {
                        localStorage.setItem("user", JSON.stringify(data));
                    } else {
                        sessionStorage.setItem("user", JSON.stringify(data));
                    }
                    setAccount(user);     
                    navigate("..");
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
