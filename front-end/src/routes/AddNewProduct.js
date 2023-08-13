import Logo from "../components/logo.js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import APIrequest, {
    GET_ALL_PRODUCT_LINE,
    ADD_NEW_PRODUCT,
} from "../API/callAPI.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AddNewProductForm() {
    const [name, setName] = useState("");
    const [initalPrice, setInitalPrice] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [images, setImages] = useState("");
    const [quantity, setQuantity] = useState("");
    const [productLine, setProductLine] = useState("");
    const [description, setDescription] = useState(["..."]);
    const [color, setColor] = useState(["Red"]);
    const [capacity, setCapacity] = useState(["64GB"]);
    const [productLines, setProductLines] = useState([]);
    const [result, setResult] = useState("");

    useEffect(() => {
        APIrequest(GET_ALL_PRODUCT_LINE, {}).then((obj) => {
            if (obj.result === "Success" && obj.data.result === "Found") {
                setProductLines(obj.data.linesArr);
            }
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            initalPrice,
            sellingPrice,
            images,
            quantity,
            productLine: "iPhone",
            description,
            color,
            capacity,
        };
        console.log(data);
        APIrequest(ADD_NEW_PRODUCT, data).then((obj) => {
            if (obj.result === "Failed") {
                setResult("Database error");
            } else if (obj.data.result === "Success") {
                setResult("Add new product successfully");
            } else {
                setResult("Unknown error");
            }
        });
    };

    return (
        <Container>
            <Row>
                <Col xs={4}></Col>
                <Col xs={4}>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Logo />
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Inital Price</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Inital Price"
                                value={initalPrice}
                                onChange={(e) => setInitalPrice(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicSelling Price"
                        >
                            <Form.Label>Selling Price</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Selling Price"
                                value={sellingPrice}
                                onChange={(e) =>
                                    setSellingPrice(e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image folder</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter image folder"
                                value={images}
                                onChange={(e) => setImages(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Label>
                            Product Line
                            <Button>
                                <Link to="product-line">
                                    <strong>Add new product line</strong>
                                </Link>
                            </Button>
                        </Form.Label>
                        <Form.Select
                            onChange={(e) => setProductLine(e.target.value)}
                        >
                            <option>Choose product line</option>
                            {productLines.map((value, index) => {
                                return (
                                    <option value={value.name} key={index}>
                                        {value.name}
                                    </option>
                                );
                            })}
                        </Form.Select>
                        <Form.Group className="mb-3">
                            <Form.Label>Color</Form.Label>
                            {color.map((value, index) => {
                                return (
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter color"
                                        value={value}
                                        key={index}
                                        onChange={(e) =>
                                            setColor((prev) => {
                                                let now = [...prev];
                                                now[index] = e.target.value;
                                                return now;
                                            })
                                        }
                                    />
                                );
                            })}
                            <Button
                                onClick={() => {
                                    setColor((prev) => {
                                        return [...prev, "Red"];
                                    });
                                }}
                            >
                                Add
                            </Button>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Capacity</Form.Label>
                            {capacity.map((value, index) => {
                                return (
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter capacity"
                                        value={value}
                                        key={index}
                                        onChange={(e) =>
                                            setCapacity((prev) => {
                                                let now = [...prev];
                                                now[index] = e.target.value;
                                                return now;
                                            })
                                        }
                                    />
                                );
                            })}
                            <Button
                                onClick={() => {
                                    setCapacity((prev) => {
                                        return [...prev, "64GB"];
                                    });
                                }}
                            >
                                Add
                            </Button>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Key feature</Form.Label>
                            {description.map((value, index) => {
                                return (
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter description"
                                        value={value}
                                        key={index}
                                        onChange={(e) =>
                                            setDescription((prev) => {
                                                let now = [...prev];
                                                now[index] = e.target.value;
                                                return now;
                                            })
                                        }
                                    />
                                );
                            })}
                            <Button
                                onClick={() => {
                                    setDescription((prev) => {
                                        return [...prev, "64GB"];
                                    });
                                }}
                            >
                                Add
                            </Button>
                        </Form.Group>
                        <Button variant="primary" className="ma" type="submit">
                            Submit
                        </Button>
                        {result && <div>{result}</div>}
                    </Form>
                </Col>
                <Col xs={4}></Col>
            </Row>
        </Container>
    );
}

export default AddNewProductForm;
