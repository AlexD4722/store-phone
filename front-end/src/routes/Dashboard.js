import { Row, Col, ListGroup, Tab, Navbar } from "react-bootstrap";
import APIrequest, * as action from "../API/callAPI.js";
import { useCallback, useState } from "react";

function Dashboard() {
    const [data, setData] = useState([]);

    return (
        <>
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
                                Products
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link4">
                                Orders
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link5">
                                Settings
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                Information about website
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                User functions
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                Product functions
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                Order function
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link5">Settings</Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col sm={2}>Hello</Col>
                </Row>
            </Tab.Container>
        </>
    );
}

export default Dashboard;
