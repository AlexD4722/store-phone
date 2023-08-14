import "../styles/logo.scss";
import "../styles/form-search.scss";
import "../styles/color.scss";
import "../styles/addons.scss";
import { Link } from "react-router-dom";
import { useAccountContext } from "../store";

function Addons() {
    const [account, setAccount] = useAccountContext();

    return (
        <div className="header-addons">
            <Link
                to="signin"
                className="header-addons__btn header-addons__btn--login"
            >
                <div className="header-addons__icon">
                    <i className="bi bi-person"></i>
                </div>

                <div className="header-addons__text">
                    <div className="header-addons__sub-text">
                        {account.username ? "Hello" : "Sign In"}
                    </div>
                    <div className="header-addons__primary-text">
                        {account.username || "Account"}
                    </div>
                </div>
            </Link>
            <Link to="wish-list" className="header-addons__btn">
                <div className="header-addons__icon">
                    <i className="bi bi-heart"></i>
                    <span className="header-addons__icon-quantity">
                        <span className="header-addons__icon-quantity-detail header-addons__icon-quantity-detail--heart">
                            0
                        </span>
                    </span>
                </div>
            </Link>
            <Link
                to="cart"
                className="header-addons__btn header-addons__btn--cart"
            >
                <div className="header-addons__icon">
                    <i className="bi bi-cart"></i>
                    <span className="header-addons__icon-quantity">
                        <span className="header-addons__icon-quantity-detail header-addons__icon-quantity-detail--cart">
                            0
                        </span>
                    </span>
                </div>
                <div className="header-addons__text">
                    <div className="header-addons__sub-text">total</div>
                    <div className="header-addons__primary-text">$0.00</div>
                </div>
            </Link>
        </div>
    );
}

export default Addons;
