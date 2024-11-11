//for detail view we need to go to diffrent page so we will use , "react-router-dom" for this.

import {useEffect} from"react";
import {useDispatch,useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getProductDetails} from "../../../src/redux/actions/productActions.js";
import {Box,Typography,Grid,styled} from "@mui/material";
import ActionItems from "./ActionItems.jsx";
import ProductDetails from "./ProductDetails.jsx";






import React from 'react'

const Component = styled(Box)`

  background:#f2f2f2;
  margin-top: 55px;
  

`

const Container = styled(Grid)(({theme})=>({
  background:"#ffffff",
  display:"flex",
  [theme.breakpoints.down("md")]:{
    margin:0
  }

}))



const RightContainer = styled(Grid)`
  margin-top: 50px;
  width:65%;

`

export default function DetailView() {

 

const dispatch = useDispatch();
const {id} = useParams();
const {loading,product}= useSelector(state=>state.getProductDetails);

 useEffect(()=>{
   if(product && id !== product.id){
        dispatch(getProductDetails(id))}
 },[dispatch,id,product,loading])

 console.log(product);
  return (
    <Component>
      { product && Object.keys(product).length &&
        <Container container> 
          <Grid item lg ={4} md = {4} sm={8} xs = {12}>
            <ActionItems product={product}/>
          </Grid>

          <RightContainer item lg = {4} md ={8} sm ={8} xs = {12}>
            <ProductDetails product = {product} />
          </RightContainer>
        </Container>
      }
    </Component>
  )
}
