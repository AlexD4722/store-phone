import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/color.scss";
import "../styles/font.scss";
import "../assets/imgs/logo-dark.png";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../bootstrap/css/bootstrap.css";
import "react-bootstrap";
import Layout from "./Layout";
import Home from "../routes/Home.js";
import Cellphone from "../routes/Cellphone.js";
import Tablet from "../routes/Tablet.js";
import Accessory from "../routes/Accessory.js";
import SmartWatch from "../routes/SmartWatch.js";
import Blog from "../routes/Blog.js";
import Contact from "../routes/Cellphone.js";

function App() {
    return (
        <div className="xo-container">
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
                    </Routes>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
