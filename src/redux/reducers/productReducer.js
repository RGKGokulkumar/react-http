import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [],
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        default:
            return state;
    }
}

export const selectedProductReducer = (state = {},{type,paylaod}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...paylaod}
        default:
            return state
    }
}