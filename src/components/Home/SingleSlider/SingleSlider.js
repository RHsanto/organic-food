import { Box, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./SingleSlider.css";

const SingleSlider = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("/single.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={className}>
        <ArrowForwardIos
          style={{ color: "#1c1c1c", fontSize: "14px" }}
        ></ArrowForwardIos>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos
          style={{ color: "#1c1c1c", fontSize: "14px" }}
        ></ArrowBackIos>
      </div>
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    // autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container>
      {/* */}

      <Slider {...settings}>
        {datas.map((data) => (
          <Box>
            <Box sx={{ textTransform:'uppercase',fontWeight:'900',textAlign: "center",position:'relative' }}>
              <img style={{ display: "inline-block" }} src={data.img} alt="" />
              <Typography sx={{bottom:"20px",left:'17%',position:'absolute',zIndex:'10',textAlign:'center',backgroundColor:"white",padding:'5px 30px'}} variant='h6'>{data.name}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default SingleSlider;
