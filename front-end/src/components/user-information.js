import { useCallback, useState } from "react";
import { Form, Button } from "react-bootstrap";

function UserInformation() {
    const [disable, setDisable] = useState(true);

    const handleSearch = useCallback((e)=>{
        e.preventDefault();

        setDisable(prev => !prev);
    },[])

    return (
        <>
            <Form onSubmit={(e) =>handleSearch(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the username you need to find"
                    />
                </Form.Group>
                <Button type="submit">Search</Button>
            </Form>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" disabled={disable} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" disabled={disable} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" disabled={disable} />
                </Form.Group>
                <Button type="submit" disabled={disable}>Search</Button>
            </Form>
        </>
    );
}

export default UserInformation;
