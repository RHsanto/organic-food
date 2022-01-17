import { Box, Grid, Skeleton, Typography} from '@mui/material';
import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import RepeatSharpIcon from '@mui/icons-material/RepeatSharp';
import './Feactures.css'
import { Link } from 'react-router-dom';
const OrangesFood = () => {
  const [featuresProducts,setFeaturesProducts]=useState([]);
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    fetch('./featuresProducts.json')
    .then(res=>res.json())
    .then(data=>(setFeaturesProducts(data.slice(1,5))))
    .finally(() => setLoading(false));
  },[])
  return (
    <Box sx={{ flexGrow: 1,textAlign:"center", margin:"50px 0px" }}>
    <Grid container spacing={{ xs: 5, md: 6 }} columns={{ xs: 1, sm: 8, md: 12 }}>
      {
        featuresProducts.map((featuresProduct) => (
          <Grid item xs={2} sm={4} md={3} key={featuresProduct}>
        <Box
        className='box'>
        <img src={featuresProduct.img} alt="" />
        <Typography>{featuresProduct.title}</Typography>
        <Typography  variant='h6'>${featuresProduct.price}</Typography>
         <Box className='icon-list'>
           <li><Link to='/'><FavoriteIcon sx={{fontSize:"18px"}}/></Link></li>
           <li><Link to='/'><RepeatSharpIcon sx={{fontSize:"18px"}}/></Link></li>
           <li><Link to='/'><ShoppingCartSharpIcon sx={{fontSize:"18px"}}/></Link></li>
        
         </Box>
        </Box>
        </Grid>
        ))
      }
    </Grid>

    {/* here use skelton */}
      {loading &&(
        <Box sx={{margin:"50px 0px"}}>
           <Grid  container spacing={{ xs: 5, md: 6 }} columns={{ xs: 1, sm: 8, md: 12 }}>
         {featuresProducts.map((_, index) => (
           <Grid   item xs={2} sm={4} md={3} key={index}>
             <Skeleton variant="rectangular" sx={{width:"100%", height:"252px"}}/>
             <Skeleton  sx={{margin:"10px 0px"}} width="100%" variant='h2'/>
             <Skeleton sx={{margin:"10px 0px"}} width="70%" variant='h2'/>
           </Grid>
         ))}
       </Grid>
        </Box>
      )
     
    }
  </Box>
  );
};

export default OrangesFood;
