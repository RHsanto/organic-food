import { Box } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import BannerAndSearch from "../BannerAndSearch/BannerAndSearch";
import FeaturesProducts from "../FeaturesProducts/FeaturesProducts";
import SingleSlider from "../SingleSlider/SingleSlider";

const Home = () => {
  return (
    <Box>
      <TopHeader />
      <Navigation />
      <BannerAndSearch />
      <SingleSlider />
      <FeaturesProducts />
      <Footer />
    </Box>
  );
};

export default Home;
