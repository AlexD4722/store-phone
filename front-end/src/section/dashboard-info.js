import { useEffect } from "react";
import { Tab } from "react-bootstrap";
import APIrequest, { GET_LASTEST_ORDERS } from "../API/callAPI.js";

function DashboardInfoTab() {
    useEffect(() => {
        const data = {};
        APIrequest(GET_LASTEST_ORDERS, data);
    }, []);

    return (
        <Tab.Pane eventKey="#info">
            <div>Information about website</div>
            <div>Recent orders</div>
        </Tab.Pane>
    );
}

export default DashboardInfoTab;
