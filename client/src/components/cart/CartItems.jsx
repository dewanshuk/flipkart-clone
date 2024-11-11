import {Box,Typography,styled,Button} from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import { removeFromCart } from "../../redux/actions/CartActions";
import {useDispatch} from "react-redux";

import GroupedButton from "./GroupedButton";


const Component = styled(Box)`
    border-top:1px solid #f0f0f0;
    display:flex;
    background:#fff;
    
`

const LeftComponent = styled(Box)`
    margin:20px;
    display:flex;
    flex-direction:column;
`

const SmallText = styled(Typography)`
    color:#878787;
    size:14px;
    margin-top:10px;

`

const Remove = styled(Button)`
    margin-top:20px;
    font-size: 16px;
    color:#000;
    font-weight:600;


`
const CartItems = ({item})=>{
    const url = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

    const dispatch = useDispatch();

    const removeItem = (id)=>{
        dispatch(removeFromCart(id))
    }

    return (
       <Component>
           <LeftComponent>
               <img src ={item.url} alt = "product" style={{width:130,height:130}}/>
               <GroupedButton/>
           </LeftComponent>
           <Box style  = {{margin:20}}>
               <Typography>{addEllipsis(item.title.longTitle)}</Typography>
               <SmallText>Seller : RetailNet <Box component = "span"><img src = {url} alt = "flipkart-assured" style = {{width:58,marginLeft:10}}></img></Box></SmallText>
               <Typography style = {{margin:"20px 0" }} >
            <Box component = "span" style={{fontWeight:600,fontSize:18,marginRight:10}}>₹{item.price.cost}</Box>
            <Box component = "span" style={{color:"#878787" ,marginRight:10}}><strike>₹{item.price.mrp}</strike></Box>
            <Box component = "span" style={{color:"#388e3c"}}>{item.price.discount}</Box>
            </Typography>
            <Remove onClick = {()=>removeItem(item.id)} >Remove</Remove>
           </Box>
       </Component>
    )
}

export default CartItems;