import { useParams } from "react-router";
import { useSearchContext } from "../store";
import { useEffect, useState } from "react";
import APIrequest, { FIlTER_PRODUCT, testAPI } from "../API/callAPI";

// import React, { useEffect, useState } from 'react';
import "../styles/sort-product.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Product from "../components/product-card";
import PaginationPage from "../components/pagination";

function Search() {
    const params = useParams();
    const setSearch = useSearchContext()[1];
    const [data, setData] = useState([]);
    const [Phones, setPhones] = useState([""]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);
    const [isChecked, setIsChecked] = useState({
        inputPhone: false,
        inputLaptop: false,
        inputTablet: false,
        inputHeadphone: false,
        inputApple: false,
        inputSamSung: false,
        inputXiaomi: false,
    });

    const handleInputChangeMinPrice = (event) => {
        setMinPrice(event.target.value);
    };
    const handleInputChangeMaxPrice = (event) => {
        setMaxPrice(event.target.value);
    };

    function handleOpenFilterMobile() {
        const layout = document.querySelector(".filter-mobile-layout");
        const menuExtend = document.querySelector(".filter-mobile");
        layout.style.display = "block";
        menuExtend.style.transform = "translateX(0)";
    }
    function handleCloseFilterMobile() {
        const layout = document.querySelector(".filter-mobile-layout");
        const menuExtend = document.querySelector(".filter-mobile");
        layout.style.display = "none";
        menuExtend.style.transform = "translateX(-100%)";
    }

    useEffect(() => {
        const rangeInput = document.querySelectorAll(
            ".side-part-filter__price-ranger input"
        );
        const priceInput = document.querySelectorAll(
            ".side-part-filter__price-input input"
        );
        const progress = document.querySelector(
            ".side-part-filter__price-progress"
        );
        const priceGap = 1000;
        rangeInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minVal = parseInt(rangeInput[0].value);
                let maxVal = parseInt(rangeInput[1].value);
                if (maxVal - minVal < priceGap) {
                    if (
                        e.target.className ===
                        "side-part-filter__price-ranger-min"
                    ) {
                        rangeInput[0].value = maxVal - priceGap;
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                    }
                } else {
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    progress.style.left =
                        (minVal / rangeInput[0].max) * 100 + "%";
                    progress.style.right =
                        100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });
        priceInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                if (!e.target.value) {
                    rangeInput[0].value = "0";
                }
                let minVal = parseInt(priceInput[0].value);
                let maxVal = parseInt(priceInput[1].value);
                if (
                    maxVal - minVal >= priceGap &&
                    maxVal <= 10000 &&
                    minVal >= 0
                ) {
                    if (e.target.className === "side-part-filter__price-from") {
                        rangeInput[0].value = minVal;
                        progress.style.left =
                            (minVal / rangeInput[0].max) * 100 + "%";
                    } else {
                        rangeInput[1].value = maxVal;
                        progress.style.right =
                            100 - (maxVal / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });
    }, []);

    useEffect(() => {
        let newData = [...data, params.keyword];
        setData(newData);
        APIrequest(FIlTER_PRODUCT, newData).then((obj) => {
            setPhones(obj.data.productArray);
        });
        switch (params.keyword) {
            case "phone":
                setIsChecked((prev) => {
                    return {
                        inputPhone: true,
                        inputLaptop: false,
                        inputTablet: false,
                        inputHeadphone: false,
                        inputApple: false,
                        inputSamSung: false,
                        inputXiaomi: false,
                    };
                });
                break;
            case "tablet":
                setIsChecked((prev) => {
                    return {
                        inputPhone: false,
                        inputLaptop: false,
                        inputTablet: true,
                        inputHeadphone: false,
                        inputApple: false,
                        inputSamSung: false,
                        inputXiaomi: false,
                    };
                });
                break;

            default:
                break;
        }
    }, [params.keyword]);

    const handleCheckboxChange = (event) => {
        setIsChecked((prev) => {
            return {
                ...prev,
                [event.target.id]: event.target.checked,
            };
            // prev[event.target.id] = event.target.checked;
            // return prev
        });
        // if(isChecked[event.target.id]){
        // }
    };
    const arrayinput = Object.keys(isChecked);
    useEffect(() => {
        let newData = [...data];
        for (let index = 0; index < arrayinput.length; index++) {
            switch (arrayinput[index]) {
                case "inputPhone":
                    if (
                        isChecked[arrayinput[index]] &&
                        !newData.includes("phone")
                    ) {
                        newData.push("phone");
                        setData(newData);
                    } else if (
                        !isChecked[arrayinput[index]] &&
                        newData.includes("phone")
                    ) {
                        newData.splice(newData.indexOf("phone"), 1);
                        setData(newData);
                    }
                    break;
                case "inputTablet":
                    if (
                        isChecked[arrayinput[index]] &&
                        !newData.includes("tablet")
                    ) {
                        newData.push("tablet");
                        setData(newData);
                    } else if (
                        !isChecked[arrayinput[index]] &&
                        newData.includes("tablet")
                    ) {
                        newData.splice(newData.indexOf("tablet"), 1);
                        setData(newData);
                    }
                    break;
                default:
                    break;
            }
        }
        APIrequest(FIlTER_PRODUCT, newData).then((obj) => {
            setPhones(obj.data.productArray);
        });
    }, [isChecked, params.keyword]);
    console.log(Phones);    
    return (
        <>
            Search result for {params.keyword}
            <div className="header-sort">
                <Row>
                    <Col
                        md={3}
                        lg={3}
                        className="header-sort__result-count-wrapper"
                    >
                        <div className="header-sort__result-count">
                            <p>Showing 1–16 of 66 results</p>
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={9}
                        lg={9}
                        className="header-sort__box-selector"
                    >
                        <div className="header-sort__wrapper-selector">
                            <div
                                onClick={(e) => handleOpenFilterMobile()}
                                className="header-sort__btn-filter"
                            >
                                <button type="button">
                                    <i className="bi bi-funnel"></i>
                                    <span>filter product</span>
                                </button>
                            </div>
                            <Dropdown>
                                <div className="header-sort__btn-selector">
                                    <Dropdown.Toggle type="button">
                                        <span className="header-sort__btn-selector-detail">
                                            Sort by popularity
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <ul className="header-sort__list-selector">
                                            <li className="header-sort__list-selector-detail">
                                                Sort by popularity
                                            </li>
                                            <li className="header-sort__list-selector-detail">
                                                Sort by price: low to high
                                            </li>
                                            <li className="header-sort__list-selector-detail">
                                                Sort by price: high to low
                                            </li>
                                            <li className="header-sort__list-selector-detail">
                                                Sort by name: a - z
                                            </li>
                                            <li className="header-sort__list-selector-detail">
                                                Sort by name: z - a
                                            </li>
                                        </ul>
                                    </Dropdown.Menu>
                                </div>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col md={3} lg={3} className="side-part-filter">
                    <form>
                        <div className="side-part-filter__widget">
                            <h4 className="side-part-filter__widget-title">
                                Product Categories
                            </h4>
                            <div className="side-part-filter__widget-checkbox-list">
                                <ul>
                                    <li className="filter-item">
                                        <label>
                                            <input
                                                id="inputPhone"
                                                className="filter-item__checkbox"
                                                checked={isChecked.inputPhone}
                                                onChange={handleCheckboxChange}
                                                type="checkbox"
                                            />
                                            <span className="filter-item__name">
                                                phone
                                            </span>
                                            <span className="filter-item__custom-checkbox">
                                                <i className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                    <li className="filter-item">
                                        <label>
                                            <input
                                                id="inputLaptop"
                                                className="filter-item__checkbox"
                                                checked={isChecked.inputLaptop}
                                                onChange={handleCheckboxChange}
                                                type="checkbox"
                                            />
                                            <span className="filter-item__name">
                                                laptop
                                            </span>
                                            <span className="filter-item__custom-checkbox">
                                                <i className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                    <li className="filter-item">
                                        <label>
                                            <input
                                                id="inputTablet"
                                                className="filter-item__checkbox"
                                                checked={isChecked.inputTablet}
                                                onChange={handleCheckboxChange}
                                                type="checkbox"
                                            />
                                            <span className="filter-item__name">
                                                tablet
                                            </span>
                                            <span className="filter-item__custom-checkbox">
                                                <i className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                    <li className="filter-item">
                                        <label>
                                            <input
                                                className="filter-item__checkbox"
                                                type="checkbox"
                                            />
                                            <span className="filter-item__name">
                                                headphone
                                            </span>
                                            <span className="filter-item__custom-checkbox">
                                                <i className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="side-part-filter__widget">
                            <h4 className="side-part-filter__widget-title">
                                Product Status
                            </h4>
                            <div className="side-part-filter__widget-checkbox-list">
                                <ul>
                                    <li className="filter-item">
                                        <label>
                                            <input
                                                className="filter-item__checkbox"
                                                type="checkbox"
                                            />
                                            <span className="filter-item__name">
                                                Apple
                                            </span>
                                            <span className="filter-item__custom-checkbox">
                                                <i className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                    <li className="filter-item">
                                        <label>
                                            <input
                                                className="filter-item__checkbox"
                                                type="checkbox"
                                            />
                                            <span className="filter-item__name">
                                                samsung
                                            </span>
                                            <span className="filter-item__custom-checkbox">
                                                <i className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                    <li className="filter-item">
                                        <label>
                                            <input
                                                className="filter-item__checkbox"
                                                type="checkbox"
                                            />
                                            <span className="filter-item__name">
                                                xiaomi
                                            </span>
                                            <span className="filter-item__custom-checkbox">
                                                <i className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="side-part-filter__widget">
                            <h4 className="side-part-filter__widget-title">
                                Filter by price
                            </h4>
                            <div className="side-part-filter__widget-checkbox-list">
                                <div className="side-part-filter__wrapper-price">
                                    <div className="side-part-filter__price-input">
                                        <span className="side-part-filter__price-currency">
                                            $
                                        </span>
                                        <input
                                            className="side-part-filter__price-from"
                                            type="number"
                                            value={minPrice}
                                            onChange={handleInputChangeMinPrice}
                                        />
                                    </div>
                                    <span>to</span>
                                    <div className="side-part-filter__price-input">
                                        <span className="side-part-filter__price-currency">
                                            $
                                        </span>
                                        <input
                                            className="side-part-filter__price-to"
                                            type="number"
                                            value={maxPrice}
                                            onChange={handleInputChangeMaxPrice}
                                        />
                                    </div>
                                </div>
                                <div className="side-part-filter__price-slider">
                                    <div className="side-part-filter__price-progress"></div>
                                    <div className="side-part-filter__price-ranger">
                                        <input
                                            type="range"
                                            className="side-part-filter__price-ranger-min"
                                            min="0"
                                            max="10000"
                                            value={minPrice}
                                            onChange={handleInputChangeMinPrice}
                                        />
                                        <input
                                            type="range"
                                            className="side-part-filter__price-ranger-max"
                                            min="0"
                                            max="10000"
                                            value={maxPrice}
                                            onChange={handleInputChangeMaxPrice}
                                        />
                                    </div>
                                </div>
                                <div className="side-part-filter__btn-filter-wrapper">
                                    <button
                                        className="side-part-filter__btn-filter"
                                        type="button"
                                    >
                                        <span className="side-part-filter__btn-filter-content">
                                            filter
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </Col>
                <Col xs={12} sm={12} md={9} lg={9} className="product-filter">
                    <Row xs={1} sm={2} md={3} lg={4}>
                        {
                            Phones.map((phone) => {
                                return (
                                    <Col key={phone.id}>
                                        <Product
                                            product={phone}
                                        />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <PaginationPage />
                </Col>
            </Row>
            <div className="filter-mobile">
                <div className="filter-mobile__header">
                    <h3>filter product</h3>
                    <div
                        onClick={() => handleCloseFilterMobile()}
                        className="filter-mobile__icon-close"
                    >
                        <i className="bi bi-x"></i>
                    </div>
                </div>
                <form>
                    <div className="side-part-filter__widget">
                        <h4 className="side-part-filter__widget-title">
                            Product Categories
                        </h4>
                        <div className="side-part-filter__widget-checkbox-list">
                            <ul>
                                <li className="filter-item">
                                    <label>
                                        <input
                                            className="filter-item__checkbox"
                                            type="checkbox"
                                        />
                                        <span className="filter-item__name">
                                            phone
                                        </span>
                                        <span className="filter-item__custom-checkbox">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                                <li className="filter-item">
                                    <label>
                                        <input
                                            className="filter-item__checkbox"
                                            type="checkbox"
                                        />
                                        <span className="filter-item__name">
                                            laptop
                                        </span>
                                        <span className="filter-item__custom-checkbox">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                                <li className="filter-item">
                                    <label>
                                        <input
                                            className="filter-item__checkbox"
                                            type="checkbox"
                                        />
                                        <span className="filter-item__name">
                                            tablet
                                        </span>
                                        <span className="filter-item__custom-checkbox">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                                <li className="filter-item">
                                    <label>
                                        <input
                                            className="filter-item__checkbox"
                                            type="checkbox"
                                        />
                                        <span className="filter-item__name">
                                            headphone
                                        </span>
                                        <span className="filter-item__custom-checkbox">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                                <li className="filter-item">
                                    <label>
                                        <input
                                            className="filter-item__checkbox"
                                            type="checkbox"
                                        />
                                        <span className="filter-item__name">
                                            tv
                                        </span>
                                        <span className="filter-item__custom-checkbox">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="side-part-filter__widget">
                        <h4 className="side-part-filter__widget-title">
                            Product Status
                        </h4>
                        <div className="side-part-filter__widget-checkbox-list">
                            <ul>
                                <li className="filter-item">
                                    <label>
                                        <input
                                            className="filter-item__checkbox"
                                            type="checkbox"
                                        />
                                        <span className="filter-item__name">
                                            Apple
                                        </span>
                                        <span className="filter-item__custom-checkbox">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                                <li className="filter-item">
                                    <label>
                                        <input
                                            className="filter-item__checkbox"
                                            type="checkbox"
                                        />
                                        <span className="filter-item__name">
                                            samsung
                                        </span>
                                        <span className="filter-item__custom-checkbox">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                                <li className="filter-item">
                                    <label>
                                        <input
                                            className="filter-item__checkbox"
                                            type="checkbox"
                                        />
                                        <span className="filter-item__name">
                                            xiaomi
                                        </span>
                                        <span className="filter-item__custom-checkbox">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="side-part-filter__widget">
                        <h4 className="side-part-filter__widget-title">
                            Filter by price
                        </h4>
                        <div className="side-part-filter__widget-checkbox-list">
                            <div className="side-part-filter__wrapper-price">
                                <div className="side-part-filter__price-input">
                                    <span className="side-part-filter__price-currency">
                                        $
                                    </span>
                                    <input
                                        className="side-part-filter__price-from"
                                        type="number"
                                        value={minPrice}
                                        onChange={handleInputChangeMinPrice}
                                    />
                                </div>
                                <span>to</span>
                                <div className="side-part-filter__price-input">
                                    <span className="side-part-filter__price-currency">
                                        $
                                    </span>
                                    <input
                                        className="side-part-filter__price-to"
                                        type="number"
                                        value={maxPrice}
                                        onChange={handleInputChangeMaxPrice}
                                    />
                                </div>
                            </div>
                            <div className="side-part-filter__price-slider">
                                <div className="side-part-filter__price-progress"></div>
                                <div className="side-part-filter__price-ranger">
                                    <input
                                        type="range"
                                        className="side-part-filter__price-ranger-min"
                                        min="0"
                                        max="10000"
                                        value={minPrice}
                                        onChange={handleInputChangeMinPrice}
                                    />
                                    <input
                                        type="range"
                                        className="side-part-filter__price-ranger-max"
                                        min="0"
                                        max="10000"
                                        value={maxPrice}
                                        onChange={handleInputChangeMaxPrice}
                                    />
                                </div>
                            </div>
                            <div className="side-part-filter__btn-filter-wrapper">
                                <button
                                    className="side-part-filter__btn-filter"
                                    type="button"
                                >
                                    <span className="side-part-filter__btn-filter-content">
                                        filter
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div
                onClick={() => handleCloseFilterMobile()}
                className="filter-mobile-layout"
            ></div>
        </>
    );
}

export default Search;
