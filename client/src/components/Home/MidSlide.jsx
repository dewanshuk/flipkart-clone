import React from 'react'
import Slide from './Slide'
import {Box,styled} from "@mui/material";

const Component = styled(Box)`
    display:flex;
`

const LeftComponent = styled(Box)(({theme})=>({
  width:"83%",
  [theme.breakpoints.down("md")]:{
    width:"100%"
  }
}))



const RightComponent = styled(Box)(({theme})=>({
    background:"#ffffff",
    padding:"10px 5px",
    marginTop:"11px",
    marginLeft : "15px",
    width:"19%",
    textAlign:"center",
   [theme.breakpoints.down("md")]:{
      display:"none"
    }
}))

export default function MidSlide({products,title,timer}) {
    const addUrl = "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
      
    <Component>
        <LeftComponent>
        <Slide products={products} title = {title} timer = {timer}/>
        </LeftComponent>
        <RightComponent>
        <img src = {addUrl} style= {{width:217}}alt = "advertisement"/>
        </RightComponent>
    </Component>
  )
}
