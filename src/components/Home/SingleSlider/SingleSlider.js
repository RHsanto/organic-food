import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import on1 from "../../../images/single/1.webp";
import on2 from "../../../images/single/2.webp";
import on3 from "../../../images/single/3.webp";
import on4 from "../../../images/single/4.webp";
import on5 from "../../../images/single/cat-3.jpg.webp";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import './SingleSlider.css'

const SingleSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={className}>
      <ArrowForwardIos style={{color:'black', fontSize:'15px'}}></ArrowForwardIos>
      
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
    <ArrowBackIos style={{color:'black', fontSize:'15px'}}></ArrowBackIos>
      </div>
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container>
    

      <Slider {...settings}>
        <Box>
        <Box sx={{ textAlign: "center" }}>
          <img style={{display:'inline-block'}} src={on1} alt="" />
        </Box>
        </Box>
        <Box>
        <Box sx={{ textAlign: "center" }}>
          <img style={{display:'inline-block'}} src={on2} alt="" />
        </Box>
        </Box>
        <Box>
        <Box sx={{ textAlign: "center" }}>
          <img style={{display:'inline-block'}} src={on3} alt="" />
        </Box>
        </Box>
        <Box>
        <Box sx={{ textAlign: "center" }}>
          <img style={{display:'inline-block'}} src={on4} alt="" />
        </Box>
        </Box>
        <Box>
        <Box sx={{ textAlign: "center" }}>
          <img style={{display:'inline-block'}} src={on5} alt="" />
        </Box>
        </Box>
      </Slider>
    </Container>
  );
};

export default SingleSlider;
