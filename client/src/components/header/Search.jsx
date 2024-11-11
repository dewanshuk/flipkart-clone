import React from 'react'
import {InputBase,styled,Box,List,ListItem} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import {useState,useEffect} from "react";
import {useSelector,dispatch, useDispatch, } from "react-redux";
import { getProducts } from '../../redux/actions/productActions';
import { useSelect } from '@mui/base';

import {Link}  from "react-router-dom";

const SearchContainer = styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left: 10px;
    display:flex;
    flex-direction:row;
`

const InputSearch = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`
const SearchIconn = styled(SearchIcon)`
    color:blue;
    padding:5px;
    display:flex;

`

const ListWrapper = styled(List)`
  position:absolute;
  background:#ffffff;
  color:#000;
  margin-top:36px;


`


export default function Search() {

  const[text,setText] = useState("");

  const {products} = useSelector(state=>state.getProducts);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts())

  },[dispatch])

  const getText = (text)=>{
    setText(text);
  }
  return (
    <SearchContainer>
    <InputSearch placeholder="Search for Products and more" 
     onChange ={(e)=>getText(e.target.value)}
     value = {text}>hello</InputSearch>
    <Box>
        <SearchIconn/>
    </Box>
    {
      text &&
      <ListWrapper>
        {
          products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
            <ListItem>
              <Link to = {`/product/${product.id}`}  onClick={()=>setText("")}
              style={{textDecoration:"none",color:"inherit"}}>
              {product.title.longTitle}
             
              </Link>
            </ListItem>
          ))
        }
      </ListWrapper>
    }
    </SearchContainer>

  )
}

