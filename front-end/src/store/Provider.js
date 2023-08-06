import Context from "./Context";
import { useState } from "react";

function Provider({ children }) {
    const [keyword, setKeyword] = useState("");

    const store = {
        search: [keyword, setKeyword],
    };

    return <Context.Provider value={store}>{children}</Context.Provider>;
}

export default Provider;
