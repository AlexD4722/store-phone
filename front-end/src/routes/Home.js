import Product from "../components/product-card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SlideShow from "../section/banner-show";
import Widget from "../section/widget";
import NavBottom from "../components/mobile-bottom-menu";
import SortProduct from "../section/sort-product";
import PaginationPage from "../components/pagination";
import BannerSidebar1 from '../assets/imgs/banner-30.jpg'
import "../styles/product-module.scss";
import "../styles/banner-sidebar.scss";
import "../styles/section.scss";
import ProductFlex from "../components/product-card2";

function Home() {
    return (
        <>
            <SlideShow />
            <Widget />
            <div className="xo-container">
                <section className="page-section">
                    <div className="products-module">
                        <div className="products-module__header">
                            <h2 className="products-module__title">Best Sellers</h2>
                            <a className="products-module__link-more" href="#">
                                <span>View All </span>
                                <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div className="products-module__main-wrapper">
                            <Row xs={2} sm={3} md={4} lg={6}>
                                <Col>
                                    <Product />
                                </Col>
                                <Col>
                                    <Product />
                                </Col>
                                <Col>
                                    <Product />
                                </Col>
                                <Col>
                                    <Product />
                                </Col>
                                <Col>
                                    <Product />
                                </Col>
                                <Col>
                                    <Product />
                                </Col>
                                <Col>
                                    <Product />
                                </Col>
                                <Col>
                                    <Product />
                                </Col>
                                <Col>
                                    <Product />
                                </Col>
                                <Col>
                                    <Product />
                                </Col>
                                <Col>
                                    <Product />
                                </Col>
                                <Col>
                                    <Product />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>
                <section className="page-section">
                    <div className="products-module">
                        <div className="products-module__header">
                            <h2 className="products-module__title">Trending Products</h2>
                            <a className="products-module__link-more" href="#">
                                <span>View All </span>
                                <i class="bi bi-arrow-right"></i>
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
                                                <a href="" className="banner-sidebar__btn-link">
                                                    <span className="banner-sidebar__btn-content">Shop Now</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="banner-sidebar__img">
                                            <img src={BannerSidebar1} alt="Banner Sidebar" />
                                        </div>
                                        <a href="" className="overlay-link"></a>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={9}>
                                    <Row xs={1} sm={1} md={2} lg={2}>
                                        <Col>
                                            <ProductFlex />
                                        </Col>
                                        <Col>
                                            <ProductFlex />
                                        </Col>
                                        <Col>
                                            <ProductFlex />
                                        </Col>
                                        <Col>
                                            <ProductFlex />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>
            </div>

            {/* <SortProduct /> */}
            {/* <PaginationPage /> */}
        </>
    );
}

export default Home;
