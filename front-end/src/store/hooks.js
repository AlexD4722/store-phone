import { useContext } from "react";
import Context from "./Context";

export function useStore() {
    const store = useContext(Context);

    return store;
}
