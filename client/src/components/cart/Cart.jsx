import React from 'react'
import {useSelector} from "react-redux";
import{Grid,Box,Typography,Button,styled} from "@mui/material";

//compoenents
import CartItems from "./CartItems"
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';



//in case of Grids the total view is splitted into 12 parts so lg {9} means it will take 9 parts and if there is another part , it will take remaining 3 parts.


const Container = styled(Grid)(({theme})=>({
  padding:"30px 135px",
  [theme.breakpoints.down("md")]:{
    padding:"15px 0"
  }
}))
  
const Header = styled(Box)`
  padding:15px 24px;
  background:#fff;

`

const ButtonWrapper = styled(Box)`
  padding:16px 22px;
  background:#fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top:1px solid #f0f0f0;

  `
const ButtonStyled = styled(Button)`
  display:flex;
  margin-left:auto;
  background:#fb641b;
  width:250px;
  height:51px;
  border-radius:2px;
`

const LeftComponent = styled(Grid)(({theme})=>({
  paddingRight:"15px",
  [theme.breakpoints.down("md")]:{
    marginBottom:15
  }
}))


export default function Cart() {

  const {cartItems} = useSelector (state=>state.cart);

  return (
    <>
    {
      cartItems.length ?                                            
    <Container container>
        <LeftComponent item lg = {9} md ={9} sm ={12} xs = {12}>
          <Header>
            <Typography>My Cart({cartItems.length})</Typography>
          </Header>
          {
            cartItems.map(item =>(
              <CartItems item = {item}/>
            ))
          }
          <ButtonWrapper>
            <ButtonStyled variant = "contained">Place Order</ButtonStyled>
          </ButtonWrapper>
        </LeftComponent>
        <Grid item lg = {3} md = {3} sm = {12} xs = {12}>
          <TotalView cartItems = {cartItems}/>
        </Grid>
    </Container>
      :
      <EmptyCart/>
    }
    </>
  )
}
