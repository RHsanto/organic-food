import { Box } from "@mui/material";
import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <Box>
      <TopHeader />
      <Navigation />
      <Banner />
    </Box>
  );
};

export default Home;
