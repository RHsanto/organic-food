import React from 'react';
import { Box, Container ,Grid, Typography} from '@mui/material';
import Img1 from '../../../images/feature-4.jpg'
import Img2 from '../../../images/feature-6.jpg'
import Img3 from '../../../images/feature-2.jpg'
import Img4 from '../../../images/feature-8.jpg'
const FreshMeat = () => {
  return (
    <Box>
     <Container sx={{marginTop:"50px"}}>
     <Grid container spacing={{ xs: 4}} columns={{ xs: 1, sm: 8, md: 12 }}>
       <Grid item xs={2} sm={4} md={3} >
      <Box>
      <img src={Img1} alt="" />
      <Typography>Crab Pool Security</Typography>
      <Typography  variant='h6'>$25</Typography>
      </Box>
       </Grid>
       <Grid item xs={2} sm={4} md={3}>
       <Box>
      <img src={Img2} alt="" />
      <Typography>Crab Pool Security</Typography>
      <Typography  variant='h6'>$25</Typography>
      </Box>
       </Grid>
       <Grid item xs={2} sm={4} md={3}>
       <Box>
      <img src={Img3} alt="" />
      <Typography>Crab Pool Security</Typography>
      <Typography  variant='h6'>$25</Typography>
      </Box>
       </Grid>
       <Grid item xs={2} sm={4} md={3}>
       <Box>
      <img src={Img4} alt="" />
      <Typography>Crab Pool Security</Typography>
      <Typography  variant='h6'>$25</Typography>
      </Box>
       </Grid>
    
      
      
       </Grid>
    
     </Container>
    </Box>
  );
};

export default FreshMeat;