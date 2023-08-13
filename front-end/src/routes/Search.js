import { useParams } from "react-router";
import { useStore } from "../store";
import { useEffect, useState } from "react";
import APIrequest, { FIlTER_PRODUCT } from "../API/callAPI";

function Search() {
    const params = useParams();
    const setSearch = useStore()[1];
    const [data, setData] = useState(["abc"]);
    let check = null;

    useEffect(() => {
        const data = { name_product: params.keyword };
        APIrequest(FIlTER_PRODUCT, data).then((obj) => {
            setData(obj.data.productArray);
            console.log("this is data", obj.data.productArray);
        }
        );
    }, [params.keyword]);
    // console.log("this is data", check);
    // useEffect(() => {
    //     setSearch(params.keyword);
    //     console.log("data", data);
    // }, [params.keyword, setSearch]);
    return (
        <>
            Search result for {params.keyword}
            {data.map((item, index) => (
                <h1 key={index}>{item.name}</h1>
            ))}
        </>
    );
}

export default Search;
