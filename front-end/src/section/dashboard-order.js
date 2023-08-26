import { Tabs, Tab } from "react-bootstrap";
import OrderCheck from "../components/order-check.js";
import OrderAdd from "../components/order-add.js";
import OrderEdit from "../components/order-edit.js";
import OrderRemove from "../components/order-remove.js";

function DashboardOrderTab() {
    return (
        <Tab.Pane eventKey="#order">
            <Tabs
                defaultActiveKey="check"
                transition={true}
                className="mb-3"
                fill
                justify
            >
                <Tab eventKey="check" title="Check order information">
                    <OrderCheck />
                </Tab>
                <Tab eventKey="add" title="Add order">
                    <OrderAdd />
                </Tab>
                <Tab eventKey="edit" title="Edit order">
                    <OrderEdit />
                </Tab>
                <Tab eventKey="remove" title="Remove order">
                    <OrderRemove />
                </Tab>
            </Tabs>
        </Tab.Pane>
    );
}

export default DashboardOrderTab;
