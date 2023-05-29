const init = {
    carts: []
}

const cartReducer = (state = init, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const existItem = state.carts.find((item) => item.id === action.payload.id);

            state.carts = existItem ? state.carts.map((item) => item.id === existItem.id ? action.payload : item) : [...state.carts, action.payload]

            // return {
            //     ...state,
            //     carts: [...state.carts, action.payload]
            // }
        }

        case "REMOVE_TO_CART":
            const data = state.carts.filter((ele) => ele.id !== action.payload)
            return {
                ...state,
                carts: data
            }

        default: return state
    }
}

export default cartReducer