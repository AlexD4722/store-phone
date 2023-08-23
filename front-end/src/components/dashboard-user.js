import { Tabs, Tab, Form, Button } from "react-bootstrap";

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
                <Tab eventKey="check" title="Check user information">
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter the username you need to find"
                            />
                        </Form.Group>
                        <Button type="submit">Search</Button>
                    </Form>
                </Tab>
                <Tab eventKey="edit" title="Edit user information">
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
