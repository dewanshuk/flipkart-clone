import React from 'react'
import {Box,Button,styled} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {useState} from "react"

import {useDispatch} from "react-redux"
import {addToCart} from "../../redux/actions/CartActions";
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const LeftContainer = styled(Box)(({theme})=>({
    minWidth:"60%",
    padding:"40px 0 0 80px",
    [theme.breakpoints.down("lg")]:{
        padding:0,
    }
}))
   



const Image = styled ("img")({
   
   
    padding:"15px",
    width:"95%",

})

const StyledButton = styled(Button)(({theme})=>({
    width:"48%",
    height:"50px",
    borderRadius:"4px",
    [theme.breakpoints.down("md")]:{
        width:"46%",
    },
    [theme.breakpoints.down("lg")]:{
        width:"48%",
    }

}))
   
    



export default function ActionItems({product}) {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity,setQuantity]  = useState(1);

    const {id} = product;

    const addItemToCart = ()=>{
        dispatch(addToCart(id,quantity))
        navigate("/cart")
    }

    const buyNow =async ()=>{
        let response = await payUsingPaytm({amount:500,email:"himanshu.khemot@gmail.com"});
        let information = {
            action:"https://securegw-stage.paytm.in/order/process",
            params:response
        }
        post(information);

    }
  return (
    <LeftContainer>
        <Box style ={{ padding:"15px 20px",
    border:"1px solid #f0f0f0", width:"90%"}}>
        <Image src = {product.detailUrl} alt = "product-image"/>
        </Box>
        <Box style ={{display:"flex"}}>
        <StyledButton variant = "contained" style={{marginLeft:10,background:"#ff9f00"}}  onClick = {()=>addItemToCart()}><ShoppingCartIcon/>Add to Cart</StyledButton>
        <StyledButton variant = "contained" style={{marginLeft:10,background:"#fb541b"}} onClick = {()=>buyNow()}><FlashOnIcon/>Buy Now</StyledButton>
        </Box>
    </LeftContainer>
  )
}
