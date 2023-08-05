import Headers from "../section/header";
import SiteMenu from "../components/site-menu";
import Footer from "../section/footer-page";
import NavBottom from "../components/mobile-bottom-menu";

function Layout({ children }) {
    return (
        <>
            <Headers />
            <SiteMenu />
            {children}
            <NavBottom />
            <Footer />
        </>
    );
}

export default Layout;
