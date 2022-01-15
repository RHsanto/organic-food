import React from 'react';
import {Box, Button, Container, Typography} from '@mui/material'
import { 
  BrowserRouter as Router,
   Switch,
   Route,
   NavLink,
 } from 'react-router-dom';
import AllFood from './AllFood';
import OrangesFood from './OrangesFood';
import FreshMeat from './FreshMeat';
import Vegetable from './Vegetable';
import FastFood from './FastFood';


const FeaturesProducts = () => {

  return (
    <div>
     <Typography variant="h3"> Features Product </Typography>
    
       <Container >
        <Router >
          <Box>
              <NavLink  to='/allFoods'>All </NavLink>
              <NavLink to='/oranges'>Oranges </NavLink>
              <NavLink to='/freshmeat'>Fresh Meat</NavLink>
              <NavLink to='/vegetables'>Vegetables</NavLink>
              <NavLink to='/fastfood'>FastFood</NavLink>
          </Box>
          <Switch>
            <Route exact path='/'>
              <AllFood/>
            </Route>
            <Route  path='/allFoods'>
              <AllFood/>
            </Route>
            <Route path='/oranges'>
              <OrangesFood/>
            </Route>
            <Route path='/freshmeat'>
              <FreshMeat/>
            </Route>
            <Route path='/vegetables'>
              <Vegetable/>
            </Route>
            <Route path='/fastfood'>
              <FastFood></FastFood>
            </Route>
          </Switch>
        </Router>
       </Container>
    </div>
  );
};

export default FeaturesProducts;