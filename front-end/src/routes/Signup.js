import Logo from "../components/logo.js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import APIrequest, { USER_SIGNUP } from "../API/callAPI.js";
import { useState } from "react";

function Signup() {
    const [validated, setValidated] = useState(false);
    const [reEnterValid, setREV] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidated(true);
        const form = e.currentTarget;

        const name = document.querySelector("#formBasicUsername").value;
        const email = document.querySelector("#formBasicEmail").value;
        const pass = document.querySelector("#formBasicPassword").value;
        const reenter = document.querySelector("#formBasicReEnter").value;

        if (pass !== reenter) {           
            setREV(false);
            return;
        }

        if (form.checkValidity()) {
            // const data = {
            //     name,
            //     email,
            //     pass,
            // };
            // APIrequest(USER_SIGNUP, data).then((obj) => {
            //     if (obj.result === "Failed") {
            //         alert("Can't connect to server");
            //     } else {
            //         alert("Successful");
            //     }
            // });
        }
    };

    console.log("re")

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
                            <strong>Sign Up Form</strong>
                        </h2>
                        <div className="section-account-form">
                            <Form
                                onSubmit={(event) => handleSubmit(event)}
                                validated={validated}
                            >
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicUsername"
                                >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter Username"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Enter an username!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter Email"
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicReEnter"
                                >
                                    <Form.Label>Re-enter password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Re-enter Password"
                                        isValid={reEnterValid}
                                    />
                                    <Form.Control.Feedback type="invalid">Mismatch</Form.Control.Feedback>
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    className="ma"
                                    type="submit"
                                >
                                    Sign Up
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Signup;
