import React from 'react';
import { Grid,Box, Container } from '@mui/material'
import '../FeaturesProducts/Feactures.css'
const FruitBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 , margin:"80px 0px"}}>
    <Container>
    <Grid container spacing={{ xs: 5, md: 6 }} columns={{ xs: 1, sm: 8, md: 12 }}>
      <Grid item xs={2} sm={4} md={6}>
      <Box className='box'>
        <img  src="https://preview.colorlib.com/theme/ogani/img/banner/xbanner-1.jpg.pagespeed.ic.aDN3QrExt6.webp" alt="" />
      </Box>
      </Grid>
      <Grid item xs={2} sm={4} md={6}>
     <Box className='box'>
       <img src="https://preview.colorlib.com/theme/ogani/img/banner/xbanner-2.jpg.pagespeed.ic.pSCK_iOvxr.jpg" alt="" />
     </Box>
      </Grid>
    </Grid>
    </Container>
  </Box>
  );
};

export default FruitBanner;