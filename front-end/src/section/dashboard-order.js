import { Tabs, Tab } from "react-bootstrap";

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
                    svasdfa
                </Tab>
                <Tab eventKey="add" title="Add order">
                    sdasdasd
                </Tab>
                <Tab eventKey="remove" title="Remove order">
                    asdasdas
                </Tab>
                <Tab eventKey="edit" title="Edit order">
                    sdasfaf
                </Tab>
            </Tabs>
        </Tab.Pane>
    );
}

export default DashboardOrderTab;
