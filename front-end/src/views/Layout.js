import Headers from "../section/header";
import SiteMenu from "../components/site-menu";
import Footer from "../section/footer-page";

function Layout({ children }) {
    return (
        <>
            <Headers />
            <SiteMenu />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
