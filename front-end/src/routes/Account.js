import Logo from "../components/logo.js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "../styles/account.scss";
import APIrequest, { USER_LOGIN } from "../API/callAPI.js";
import { useRef } from "react";

function Account() {

    const ref1 = useRef();

    const handleSubmit = () => {
        const username = document.querySelector("#formBasicUsername").value;
        const password = document.querySelector("#formBasicPassword").value;
        const remember = document.querySelector("#formBasicCheckbox").checked;
        const data = { username, password };
        APIrequest(USER_LOGIN, data)
        .then(response => {
            if (response.result === "Success"){
                if (remember){
                    localStorage.setItem("userID", response.data.user);
                } else {
                    sessionStorage.setItem("userID", response.data.user);
                }
            } else {
                ref1.current.innerText = "Username and password doesn't match";
            }
        })
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
                                    Submit
                                </Button>
                                <Form.Text className="text-danger" ref={ref1}></Form.Text>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Account;
