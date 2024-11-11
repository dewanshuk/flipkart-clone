import * as actionType from "../constants/productConstant";
///reducer always have switch cases everywhere/////


export const getProductsReducer=(state={products:[]},action)=>{                              //state: current state/ value, 
                                                                            //action: dispatched value.
    switch(action.type){
        case actionType.GET_PRODUCT_SUCCESS:
            return {products: action.payload.products}
        case actionType.GET_PRODUCT_FAIL:
            return {error:action.payload}
        default:
            return state;
    }

}

/////////////////////

export const getProductDetailsReducer = (state={product:{}},action)=>{             ///if more than one value is there we use product : [] 
                                                                                        ///for one value we use product : {} ....(object )
    switch(action.type){
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return {loading:true}
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return {loading : false, product:action.payload.product}
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        case actionType.GET_PRODUCT_DETAILS_RESET:
            return {product:{}}
        default:
            return state
    }
}