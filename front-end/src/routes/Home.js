import Product from "../components/product-card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SlideShow from "../section/banner-show";
import Widget from "../section/widget";
import NavBottom from "../components/mobile-bottom-menu";
import SortProduct from "../section/sort-product";
import PaginationPage from "../components/pagination";

function Home() {
    return (
        <>
            <SlideShow />
            <Widget />
            <NavBottom />
            <SortProduct />
            <Row xs={2} sm={3} md={4} lg={5}>
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
                <Col>
                    <Product />
                </Col>
                <Col>
                    <Product />
                </Col>
            </Row>
            <PaginationPage />
        </>
    );
}

export default Home;
