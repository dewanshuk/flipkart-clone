
import Appp from "./Appp.css"
import {Box} from "@mui/material"
//components
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import DetailView from "./components/details/DetailView";
import DataProvider from "./context/dataProvider";
import {BrowserRouter,Routes,Route} from "react-router-dom";         //wrapping all components with Browserrouter (only component not Dataprovider)
import Cart from "./components/cart/Cart.jsx";



function App() { 
  return (
  <DataProvider >  
    <BrowserRouter>                                                     
  <Header/>
  <Box style={{marginTop:54}}>
  <Routes>
    <Route path = "/" element={<Home/>}/>
    <Route path = "/product/:id" element={<DetailView/>}/>
    <Route path = "/cart" element = {<Cart/>} />
  </Routes>
  </Box>
  </BrowserRouter>
  </DataProvider>
  );
}

export default App;
