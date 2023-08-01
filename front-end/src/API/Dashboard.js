import { Container, Row, Col, ListGroup, Tab, Navbar } from "react-bootstrap";
import APIrequest, * as action from "../API/callAPI.js";
import { useCallback, useState } from "react";

function Dashboard() {
    const [data, setData] = useState([]);
    const getData = useCallback(() => {
        APIrequest(action.GET_RECEIPTS_BY_CID, { customer_id: 1 })
            .then((obj) => {
                if (obj.result === "Success") {
                    setData(obj.data.receiptArray);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Machic Tech</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end"
                    >
                        <Navbar.Text>Hello, Lam Tran</Navbar.Text>
                        <Navbar.Text>Icon</Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Tab.Container defaultActiveKey="#link1">
                <Row>
                    <Col sm={2}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                Dashboard
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Users
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                                Analytics
                            </ListGroup.Item>
                            <ListGroup.Item
                                action
                                href="#link4"
                                onClick={getData}
                            >
                                Orders
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link5">
                                Employees
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link6">
                                Settings
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">Tab 1</Tab.Pane>
                            <Tab.Pane eventKey="#link2">Tab 2</Tab.Pane>
                            <Tab.Pane eventKey="#link3">Tab 3</Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                {data.map((receipt, index) => {
                                    return (
                                        <ListGroup key={index}>
                                            <ListGroup.Item>
                                                <div>{receipt.id}</div>
                                                <div>{receipt.date}</div>
                                                <div>{receipt.customer_id}</div>
                                                <div>{receipt.status}</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    );
                                })}
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link5">Tab 5</Tab.Pane>
                            <Tab.Pane eventKey="#link6">Tab 6</Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col sm={2}>Hello</Col>
                </Row>
            </Tab.Container>
        </>
    );
}

export default Dashboard;
