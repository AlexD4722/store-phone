import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/color.scss";
import "../styles/font.scss";
import "../assets/imgs/logo-dark.png";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../bootstrap/css/bootstrap.css";
import "react-bootstrap";
import Layout from "./Layout";
import {
    Home,
    Blog,
    Contact,
    Signin,
    WishList,
    Cart,
    NotFound,
    Signup,
    Search,
    Account
} from "../routes";
import AddNewProductForm from "../routes/AddNewProduct.js";
import AddNewProductLineForm from "../routes/AddNewProductLine.js";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/search/:keyword",
                element: <Search />
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/signin",
                element: <Signin />,
            },
            {
                path: "/account",
                element: <Account />,
            },
            {
                path: "/wish-list",
                element: <WishList />,
            },
            {
                path: "/wish-list/product-line",
                element: <AddNewProductLineForm />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

function App() {
    return (
        <div className="xo-container">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
