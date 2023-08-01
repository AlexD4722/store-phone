function changeMemory(state, action) {
    
    switch (action.type) {
        case "add":
            if (state.length > 5){
                state.shift();
            }
            state.push(action.payload);
            return state;
        case "flush":
            return [];
        
        default:
            return state;
    }
}

export default changeMemory;

