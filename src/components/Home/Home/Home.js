import { Box } from "@mui/material";
import React from "react";
import BannerAndSearch from "../BannerAndSearch/BannerAndSearch";
import Blog from "../Blog/Blog";
import FeaturesProducts from "../FeaturesProducts/FeaturesProducts";
import FruitBanner from "../FruitBanner/FruitBanner";
import SingleSlider from "../SingleSlider/SingleSlider";

const Home = () => {
  return (
    <Box>
      <BannerAndSearch />
      <SingleSlider />
      <FeaturesProducts />
      <FruitBanner/>
      <Blog />
    </Box>
  );
};

export default Home;
