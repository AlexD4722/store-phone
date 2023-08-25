import { Tabs, Tab } from "react-bootstrap";

function DashboardProductTab() {
    return (
        <Tab.Pane eventKey="#product">
            <Tabs
                defaultActiveKey="check"
                transition={true}
                className="mb-3"
                fill
                justify
            >
                <Tab eventKey="check" title="Check product information">
                    svasdfa
                </Tab>
                <Tab eventKey="add" title="Add product">
                    sdasdasd
                </Tab>
                <Tab eventKey="remove" title="Remove product">
                    asdasdas
                </Tab>
                <Tab eventKey="edit" title="Edit product information">
                    sdasfaf
                </Tab>
            </Tabs>
        </Tab.Pane>
    );
}

export default DashboardProductTab;
