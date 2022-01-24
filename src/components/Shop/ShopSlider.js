import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import RepeatSharpIcon from '@mui/icons-material/RepeatSharp';
const ShopSlider = () => {
  var settings = {
    
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [sliders,setSliders]=useState([])
  useEffect(()=>{
    fetch('./featuresProducts.json')
    .then(res=>res.json())
    .then(data=> setSliders(data))
  })
 
  return (
  
    <Box>
      <Typography variant='h4' sx={{p:'5px',
   textAlign:'start', fontWeight:"bold",borderBottom:'3px solid #7FAD39',width:"200px"}}> Sale off</Typography>
    <Slider {...settings}>
         {sliders.map(shopSlider=>
          <Box
          className='box'>
          <img  src={shopSlider.img} alt=""  />
          <Typography>{shopSlider.title}</Typography>
          <Typography  variant='h6'>${shopSlider.price}</Typography>
           <Box className='icon-list'>
             <li><Link to='/'><FavoriteIcon sx={{fontSize:"18px"}}/></Link></li>
             <li><Link to='/'><RepeatSharpIcon sx={{fontSize:"18px"}}/></Link></li>
             <li><Link to='/'><ShoppingCartSharpIcon sx={{fontSize:"18px"}}/></Link></li>
          
           </Box>
          </Box>
          )}
        </Slider>
  </Box>
   
    
  );
};

export default ShopSlider;