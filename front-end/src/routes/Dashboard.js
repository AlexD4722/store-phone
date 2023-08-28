import { Row, Col, ListGroup, Tab } from "react-bootstrap";
import DashboardUserTab from "../section/dashboard-user.js";
import DashboardInfoTab from "../section/dashboard-info.js";
import DashboardProductTab from "../section/dashboard-product.js";
import DashboardOrderTab from "../section/dashboard-order.js";
import DashboardSettingTab from "../section/dashboard-setting.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccountData from "../components/account-data.js";

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const userStatus = JSON.parse(sessionStorage.getItem("user"));
        if (!userStatus || userStatus.login != "OK") {
            navigate("404notfound");
        }
    }, [navigate]);

    return (
        <>
            <Tab.Container defaultActiveKey="#info" mountOnEnter unmountOnExit>
                <Row>
                    <Col sm={2}>
                        <ListGroup>
                            <ListGroup.Item action href="#info">
                                INFO
                            </ListGroup.Item>
                            <ListGroup.Item action href="#user">
                                Users
                            </ListGroup.Item>
                            <ListGroup.Item action href="#product">
                                Products
                            </ListGroup.Item>
                            <ListGroup.Item action href="#order">
                                Orders
                            </ListGroup.Item>
                            <ListGroup.Item action href="#setting">
                                Settings
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <DashboardInfoTab />
                            <DashboardUserTab />
                            <DashboardProductTab />
                            <DashboardOrderTab />
                            <DashboardSettingTab />
                        </Tab.Content>
                    </Col>
                    <Col sm={2}>
                        <AccountData />
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}

export default Dashboard;
