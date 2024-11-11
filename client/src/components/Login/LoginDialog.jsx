import React from 'react'

import {useState,useContext} from "react"

import {Dialog,Box,TextField, Button, Typography,styled} from "@mui/material";
import { DataContext } from '../../context/dataProvider.jsx';

//axios frontend api function 
import {authenticateSignup} from "../../service/api.js";
//for user login api
import {authenticateLogin} from "../../service/api.js"

const Component = styled(Box)  `
    height:70vh;
    width:90vh;
`

const Image = styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)center  85% no-repeat;
    height:83%;
    width:28%;
    padding:45px 35px;

    &>p ,&>h5{
        color:#ffffff;
        font-weight:600;
    }
`

const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;

    & > div,& > button,& > p{
        margin-top:20px;

    };
`
const LoginButton = styled(Button)`
        text-transform:none;
        background:#fb641b;
        height:48px;
        border-radius:2px;

`
const RequestButton = styled(Button)`
        text-transform:none;
        background:#fff;
        color:#2874f0;
        height:48px;
        border-radius:2px;
        box-shadow:0 2px 4px 0 rgb(0 0 0 / 20%);

`
const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`

const CreateAccount = styled(Typography)`
    font-size : 14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;

`

const Error = styled(Typography)`
color:#ff6161;
font-size : 10px;
line-height:0;
margin-top:10px;
font-weight:600;
`

////////////////////

const initialValue = {
    login:{
        view:"login",
        heading:"Login",
        subHeading:"Get access to your Orders,Wishlist and Recommendation"
    },
    signup:{
        view:"signup",
        heading:"Looks like you are new Here",
        subHeading:"sign up with your mobile number to get started"
    }
}

const initialValues = {
    username:"",
    password:""
}
export default function LoginDialog({open,setOpen}) {
//to toggle between login and signup//
    const [account,toggleAccount]=useState(initialValue.login);

    const {setAccount} = useContext(DataContext);

    const [login,setLogin] = useState(initialValues);

    const [error,setError] = useState(false);
    const toggleSignup=()=>{
        toggleAccount(initialValue.signup);
    }
/// to open dialog on clicking login beside serach bar ( the state of below is in custom btn);
    const handleClose=()=>{
        setOpen(false);
        toggleAccount(initialValue.login);
        setError(false);    
    }
    
    const initialSignupVal = {
        firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
    }
    
   //input change
   const [signup,setSignup] = useState(initialSignupVal);
   const onInputChange = (e)=>{
    
    setSignup({...signup,[e.target.name]:e.target.value})
    console.log(signup);
   }

   //data context
   
   
   //button click

   const onSubmit =async ()=>{
      const response =  await authenticateSignup(signup);  //using "response to save the response from backend if got";
      if(!response){return handleClose()};
      setAccount(signup.firstname)
   }
   //
  
   
   const onValueChange =(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
   }

   const loginUser = async()=>{
    let response =  await authenticateLogin(login);
    console.log(response);
    if(response.status ===200){
        handleClose();
        console.log(response);
       setAccount(response.data.user.firstname);
    }else{
        setError(true);
    }
   }
  return (
      
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:"unset"}}}>
        <Component>
            <Box style = {{display:"flex", height:"100%"}}>
            <Image >
                <Typography variant = "h5">{account.heading}</Typography>
                <Typography style = {{marginTop:20}}>{account.subHeading}</Typography>

            </Image>
            {account.view==="login" ?
             <Wrapper>
             <TextField variant="standard" label = "Enter Username" name="username" onChange={(e)=>onValueChange(e)}>hello from textfield</TextField>
             {error &&<Error>Invalid Username or Password</Error>}

             <TextField variant="standard" label = "Enter Password" name="password" onChange={(e)=>onValueChange(e)}>hello from textfield</TextField>
             <Text>By continuing , you agree to flipkart's Terms of use and Privacy Policy.</Text>
             <LoginButton variant="contained" onClick = {()=>{loginUser()}}>Login</LoginButton>
             <Typography style={{textAlign:"center"}}>OR</Typography>
             <RequestButton variant = "contained">Request OTP</RequestButton>
             <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>

         </Wrapper>


            
            :
            <Wrapper>
                <TextField variant="standard" label = "Enter Firstname" name="firstname" onChange={(e)=>onInputChange(e)}></TextField>
                <TextField variant="standard" label = "Enter LastName" name="lastname" onChange={(e)=>onInputChange(e)}></TextField>
                <TextField variant="standard" label = "Enter Username" name="username"onChange={(e)=>onInputChange(e)}></TextField>
                <TextField variant="standard" label = "Enter Email"name="email" onChange={(e)=>onInputChange(e)} ></TextField>
                <TextField variant="standard" label = "Enter Password" name="password"onChange={(e)=>onInputChange(e)}></TextField>
                <TextField variant="standard" label = "Enter Phone"name="phone" onChange={(e)=>onInputChange(e)}></TextField>

                
                <LoginButton onClick={onSubmit}>Continue</LoginButton>
                

            </Wrapper>
            }
            </Box>
        </Component>
    </Dialog>
  )
}
