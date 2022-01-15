
import React from "react";
import { Box,  Container, Typography } from "@mui/material";
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

      <Container>
        <Router>
          <Box>
            <NavLink
              style={{ textDecoration: "none", padding: "0px 10px" }}
              to="/allFoods"
            >
              All{" "}
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", padding: "0px 10px" }}
              to="/oranges"
            >
              Oranges{" "}
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", padding: "0px 10px" }}
              to="/freshmeat"
            >
              Fresh Meat
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", padding: "0px 10px" }}
              to="/vegetables"
            >
              Vegetables
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", padding: "0px 10px" }}
              to="/fastfood"
            >
              FastFood
            </NavLink>
          </Box>
          <Switch>

            <Route exact path='/' >
           <AllFood/>
    

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

            <Route path='/fastfood'>
              <FastFood/>
            </Route>
          </Switch>
        </Router>
      </Container>
    </Box>
  );
};

export default FeaturesProducts;
