import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../styles/detail-product.scss';
import Carousel from 'react-bootstrap/Carousel';

import { useEffect, useState } from 'react';
import APIrequest, { GET_ALL_PRODUCTS } from '../API/callAPI';
import { useParams } from 'react-router';
import { useDetailProductContext } from '../store/hooks';
function DetailProduct({ match }) {
    const params = useParams();
    const [Phones, setPhones] = useDetailProductContext();
    const productId = parseInt(params.id);
    const product = Phones.find(p => parseInt(p.id) === productId);
    console.log(product, "============================================")

    return (
        <div className='xo-container'>
            <h3>This is product detail</h3>
            <div className='detail-product'>
                <div className='detail-product__main-box'>
                    <Row xs={1} sm={2} >
                        <Col>
                            <Carousel data-bs-theme="dark" pause={"hover"}>
                                <Carousel.Item>
                                    <div className='detail-product__img-detail'>
                                        <img src={product.images[0]} alt="" />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='detail-product__img-detail'>
                                        <img src={product.images[1]} alt="" />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='detail-product__img-detail'>
                                        <img src={product.images[2]} alt="" />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col>
                            <form className='detail-product__content-box'>
                                <div className='detail-product__name-product'>
                                    <h2>{product.name}</h2>
                                </div>
                                <div className='detail-product__box-review'>
                                    <div className='detail-product__list-start'>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <div className='detail-product__quantity-review'>
                                        <span className='detail-product__quantity-review-detail'>1</span>
                                        Review
                                    </div>
                                </div>
                                <div className='detail-product__status-stock'>
                                    <div className='detail-product__status-icon-check'>
                                        <i className="bi bi-check-circle"></i>
                                    </div>
                                    <div className='detail-product__status-stock-running'>
                                        <p>in stock</p>
                                    </div>
                                </div>
                                <div className='detail-product__box-price'>
                                    <p className='detail-product__price-new'>{product.selling_price}</p>
                                    <p className='detail-product__price-old'>{product.inital_price}</p>
                                </div>
                                <div className='detail-product__box-option detail-product__box-option--color'>
                                    <p>Color: <span className='detail-product__name-option'>black</span></p>
                                    <div className='detail-product__box-list-option'>
                                        {
                                            JSON.parse(product.color).map((color) => {
                                                return (
                                                    <label>
                                                        <input type="radio" name='color' />
                                                        <span>{color}</span>
                                                    </label>
                                                )
                                            })

                                        }
                                    </div>

                                </div>
                                <div className='detail-product__box-option detail-product__box-option--capacity'>
                                    <p>Capacity:<span className='detail-product__name-option'>128 GB</span></p>
                                    <div className='detail-product__box-list-option'>
                                        {
                                            JSON.parse(product.capacity).map((capacity) => {
                                                return (
                                                    <label>
                                                        <label>
                                                            <input type="radio" name='capacity' />
                                                            <span>{capacity}</span>
                                                        </label>
                                                    </label>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='detail-product__info-quantity'>
                                    <div className='detail-product__info-top'>
                                        <div className='detail-product__info-quantity-detail'>
                                            <div className='detail-product__btn-dash-quantity'>
                                            </div>
                                            <input type="number" name='quantity' />
                                            <div className='detail-product__btn-plus-quantity'>
                                            </div>
                                        </div>
                                        <div className='detail-product__btn-add-cart'>
                                            <button type="submit">
                                                <span className='detail-product__btn-add-cart-content'>Add to cart</span>
                                            </button>
                                        </div>
                                        <div className='detail-product__btn-add-wishlist'>
                                            <button type="button">
                                                <span className='detail-product__btn-add-wishlist-icon'><i className="bi bi-heart"></i></span>
                                                <span className='detail-product__btn-add-wishlist-content'>Add to wishlist</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='detail-product__info-bottom'>
                                        <div className='detail-product__info-delivery'>
                                            <i className="bi bi-box-seam"></i>
                                            <strong> 2-day Delivery</strong>
                                        </div>
                                        <div className='detail-product__info-delivery-slogan'>
                                            <p>speedy and reliable parcel delivery!</p>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </Col>
                    </Row>
                </div>
                <div className='detail-product__sub-info-item'>
                    <div className='detail-product__title-comp-sub-info'>
                        <h3>Description</h3>
                    </div>
                    <div className='detail-product__content-sub-info'>
                        <div className='detail-product__intro-item'>
                            <p>The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.</p>
                        </div>
                        <div className='detail-product__key-feature-item'>
                            <p>Key Features:</p>
                            <ul>
                                <li>slim body with metal cover</li>
                                <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                                <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                                <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card</li>
                                <li>backlit keyboard, touchpad with gesture support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;