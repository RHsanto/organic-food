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
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {datas.map((data) => (
          <Box sx={{}}>
            <Box
              sx={{
                height: "270px",
                margin: "0px 15px",
              }}
              style={{
                backgroundImage: `url(${data.img})`,
                backgroundSize: "cover",
                position: "relative",
              }}
            >
              <Typography
                style={{
                  width: "85%",
                  backgroundColor: "white",
                  position: "absolute",
                  bottom: "18px",
                  left: "0",
                  right: "0",
                  margin: "auto",
                }}
                sx={{
                  textAlign: "center",
                  padding: "5px 0px",

                  textTransform: "uppercase",
                  fontWeight: "900",
                }}
                variant="p"
              >
                {data.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default SingleSlider;
