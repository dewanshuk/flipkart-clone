import React from 'react'
import {AppBar,Toolbar,Box,List,ListItem ,Typography,styled} from "@mui/material";
import { IconButton,Drawer } from '@mui/material';
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
//components
import Search from "./Search";
import CustomBtn from "./CustomBtn";

const HeaderStyled = styled(AppBar)`
    background-color:#2874f0;
    height:55px;
`
const Component = styled(Link)`
    position:static;
    margin-left:12%;
    line-height:0;
    text-decoration:"none";
    color:inherit;
`
const Heading = styled(Typography)`
    font-size : 10px;
    font-style:italic;
`
const PlusImage = styled("img")({
  width:10,
  height:10,
  marginLeft:4
})

const CustomButton = styled(Box)(({theme})=>({

  margin:"0 5% 0 auto",
  [theme.breakpoints.down("md")]:{
    display:"none",
  }
}))


const MenuButton = styled(IconButton)(({theme})=>({
  display:"none",
  [theme.breakpoints.down("md")]:{
    display:"block"
  }
}))


export default function Header() {
    const logourl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
    const suburl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    const[open,setOpen]=useState(false);

    const handleOpen = ()=>{
      setOpen(true);
    }
    const handleClose  = ()=>{
      setOpen(false);
    }

    const list = ()=>(
      <Box style = {{width:200}} onClick = {handleClose}>
        <List>
          <ListItem button>
            <CustomBtn />
          </ListItem>
        </List>
      </Box>
   )
      
    
    
  
  return (
      
    <HeaderStyled>
      <Toolbar style={{minHeight:55}}>
          <MenuButton style = {{color:"inherit"}} onClick = {handleOpen}>
          <MenuIcon/>
          </MenuButton>
          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>
          <Component to = "/" style={{textDecoration:"none"}}>
            <img src = {logourl} alt = "Logo" style={{width:75}}/>
            <Box style = {{display:"flex"}}>
                <Heading>
                    Explore <Box component = "span" style= {{color:"#FFE500"}}>Plus</Box>
                </Heading>
                <PlusImage src = {suburl} alt = "sub-logo"/>
            </Box>
          </Component>
          <Search/>
          <CustomButton>
            <CustomBtn/>
          </CustomButton>
      </Toolbar>
    </HeaderStyled>
  )
}



