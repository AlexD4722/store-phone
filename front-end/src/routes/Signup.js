import Logo from "../components/logo.js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import APIrequest, { USER_SIGNUP, testAPI } from "../API/callAPI.js";
import { useCallback, useState } from "react";

function Signup() {
    const [validated, setValidated] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [reenter, setReenter] = useState("");

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            setValidated({});
            setName((prev) => prev.trim());
            setEmail((prev) => prev.trim());
            setPass((prev) => prev.trim());
            setReenter((prev) => prev.trim());

            let stop = false;

            if (name.length < 6) {
                setValidated((prev) => {
                    return {
                        ...prev,
                        name: "Name is invalid",
                    };
                });
                stop = true;
            }
            if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                setValidated((prev) => {
                    return {
                        ...prev,
                        email: "Email is invalid",
                    };
                });
                stop = true;
            }
            if (pass !== reenter) {
                setValidated((prev) => {
                    return {
                        ...prev,
                        pass: "You need to re-enter password correctly",
                    };
                });
                stop = true;
            }
            if (stop) {
                return;
            }
            const data = { username: name, password: pass, email: email };
            APIrequest(USER_SIGNUP, data).then(obj => {
                if (obj.result === "Failed"){
                    setValidated((prev) => {
                        return {
                            ...prev,
                            database: "Database error. Retry later"
                        }
                    })
                } else if (obj.data.error){
                    setValidated((prev) => {
                        return {
                            ...prev,
                            error: obj.data.error
                        }
                    })
                } else {
                    window.location.href = "/signup/success";
                }
            })
        },
        [email, name, pass, reenter]
    );

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
                            <Form onSubmit={(event) => handleSubmit(event)}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicUsername"
                                >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter Username"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                {validated.name && (
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="hidden"
                                            isInvalid={true}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {validated.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                )}
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                {validated.email && (
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="hidden"
                                            isInvalid={true}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {validated.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                )}
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Password"
                                        value={pass}
                                        onChange={(e) =>
                                            setPass(e.target.value)
                                        }
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
                                        value={reenter}
                                        onChange={(e) =>
                                            setReenter(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                {validated.pass && (
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="hidden"
                                            isInvalid={true}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {validated.pass}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                )}
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
