import React from 'react'
import { useEffect } from 'react';
import { Fragment } from 'react';  //fragment is replacement of div it do not create new node and its faster than div.
//components
import Navbar from "./Navbar"
import Banner from "./Banner";
import Slide from './Slide';
import {styled,Box} from "@mui/material";
import MidSlide from './MidSlide';
import MidSection from './MidSection';

import { getProducts } from '../../redux/actions/productActions';

import { useDispatch,useSelector } from 'react-redux';


const Container = styled(Box)`
  padding:10px 10px;
  background:#f2f2f2;

`
export default function Home() {
  

  const {products}= useSelector(state=>state.getProducts)
  

  const dispatch  = useDispatch();
 
  
                                         //use effect is used to call an api when a component renders on DOM or when a component loads
                                         //it takes two argument (callback,empty or filled array)
                                         //empty array [] : used when we want to call it on component rendering
useEffect (()=>{     
  dispatch(getProducts())                                             //array ["a","b"] : this is used when we want to call useEffect on change of this values in array.
  },[dispatch])
  return (<Fragment>
      <Navbar/>
      <Container>
      <Banner/>
      <MidSlide products={products} title = "Deal of The Day" timer = {true}/>
      <MidSection/>
      <Slide products={products} title = "Discounts for you"timer = {false}/>
      <Slide products={products}title = "Suggesting Items"timer = {false}/>
      <Slide products={products}title= "Top Selection"timer = {false}/>
      <Slide products={products}title= "Recommended Items"timer = {false}/>
      </Container>
    </Fragment>
  )
}
