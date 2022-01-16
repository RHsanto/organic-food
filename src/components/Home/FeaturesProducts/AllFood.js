import { Box, Container ,Grid, Typography} from '@mui/material';
import React from 'react';
import Img1 from '../../../images/feature-1.jpg'
import Img2 from '../../../images/feature-2.jpg'
import Img3 from '../../../images/feature-3.jpg'
import Img4 from '../../../images/feature-4.jpg'
import Img5 from '../../../images/feature-5.jpg'
import Img6 from '../../../images/feature-6.jpg'
import Img7 from '../../../images/feature-7.jpg'
import Img8 from '../../../images/feature-8.jpg'
const AllFood = () => {
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
       <Grid item xs={2} sm={4} md={3} >
       <Box>
      <img src={Img5} alt="" />
      <Typography>Crab Pool Security</Typography>
      <Typography  variant='h6'>$25</Typography>
      </Box>
       </Grid>
       <Grid item xs={2} sm={4} md={3}>
       <Box>
      <img src={Img6} alt="" />
      <Typography>Crab Pool Security</Typography>
      <Typography  variant='h6'>$25</Typography>
      </Box>
       </Grid>
       <Grid item xs={2} sm={4} md={3}>
       <Box>
      <img src={Img7} alt="" />
      <Typography>Crab Pool Security</Typography>
      <Typography  variant='h6'>$25</Typography>
      </Box>
       </Grid>
       <Grid item xs={2} sm={4} md={3}>
       <Box>
      <img src={Img8} alt="" />
      <Typography>Crab Pool Security</Typography>
      <Typography  variant='h6'>$25</Typography>
      </Box>
       </Grid>
      
       </Grid>
    
     </Container>
    </Box>
  );
};

export default AllFood;
