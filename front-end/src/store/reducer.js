function reducer(state, action) {
    switch (action.type) {
        case "add":
            let found = false;
            let newState = [...state]
            newState.forEach((productLine) => {
                if (productLine.product.id === action.payload.product.id) {
                    productLine.quantity += action.payload.quantity;
                    found = true;
                }
            });
            if (found) {
                sessionStorage.setItem("cart", JSON.stringify(newState))
            } else {
                newState = [...state, action.payload];
                sessionStorage.setItem("cart", JSON.stringify(newState));
            }
            return newState;
        case "replace":
            return action.payload;
        default:
            return state;
    }
}

export default reducer;
