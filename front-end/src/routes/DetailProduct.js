import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/detail-product.scss";
import Carousel from "react-bootstrap/Carousel";

import { useEffect, useState } from "react";
import APIrequest, {
    GET_ALL_PRODUCTS,
    SEARCH_ITEM_EXACTLY,
    testAPI,
} from "../API/callAPI";
import { useNavigate, useParams } from "react-router";
import { useDetailProductContext } from "../store/hooks";
function DetailProduct({ match }) {
    const params = useParams();
    // const [Phones, setPhones] = useDetailProductContext();
    const [priceInitall, setPriceInitall] = useState();
    const [priceSelling, setPriceSelling] = useState();
    const [dataRequest, setDataRequest] = useState();
    const [product, SetProduct] = useState([]);
    const [valueQuantity, setValueQuantity] = useState(1);
    const [valueColor, setValueColor] = useState([]);
    const [valueCapacity, setValueCapacity] = useState([]);
    const [selectedOptionColor, setSelectedOptionColor] = useState();
    const [selectedOptionCapacity, setSelectedOptionCapacity] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        let newData = {
            search: params.nameProduct,
        };
        setDataRequest(newData);
        if (newData) {
            APIrequest(SEARCH_ITEM_EXACTLY, newData).then((response) => {
                if (response.result === "Success") {
                    let ListPhones = response.data.productArray;
                    if (ListPhones.length !== 0) {
                        setPriceInitall(
                            ListPhones[0] && ListPhones[0].inital_price
                        );
                        setPriceSelling(
                            ListPhones[0] && ListPhones[0].selling_price
                        );
                    }
                    SetProduct(ListPhones);
                    if (ListPhones[0].color){
                        setValueColor(ListPhones[0].color);
                        setSelectedOptionColor(ListPhones[0].color[0]);
                    }
                    let listCapacity = [];
                    if (ListPhones[0].capacity) {
                        setSelectedOptionCapacity(
                            JSON.parse(ListPhones[0].capacity)[0]
                        );
                        ListPhones.map((phone) => {
                            listCapacity.push(JSON.parse(phone.capacity)[0]);
                            setValueCapacity(listCapacity);
                        });
                    }
                    if (!ListPhones.length) {
                        navigate("../productNotFound");
                    }
                }
            });
        }
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        topFunction();
    }, [params]);
    console.log("0000000000000000000000000", priceInitall);
    // console.log("-------------------------------------------------", JSON.parse(product[0].color)[0])

    const handleChangeQuantity = (event) => {
        const inputValue = event.target.value;
        console.log("value", inputValue);
        if (inputValue < 0) {
            setValueQuantity(1);
        } else {
            setValueQuantity(inputValue);
        }
    };
    const handleIncreseQuantity = (event) => {
        setValueQuantity((prevValue) => prevValue + 1);
    };
    const handleDecreseQuantity = (event) => {
        if (parseInt(valueQuantity) < 0 || !valueQuantity) {
            setValueQuantity(1);
        }
        if (valueQuantity >= 2) {
            setValueQuantity((prevValue) => prevValue - 1);
        }
    };
    const handleChoseOptionColor = (event) => {
        setSelectedOptionColor(event.target.value);
    };
    const handleChoseOptionCapacity = (event) => {
        setSelectedOptionCapacity(event.target.value);
        for (let index = 0; index < product.length; index++) {
            if (JSON.parse(product[index].capacity)[0] === event.target.value) {
                setPriceSelling(product[index].selling_price);
                setPriceInitall(product[index].inital_price);
            }
        }
    };
    return (
        <div className="xo-container">
            <h3>This is product detail</h3>
            <div className="detail-product">
                <div className="detail-product__main-box">
                    <Row xs={1} sm={2}>
                        <Col>
                            <Carousel data-bs-theme="dark" pause={"hover"}>
                                {product[0] &&
                                    product[0].images.map((image, index) => {
                                        return (
                                            <Carousel.Item key={index}>
                                                <div className="detail-product__img-detail">
                                                    <img src={image} alt="" />
                                                </div>
                                            </Carousel.Item>
                                        );
                                    })}
                            </Carousel>
                        </Col>
                        <Col>
                            <form className="detail-product__content-box">
                                <div className="detail-product__name-product">
                                    <h2>{product[0] && product[0].name}</h2>
                                </div>
                                <div className="detail-product__box-review">
                                    <div className="detail-product__list-start">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <div className="detail-product__quantity-review">
                                        <span className="detail-product__quantity-review-detail">
                                            1
                                        </span>
                                        Review
                                    </div>
                                </div>
                                <div className="detail-product__status-stock">
                                    <div className="detail-product__status-icon-check">
                                        <i className="bi bi-check-circle"></i>
                                    </div>
                                    <div className="detail-product__status-stock-running">
                                        <p>in stock</p>
                                    </div>
                                </div>
                                <div className="detail-product__box-price">
                                    <p className="detail-product__price-new">
                                        ${priceSelling}
                                    </p>
                                    <p className="detail-product__price-old">
                                        ${priceInitall}
                                    </p>
                                </div>
                                <div className="detail-product__box-option detail-product__box-option--color">
                                    <p>
                                        Color:{" "}
                                        <span className="detail-product__name-option">
                                            {selectedOptionColor}
                                        </span>
                                    </p>
                                    <div className="detail-product__box-list-option">
                                        {valueColor &&
                                            valueColor.map(
                                                (colorItem, index) => {
                                                    return (
                                                        <label key={index}>
                                                            <input
                                                                type="radio"
                                                                name="color"
                                                                value={
                                                                    colorItem
                                                                }
                                                                onChange={
                                                                    handleChoseOptionColor
                                                                }
                                                                checked={
                                                                    selectedOptionColor ===
                                                                    colorItem
                                                                }
                                                            />
                                                            <span>
                                                                {colorItem}
                                                            </span>
                                                        </label>
                                                    );
                                                }
                                            )}
                                    </div>
                                </div>
                                {valueCapacity.length !== 0 && (
                                    <div className="detail-product__box-option detail-product__box-option--capacity">
                                        <p>
                                            Capacity:{" "}
                                            <span className="detail-product__name-option">
                                                {selectedOptionCapacity}
                                            </span>
                                        </p>
                                        <div className="detail-product__box-list-option">
                                            {valueCapacity &&
                                                valueCapacity.map(
                                                    (capacityItem, index) => {
                                                        return (
                                                            <label key={index}>
                                                                <input
                                                                    type="radio"
                                                                    name="capacity"
                                                                    value={
                                                                        capacityItem
                                                                    }
                                                                    onChange={
                                                                        handleChoseOptionCapacity
                                                                    }
                                                                    checked={
                                                                        selectedOptionCapacity ===
                                                                        capacityItem
                                                                    }
                                                                />
                                                                <span>
                                                                    {
                                                                        capacityItem
                                                                    }
                                                                </span>
                                                            </label>
                                                        );
                                                    }
                                                )}
                                        </div>
                                    </div>
                                )}
                                <div className="detail-product__info-quantity">
                                    <div className="detail-product__info-top">
                                        <div className="detail-product__info-quantity-detail">
                                            <div
                                                className="detail-product__btn-dash-quantity"
                                                onClick={handleDecreseQuantity}
                                            ></div>
                                            <input
                                                type="number"
                                                name="quantity"
                                                min="0"
                                                step="1"
                                                onChange={handleChangeQuantity}
                                                value={valueQuantity}
                                            />
                                            <div
                                                className="detail-product__btn-plus-quantity"
                                                onClick={handleIncreseQuantity}
                                            ></div>
                                        </div>
                                        <div className="detail-product__btn-add-cart">
                                            <button type="submit">
                                                <span className="detail-product__btn-add-cart-content">
                                                    Add to cart
                                                </span>
                                            </button>
                                        </div>
                                        <div className="detail-product__btn-add-wishlist">
                                            <button type="button">
                                                <span className="detail-product__btn-add-wishlist-icon">
                                                    <i className="bi bi-heart"></i>
                                                </span>
                                                <span className="detail-product__btn-add-wishlist-content">
                                                    Add to wishlist
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="detail-product__info-bottom">
                                        <div className="detail-product__info-delivery">
                                            <i className="bi bi-box-seam"></i>
                                            <strong> 2-day Delivery</strong>
                                        </div>
                                        <div className="detail-product__info-delivery-slogan">
                                            <p>
                                                speedy and reliable parcel
                                                delivery!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
                <div className="detail-product__sub-info-item">
                    <div className="detail-product__title-comp-sub-info">
                        <h3>Description</h3>
                    </div>
                    <div className="detail-product__content-sub-info">
                        {/* <div className='detail-product__intro-item'>
                            <p>The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.</p>
                        </div> */}
                        <div className="detail-product__key-feature-item">
                            <p>Key Features:</p>
                            <ul>
                                {product[0] &&
                                    product[0].description &&
                                    product[0].description.map((item) => {
                                        return <li>{item}</li>;
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;
