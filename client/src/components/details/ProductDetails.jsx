import React from 'react'

import { Typography,Box ,Table,
    TableBody,
    TableRow ,
    TableCell,styled} from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';



const SmallText = styled(Box)`

    font-size: 14px;
    vertical-align:baseline;
    &>p{
        font-size:14px;
        margin-top:10px;

    }
`

const Badge = styled(LocalOfferIcon)`
    margin-right:10px;
    color:#00cc00;
    font-size:15px;

`

const Column = styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;

    & >td{
        font-size:14px;
        margin-top:10px;
        border:none;
        
       


    }
`


export default function ProductDetails({product}) {
    
    const Url = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"

    const date = new Date(new Date().getTime()+5* 24*60*60*1000);

    const addUrl = "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";


  return (<>
    <Typography>{product.title.shortTitle}</Typography>
    <Typography style = {{marginTop:5,color:"#878787" , fontSize:14}}>
      8 Ratings & 1 Reviews
      <Box component ="span"><img src = {Url} style={{width:77,marginLeft: 20}} alt = "flipkart-Assured"/></Box>
    </Typography>

    <Typography >
      <Box component = "span" style={{fontSize:28,marginRight:10}}>₹{product.price.cost}</Box>
      <Box component = "span" style={{color:"#878787" ,marginRight:10}}><strike>₹{product.price.mrp}</strike></Box>
      <Box component = "span" style={{color:"#388e3c"}}>{product.price.discount}</Box>
    </Typography>
    <Typography>Available Offers</Typography>
    <SmallText>
        <Typography><Badge/>Get extra 20% off upto  50 ₹ on 1 item(s) T&C apply</Typography>
        <Typography><Badge/>Get extra 13% off (price inclusive of discount) T&C apply</Typography>
        <Typography><Badge/>Signup with flipkart pay later and get flipkart Gift Card worth 100 ₹</Typography>
        <Typography><Badge/>Buy 2 items save 5% ; Buy 3 or more save 10%</Typography>
        <Typography><Badge/>No cost EMI on bajaj finserv card on cart value above 2000 ₹</Typography>

    </SmallText>

    <Table>
        <TableBody>
            <Column>
                <TableCell style={{color:"#878787"}}>Delivery</TableCell>
                <TableCell style={{fontWeight:600}}>Delivery By {date.toDateString()  } |₹ 40</TableCell>


            </Column>
            <Column>
                <TableCell style={{color:"#878787"}}>Warrenty</TableCell>
                <TableCell >No Warrenty</TableCell>


            </Column>
            <Column>
                <TableCell style={{color:"#878787"}}>Seller</TableCell>
                <TableCell >
                    <Box component = "span"style={{color:"#2874f0"}} >SupercomNet</Box>
                    <Typography>GST invoice Available</Typography>
                    <Typography> View more sellers starting from ₹{product.price.cost}</Typography>
                </TableCell>

            </Column>
            

            <Column>
                <TableCell colSpan = {2}>
                    <img src = {addUrl} style={{width:390}} alt = "supercoin"/>

                </TableCell>
            </Column>

            
            <Column>
                <TableCell style={{color:"#878787"}}>Description</TableCell>
                <TableCell > {product.description}</TableCell>


            </Column>
        </TableBody>
    </Table>
    </>
  )
}
