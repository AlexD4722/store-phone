import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import APIrequest, { ADD_NEW_PRODUCT_LINE } from "../API/callAPI";
import { Link } from "react-router-dom";

function AddNewProductLineForm() {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [type, setType] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            brand,
            type,
        };
        APIrequest(ADD_NEW_PRODUCT_LINE, data).then((obj) => {
            setResult("");
            if (obj.result === "Failed") {
                setResult("Database error");
            } else if (obj.data.result === "Success") {
                setResult("Add new product line successfully");
            } else {
                setResult("Unknown error");
            }
        });
    };

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Button>
                <Link to="../wish-list">Add product</Link>
            </Button>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter product type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
            </Form.Group>
            <Button type="submit">Submit</Button>
            {result && <div>{result}</div>}
        </Form>
    );
}

export default AddNewProductLineForm;
