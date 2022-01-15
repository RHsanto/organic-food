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

      <Container sx={{marginTop:"20px"}}>
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
            <Route exact path="/">
              <AllFood />
            </Route>
            <Route path="/allFoods">
              <AllFood />
            </Route>
            <Route path="/oranges">
              <OrangesFood />
            </Route>
            <Route path="/freshmeat">
              <FreshMeat />
            </Route>
            <Route path="/vegetables">
              <Vegetable />
            </Route>
            <Route path="/fastfood">
              <FastFood></FastFood>
            </Route>
          </Switch>
        </Router>
      </Container>
    </Box>
  );
};

export default FeaturesProducts;
