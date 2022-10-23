import { combineReducers } from "redux";
import { productsReducer } from './productReducer'

const reducer = combineReducers({
    allProdcts: productsReducer
})

export default reducer