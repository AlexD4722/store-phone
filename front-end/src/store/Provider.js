import Context from "./Context";
import { useReducer } from "react";
import changeMemory from "./reducer";

function Provider({ children }) {
    const [tempMemory, memoryDispatch] = useReducer(changeMemory, []);

    return (
        <Context.Provider value={[tempMemory, memoryDispatch]}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
