import { Button, Container, Row, Col, Badge, Card } from "react-bootstrap";
import {
    useAccountContext,
    useCartContext,
    useWishlistContext,
} from "../store";
import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";

function Account() {
    const [account, setAccount] = useAccountContext();
    const setWishlist = useWishlistContext()[1];
    const dispatchCart = useCartContext()[1];
    const navigate = useNavigate();

    const handleSignOut = useCallback(() => {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");
        }
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("cart");
        setAccount({});
        setWishlist([]);
        const action = { type: "replace", payload: [] };
        dispatchCart(action);
        navigate("..");
    }, []);

    console.log(account)
    return (
        <>
            <Container>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <h1 className="text-center">
                            Account Information
                        </h1>
                        {Object.keys(account).length > 0 && (
                            <>
                                <Card className="text-center">
                                    <Card.Body>
                                        <Card.Title>
                                            <Badge pill bg="secondary">
                                                {account.username}
                                            </Badge>
                                        </Card.Title>
                                        <Card.Text>
                                            User type: {account.user_type}
                                        </Card.Text>
                                        <Card.Text>
                                            Email: {account.email}
                                        </Card.Text>
                                        <Card.Text>
                                            Address: {account.address}
                                        </Card.Text>
                                        <Card.Text>
                                            Phone number: {account.phone}
                                        </Card.Text>
                                        {account.user_type === "admin" && (
                                            <Link
                                                to="admin-dashboard"
                                                className="d-flex justify-content-center text-primary"
                                            >
                                                Go to Admin Dashboard
                                            </Link>
                                        )}
                                        {Object.keys(account).length > 0 && (
                                            <Button onClick={handleSignOut}>
                                                Sign out
                                            </Button>
                                        )}
                                    </Card.Body>
                                </Card>
                            </>
                        )}
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </>
    );
}

export default Account;
