
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import AllFood from "./AllFood";
import OrangesFood from "./OrangesFood";
import FreshMeat from "./FreshMeat";
import Vegetable from "./Vegetable";
import FastFood from "./FastFood";


const FeaturesProducts = () => {

  return (
    <Box>
      <Typography variant="h3"> Features Product </Typography>

      <Container sx={{marginTop:"20px", textAlign:"center"}}>
        <Router>
          <Box>
            <NavLink
               style={isActive => ({ 
                fontWeight:"500",
                padding: "0px 10px" ,
                fontSize:"18px",textDecoration: "none",
                color: isActive ? "green" : "black"
              })}
              to="/allFoods"
            >
              All{" "}
            </NavLink>
            <NavLink
              to="/oranges"
              style={isActive => ({ 
                fontWeight:"500",
                padding: "0px 10px" ,
                fontSize:"18px",textDecoration: "none",
                color: isActive ? "green" : "black"
              })}
            >
              Oranges{" "}
            </NavLink>
            <NavLink
              style={isActive => ({ 
                fontWeight:"500",
                padding: "0px 10px" ,
                fontSize:"18px",textDecoration: "none",
                color: isActive ? "green" : "black"
              })}
              to="/freshmeat"
            >
              Fresh Meat
            </NavLink>
            <NavLink
                style={isActive => ({ 
                  fontWeight:"500",
                  padding: "0px 10px" ,
                  fontSize:"18px",textDecoration: "none",
                  color: isActive ? "green" : "black"
                })}
              to="/vegetables"
            >
              Vegetables
            </NavLink>
            <NavLink
               style={isActive => ({ 
                fontWeight:"500",
                padding: "0px 10px" ,
                fontSize:"18px",textDecoration: "none",
                color: isActive ? "green" : "black"
              })}
              to="/fastfood"
            >
              FastFood
            </NavLink>
          </Box>
          <Switch>
            <Route exact path='/' component={AllFood}/>
            <Route  path='/allFoods' component={AllFood}/>
            <Route  path='/oranges' component={OrangesFood}/>
            <Route  path='/freshmeat' component={FreshMeat}/>
            <Route path='/vegetables' component={Vegetable}/>
            <Route path='/fastfood' component={FastFood}/>
          </Switch>
        </Router>
      </Container>
    </Box>
  );
};

export default FeaturesProducts;
