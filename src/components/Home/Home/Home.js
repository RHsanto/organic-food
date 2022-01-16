import { Box } from "@mui/material";
import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import BannerAndSearch from "../BannerAndSearch/BannerAndSearch";

const Home = () => {
  return (
    <Box>
      <TopHeader />
      <Navigation />
      <BannerAndSearch />
    </Box>
  );
};

export default Home;
