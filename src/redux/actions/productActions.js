import { ActionTypes } from "../constants/action-types"
import fakestoreapi from "../../utils/backend"

export const fetchProducts = () => async (dispatch) => {
    const response = await fakestoreapi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakestoreapi.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: response.data });
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}


export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products
    }
}

export const removeProduct = (products) => {
    return {
        type: ActionTypes.REMOVE_PRODCTS,
        payload: {}
    }
}