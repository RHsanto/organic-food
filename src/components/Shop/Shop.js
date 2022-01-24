import React from 'react';
import {Box, Container,  Grid, List, ListItem, ListItemText, Slider, Typography }from '@mui/material'
import ShopSlider from './ShopSlider';

const style = {
  width: '100%',
  maxWidth: 360,
 
};

const Shop = () => {

  const minDistance = 10;
  const [value, setValue] = React.useState([10]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };

  return (
   <Container>
   <Box sx={{mt:"30px"}}>
   <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid item xs={6} sm={3} md={3} >
      {/* here list item  */}
      <Box>
        <Typography variant='h5' sx={{p:'10px ',textAlign:'start', fontWeight:"bold",borderBottom:'3px solid #7FAD39'}}> Department</Typography>
     <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Fresh Meat" />
      </ListItem>
      <ListItem button >
        <ListItemText primary="Vegetables" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Fruit & Nut Gifts" />
      </ListItem>    
      <ListItem button>
        <ListItemText primary="Fresh Berries" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Ocean Foods" />
      </ListItem>
      <ListItem button >
        <ListItemText primary="Butter & Eggs" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Fast Food" />
      </ListItem>    
      <ListItem button>
        <ListItemText primary="Fresh Onion" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Papayaya & Crisps" />
      </ListItem>    
      <ListItem button>
        <ListItemText primary="Oatmeal" />
      </ListItem>
    </List>
   </Box>

      {/* here price section */}
      <Box>
      <Typography variant='h5'
       sx={{m:"25px 0px",p:'10px ',
        fontWeight:"bold",textAlign:'start'}}> Price</Typography>
    <Box sx={{textAlign:'left'}}>
      <Slider sx={{color:'#DD2222'}}
        getAriaLabel={() => 'Minimum distance shift'}
        value={value}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        disableSwap/>
    <Typography variant='p' sx={{fontWeight:"bold",color:"#DD2222"}}>Price - ${value } </Typography>
    </Box>


    </Box>
    </Grid>

    {/* here second grid items */}
    <Grid item xs={4} sm={6} md={9} >
   <ShopSlider/>
    </Grid>
  
</Grid>
   </Box>
   </Container>
  );
};

export default Shop;