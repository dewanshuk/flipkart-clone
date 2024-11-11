//we will use axios for front end api,

import axios from "axios";

const url = "http://localhost:8000"

export const authenticateSignup = async(data)=>{
    try{
        return await axios.post(`${url}/signup`,data)                ///post(backend url with endpoint, data to send)
    }catch(error){
        console.log("error with axios api",error);
    }
}
///for existing user login

export const authenticateLogin = async(data)=>{
    try{
        return await axios.post(`${url}/login`,data)                ///post(backend url with endpoint, data to send)
    }catch(error){
        console.log("error with axios api for login",error);
        return error.response;
    }
}

//
