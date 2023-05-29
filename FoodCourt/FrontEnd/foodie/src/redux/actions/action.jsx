export const Add = (cart) => {
    return {
        type : "ADD_TO_CART",
        payload : cart
    }
}
export const Del = (id) => {
    return {
        type : "REMOVE_TO_CART",
        payload : id
    }
}