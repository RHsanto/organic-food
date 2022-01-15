import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import FeaturesProducts from "../FeaturesProducts/FeaturesProducts";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Navigation />
      <FeaturesProducts />
    </div>
  );
};

export default Home;
