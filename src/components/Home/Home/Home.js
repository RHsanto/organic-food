import React from 'react';
import Banner from '../Banner/Banner';
import BestSelling from '../BestSelling/BestSelling';
import FeaturesProducts from '../FeaturesProducts/FeaturesProducts';
import SingleSlider from '../SingleSlider/SingleSlider';
import Blog from '../Blog/Blog';
import MultipleSlider from '../MultipleSlider/MultipleSlider';
import Brand from '../Brand/Brand';
import FruitBanner from '../FruitBanner/FruitBanner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  return (
    <div>
      <h1>Home </h1>
      <Banner/>
      <SingleSlider/>
      <FruitBanner/>
      <FeaturesProducts/>
      <BestSelling/>
      <Blog/>
      <MultipleSlider/>
      <Reviews/>
      <Brand/>
    </div>
  );
};

export default Home;