import { ActionTypes } from "../constants/action-types"

const intialState = {
    products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...payload }

        case ActionTypes.REMOVE_PRODCTS:
            return {}
        default:
            return state
    }
}