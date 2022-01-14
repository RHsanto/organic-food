import React from 'react';
import Banner from '../Banner/Banner';
import FeaturesProducts from '../FeaturesProducts/FeaturesProducts';
import SingleSlider from '../SingleSlider/SingleSlider';

const Home = () => {
  return (
    <div>
      <h1>Home </h1>
      <Banner/>
      <SingleSlider/>
      <FeaturesProducts/>
    </div>
  );
};

export default Home;