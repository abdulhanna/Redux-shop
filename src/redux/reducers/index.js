import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from './productReducer'

const reducer = combineReducers({
    allProdcts: productsReducer,
    product: selectedProductsReducer
})

export default reducer