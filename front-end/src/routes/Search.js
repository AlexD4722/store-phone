import { useParams } from "react-router";

function Search() {
    let params = useParams();
    return <>Search result for {params.keyword}</>;
}

export default Search;
