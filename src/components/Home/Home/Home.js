import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import FeaturesProducts from "../FeaturesProducts/FeaturesProducts";
import SingleSlider from "../SingleSlider/SingleSlider";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Navigation />
      <FeaturesProducts />
      <SingleSlider></SingleSlider>
    </div>
  );
};

export default Home;
