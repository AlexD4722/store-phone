import { useParams } from "react-router";
import { useStore } from "../store";
import { useEffect } from "react";

function Search() {
    const params = useParams();
    const setSearch = useStore().search[1];
    useEffect(() => {
        setSearch(params.keyword);
    }, [params.keyword, setSearch]);
    return <>Search result for {params.keyword}</>;
}

export default Search;
