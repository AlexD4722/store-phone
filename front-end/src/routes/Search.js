import { useParams } from "react-router";
import { useStore } from "../store";
import { useEffect, useState } from "react";
import APIrequest, { SEARCH_PRODUCTS_BY_NAME } from "../API/callAPI";

function Search() {
    const params = useParams();
    const setSearch = useStore()[1];
    const [data, setData] = useState([]);

    useEffect(() => {
        const data = { search: params.keyword };
        APIrequest(SEARCH_PRODUCTS_BY_NAME, data).then((obj) =>
            setData(obj.data.productArray)
        );
    }, [params.keyword]);

    useEffect(() => {
        setSearch(params.keyword);
    }, [params.keyword, setSearch]);
    return (
        <>
            Search result for {params.keyword}
            {data.map((value, index) => (
                <h1 key={index}>{value.name}</h1>
            ))}
        </>
    );
}

export default Search;
