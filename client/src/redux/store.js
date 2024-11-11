//installing "npm install redux-devtools-extension" to integrate redux with chrome dev extension.

//middleware: "npm install redux-thunk";  

import {combineReducers, createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { getProductsReducer,getProductDetailsReducer } from "./reducers/productReducer";
import {cartReducer} from "./reducers/CartReducer.js";



const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer
})

const middleware = [thunk]
const store = createStore(                                                      //takes createStore(reducer,middleware);
reducer,composeWithDevTools(applyMiddleware(...middleware))                                           //passing middle ware as argument to composeWithdevtools

);        


export default store;

