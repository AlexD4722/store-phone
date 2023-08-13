import "../styles/logo.scss";
import "../styles/form-search.scss";
import React, { useCallback, useState } from "react";
import APIrequest, * as API from "../API/callAPI";
import { useStore } from "../store/hooks";

function FormSearch() {
    const [hint, setHint] = useState([]);
    const [keyword, setKey] = useStore();

    const handleSearch = useCallback((e) => {
        setHint([]);
        setKey(e.target.value);
        const data = { search: e.target.value };
        const action = API.SEARCH_PRODUCTS_BY_NAME;
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
        if (e.key === "Enter"){
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
                    {hint.map((value, index) => {
                        return (
                            <div
                                key={index}
                                style={{ top: 3.125 + 3.125 * index + "rem" }}
                            >
                                <img src={value.images} alt="" />
                                <span>{value.name}</span>
                                <span className="form-search__box-input-lastspan">
                                    {value.selling_price}$
                                </span>
                            </div>
                        );
                    })}
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
