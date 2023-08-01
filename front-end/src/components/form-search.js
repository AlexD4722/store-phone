import "../styles/logo.scss";
import "../styles/form-search.scss";
import React, { useCallback, useState } from "react";
import APIrequest, * as API from "../API/callAPI";

function FormSearch() {
    const [hint, setHint] = useState([]);

    const handleSearch = useCallback((e) => {
        const data = { search: e.target.value };
        const action = API.SEARCH_PRODUCTS_BY_NAME;
        APIrequest(action, data).then((response) => {
            if (response.result === "Success"){
                setHint(response.data.productArray);
            }
        });
    },[]);

    return (
        <form className="form-search">
            <div className="form-search__wrapper-search">
                <div className="form-search__box-input">
                    <input
                        type="text"
                        placeholder="Search your favorite product..."
                        onKeyUp={(event) => handleSearch(event)}
                    />
                </div>
                <div className="form-search__button">
                    <button
                        className="form-search__button-detail"
                        type="button"
                    >
                        <span>search</span>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FormSearch;
