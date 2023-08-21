import "../styles/logo.scss";
import "../styles/form-search.scss";
import React, { useCallback, useState } from "react";
import APIrequest, * as API from "../API/callAPI";
import { useSearchContext } from "../store/hooks";

function FormSearch() {
    const [hint, setHint] = useState([]);
    const [keyword, setKey] = useSearchContext();

    const handleSearch = useCallback((e) => {
        setHint([]);
        setKey(e.target.value);
        const data = { search: e.target.value };
        const action = API.GET_5_PRODUCTS_BY_NAME;
        if (data.search !== "") {
            APIrequest(action, data).then((response) => {
                if (response.result === "Success") {
                    setHint(response.data.productArray);
                }
            });
        }
    }, [setKey]);
    const handleButton = () => {
        window.location.href = "/search/" + keyword;
    }

    const handleEnter = e => {
        if (e.key === "Enter") {
            handleButton();
        }
    }

    return (
        <form className="form-search">
            <div className="form-search__wrapper-search">
                <div className="form-search__box-input">
                    <input
                        value={keyword}
                        type="text"
                        placeholder="Search your favorite product..."
                        onChange={(event) => handleSearch(event)}
                        onKeyUp={event => handleEnter(event)}
                    />
                    <div className="recommend-product">
                        <ul className="recommend-product__box-list">
                            {hint.map((value, index) => {
                                return (
                                    <li key = {value.id}>
                                        <div className="recommend-product__box-img">
                                            <img src={value.images[0]} alt="img search" />
                                        </div>
                                        {/* <img src={value.images} alt="" /> */}
                                        <div className="recommend-product__info-product">
                                            <h1 className="recommend-product__name-product">{value.name}</h1>
                                        </div>
                                        {/* <span>{value.name}</span> */}
                                        {/* <span className="form-search__box-input-lastspan">
                                            {value.selling_price}$
                                        </span> */}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="form-search__button">
                    <button
                        className="form-search__button-detail"
                        type="button"
                        onClick={handleButton}
                    >
                        <span>search</span>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FormSearch;
