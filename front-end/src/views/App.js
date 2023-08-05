import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/color.scss";
import "../styles/font.scss";
import "../assets/imgs/logo-dark.png";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../bootstrap/css/bootstrap.css";
import "react-bootstrap";
import Layout from "./Layout";
import {
    Home,
    Cellphone,
    Tablet,
    Accessory,
    SmartWatch,
    Blog,
    Contact,
    Account,
    WishList,
    Cart,
    NotFound,
} from "../routes";

function App() {
    return (
        <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cellphones" element={<Cellphone />} />
                <Route path="tablets" element={<Tablet />} />
                <Route path="accessories" element={<Accessory />} />
                <Route path="smartwatches" element={<SmartWatch />} />
                <Route path="blogs" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
                <Route path="account" element={<Account />} />
                <Route path="wish-list" element={<WishList />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    </Router>
    );
}

export default App;
