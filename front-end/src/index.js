import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/color.scss';
import './styles/font.scss';
import './assets/imgs/logo-dark.png';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../src/boostrap/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
// import '../src/boostrap/js/bootstrap.js';
import Headers from './section/header'
import SiteMenu from './components/site-menu';
import SlideShow from './section/banner-show';
import Widget from './section/widget';
import Product from './components/product-card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Headers />
    <SiteMenu />
    <SlideShow />
    <Widget />
    <section className='xo-container'>
    <Row  xs={2} sm={3} md={4} lg={5}>
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
    </section>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
