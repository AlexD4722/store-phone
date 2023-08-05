import Headers from "../section/header";
import SiteMenu from "../components/site-menu";
import Footer from "../section/footer-page";
import { Outlet } from "react-router";

function Layout({children}) {
    return (
        <div>
            <Headers />
            <SiteMenu />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
