import { Form, Button } from "react-bootstrap";
import { useState } from "react";

function UserAdd() {

    const [user, setUser] = useState({})
    const [result, setResult] = useState("");

    const handleAdd = (e) => {
        
    }

    return (
        <>
            <Form onSubmit={(e) => handleAdd(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                    
                        value={user.username}
                        onChange={(e) =>
                            setUser((prev) => {
                                return { ...prev, username: e.target.value };
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                    
                        value={user.email}
                        onChange={(e) =>
                            setUser((prev) => {
                                return { ...prev, email: e.target.value };
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="number"
                    
                        value={user.phone}
                        onChange={(e) =>
                            setUser((prev) => {
                                return { ...prev, phone: e.target.value };
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                    
                        value={user.address}
                        onChange={(e) =>
                            setUser((prev) => {
                                return { ...prev, address: e.target.value };
                            })
                        }
                    />
                </Form.Group>
                {result && <div className="text-danger">{result}</div>}
                <Button type="submit">
                    Add
                </Button>
            </Form>
        </>
    );
}

export default UserAdd;
