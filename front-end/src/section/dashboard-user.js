import { Tabs, Tab } from "react-bootstrap";
import UserInformation from "../components/user-information";

function DashboardUserTab() {
    return (
        <Tab.Pane eventKey="#user">
            <Tabs
                defaultActiveKey="check"
                transition={true}
                className="mb-3"
                fill
                justify
            >
                <Tab eventKey="check" title="Check and edit user information">
                    <UserInformation />
                </Tab>
                <Tab eventKey="add" title="Add an user">
                    sdasdasd
                </Tab>
                <Tab eventKey="remove" title="Remove user">
                    asdasdas
                </Tab>
            </Tabs>
        </Tab.Pane>
    );
}

export default DashboardUserTab;
