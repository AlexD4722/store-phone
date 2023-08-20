import Product from "../components/product-card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SlideShow from "../section/banner-show";
import Widget from "../section/widget";
import BannerSidebar1 from '../assets/imgs/banner-30.jpg'
import "../styles/product-module.scss";
import "../styles/banner-sidebar.scss";
import "../styles/section.scss";
import ProductFlex from "../components/product-card2";
import DetailProduct from "./DetailProduct";
import React, { useState, useEffect } from 'react';
import APIrequest, * as API from "../API/callAPI";

function Home() {
    const [Phones, setPhones] = useState([]);
    const data = { quantity: 10 , random: true};
    useEffect(() => {
        const action = API.GET_QUANTITY_PRODUCT;
        if (data.quantity) {
            APIrequest(action, data).then((response) => {
                if (response.result === "Success") {
                    setPhones(response.data.productArray);
                }
            });
        }
    }, []);
    const [PhonesFlex, setPhonesFlex] = useState([]);
    const dataFlex = { quantity: 4, random: true };
    useEffect(() => {
        const action = API.GET_QUANTITY_PRODUCT;
        if (dataFlex.quantity) {
            APIrequest(action, dataFlex).then((response) => {
                if (response.result === "Success") {
                    setPhonesFlex(response.data.productArray);
                }
            });
        }
    }, []);
    return (
        <>
            <SlideShow />
            <Widget />
            <div className="xo-container">
                <section className="page-section">
                    <div className="products-module">
                        <div className="products-module__header">
                            <h2 className="products-module__title">Best Sellers</h2>
                            <a className="products-module__link-more" href="/#">
                                <span>View All </span>
                                <i  className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div className="products-module__main-wrapper">
                            <Row xs={2} sm={3} md={4} lg={5}>
                                {
                                    Phones.map((phone) => {
                                        return (
                                            <Col key={phone.id}>
                                                <Product
                                                    product={phone}
                                                />
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                </section >
                <section className="page-section">
                    <div className="products-module">
                        <div className="products-module__header">
                            <h2 className="products-module__title">Trending Products</h2>
                            <a className="products-module__link-more" href="/#">
                                <span>View All </span>
                                <i  className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div className="products-module__main-wrapper">
                            <Row>
                                <Col xs={12} sm={12} md={3}>
                                    <div className="banner-sidebar">
                                        <div className="banner-sidebar__content">
                                            <div className="banner-sidebar__wrapper-content">
                                                <h6 className="banner-sidebar__sub-title">Best Seller</h6>
                                                <h3 className="banner-sidebar__title">Buy The Latest <strong>iPhone XS Pro</strong></h3>
                                                <div className="banner-sidebar__description">
                                                    <p>Pellentesque habitant morbi tristique senectus.</p>
                                                </div>
                                                <a href="/#" className="banner-sidebar__btn-link">
                                                    <span className="banner-sidebar__btn-content">Shop Now</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="banner-sidebar__img">
                                            <img src={BannerSidebar1} alt="Banner Sidebar" />
                                        </div>
                                        {/* <a href="/#" className="overlay-link">ádasd</a> */}
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={9}>
                                    <Row xs={1} sm={1} md={2} lg={2}>
                                        {
                                            PhonesFlex.map((phoneflex) => {
                                                return (
                                                    <Col key={phoneflex.id}>
                                                        <ProductFlex
                                                            product={phoneflex}
                                                        />
                                                    </Col>
                                                );
                                            })
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div >
                </section >
            </div >
        </>
    );
}

export default Home;
