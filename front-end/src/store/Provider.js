import Context from "./Context";
import { useState } from "react";

function Provider({ children }) {
    const [keyword, setKeyword] = useState("");

    return <Context.Provider value={[keyword, setKeyword]}>{children}</Context.Provider>;
}

export default Provider;
