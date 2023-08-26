import { Tabs, Tab } from "react-bootstrap";
import ProductCheck from "../components/product-check";
import ProductAdd from "../components/product-add";
import ProductAddLine from "../components/product-add-line";
import ProductEdit from "../components/product-edit";

function DashboardProductTab() {
    return (
        <Tab.Pane eventKey="#product">
            <Tabs
                defaultActiveKey="check"
                transition={true}
                className="mb-3"
                fill
                justify
                mountOnEnter
                unmountOnExit
            >
                <Tab eventKey="check" title="Check product info">
                    <ProductCheck />
                </Tab>
                <Tab eventKey="add" title="Add product">
                    <ProductAdd />
                </Tab>
                <Tab eventKey="addPL" title="Add product line">
                    <ProductAddLine />
                </Tab>
                <Tab eventKey="remove" title="Edit product info">
                    <ProductEdit />
                </Tab>
                <Tab eventKey="edit" title="Remove product">
                    sdasfaf
                </Tab>
            </Tabs>
        </Tab.Pane>
    );
}

export default DashboardProductTab;
