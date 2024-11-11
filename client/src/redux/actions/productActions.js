//in redux we use middleware, 
//use reducer is very widely used hoodk

import axios from "axios";
import* as actionTypes from "../constants/productConstant.js";   ///* is used to import all from a js file, and actionTypes is used to represent them all.


const url = "http://localhost:8000";
export const getProducts =()=> async(dispatch)=>{
    try{
       const {data} =  await axios.get(`${url}/products`)          //{data} is same as response.data.  we used object destructuring.
       
       dispatch({type:actionTypes.GET_PRODUCT_SUCCESS,payload:data});
       
    }catch(error){
        console.log({type:actionTypes.GET_PRODUCT_FAIL,payload:error.message});
    }
}

/////////////
export const getProductDetails =(id)=>async (dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST});
        const {data} =  await axios.get(`${url}/product/${id}`)          //{data} is same as response.data.  we used object destructuring.
       dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,payload:data});
        
    }catch(error){
        console.log({type:actionTypes.GET_PRODUCT_DETAILS_FAIL,payload:error.message});
        
    }
}


// the contents of backend response are as follows,
// 
// {  
//     config:{},
//     data:[],
//     headers:{},
//     status:200,
//     message:""
// }


///object destructuring,
//if i need data from the above object,
// we can use,
//{data} = object
//instead of  : obj.data