import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../../images/logo.webp";
import paymentCard from "../../../images/paymentCard.webp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#F3F6FA", textAlign: "start" }}>
      <Container>
        <Grid
          container
          sx={{ py: 5 }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* footer logo and addresss area here  */}
          <Grid item xs={6} sm={6} md={4}>
            <img src={logo} alt="logo" />
            <Typography variant="body1" sx={{ color: "#6F6F6F", py: 0.8 }}>
              Address: 70-80 Road Dhaka Bangladesh
            </Typography>
            <Typography variant="body1" sx={{ color: "#6F6F6F", py: 0.8 }}>
              Phone: +880 19102030
            </Typography>
            <Typography variant="body1" sx={{ color: "#6F6F6F", py: 0.8 }}>
              Email: organi@food.com
            </Typography>
          </Grid>
          {/* usefull links area here  */}
          <Grid item xs={6} sm={6} md={4}>
            <Typography
              variant="p"
              sx={{
                px: 0.7,
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Useful Links
            </Typography>
            {/* wrapped two sides of links here  */}
            <Box
              sx={{
                display: "flex",
                flexDiection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
                pr: 4,
              }}
            >
              <Box>
                <Button
                  size="small"
                  sx={{ display: "block", color: "#6F6F6F" }}
                >
                  About Us
                </Button>
                <Button
                  size="small"
                  sx={{ display: "block", color: "#6F6F6F" }}
                >
                  About Our Shop
                </Button>
                <Button
                  size="small"
                  sx={{ display: "block", color: "#6F6F6F" }}
                >
                  Secure Shopping
                </Button>
                <Button
                  size="small"
                  sx={{ display: "block", color: "#6F6F6F" }}
                >
                  Delivery Information
                </Button>
                <Button
                  size="small"
                  sx={{ display: "block", color: "#6F6F6F" }}
                >
                  Privacy Policy
                </Button>
                <Button
                  size="small"
                  sx={{ display: "block", color: "#6F6F6F" }}
                >
                  Our Sitemap
                </Button>
              </Box>
              <Box>
                <Button
                  size="small"
                  sx={{ display: "block", color: "#6F6F6F" }}
                >
                  Who We Are
                </Button>
                <Button
                  size="small"
                  sx={{ display: "block", color: "#6F6F6F" }}
                >
                  Our Services
                </Button>
                <Button
                  size="small"
                  sx={{ display: "block", color: "#6F6F6F" }}
                >
                  Projects
                </Button>
                <Button
                  size="small"
                  sx={{ display: "block", color: "#6F6F6F" }}
                >
                  Contact
                </Button>
                <Button
                  size="small"
                  sx={{ display: "block", color: "#6F6F6F" }}
                >
                  Innovation
                </Button>
                <Button
                  size="small"
                  sx={{ display: "block", color: "#6F6F6F" }}
                >
                  Testimonials
                </Button>
              </Box>
            </Box>
          </Grid>
          {/* newsletter area here  */}
          <Grid item xs={12} sm={12} md={4}>
            <Typography
              variant="p"
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                my: 1,
              }}
            >
              Join Our Newsletter Now
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#6F6F6F", py: 2, display: "block" }}
            >
              Get E-mail updates about our latest shop and special offers.
            </Typography>
            {/* newsletter email input aand button area here  */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                label="Enter Your Email"
                variant="outlined"
                sx={{
                  borderColor: "#7FAD39",
                  width: "70%",
                  borderRadius: 0,
                }}
              />
              <Button
                style={{
                  backgroundColor: "#7FAD39",
                  padding: "16px 10px",
                  marginLeft: "-10px",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  color: "#FFF",
                  fontWeight: "bold",
                }}
              >
                subscribe
              </Button>
            </Box>
            {/* social media icons area here  */}
            <Box sx={{ my: 4 }}>
              <FacebookIcon
                sx={{
                  bgcolor: "#FFF",
                  p: 1.2,
                  borderRadius: "50%",
                  mx: 1,
                }}
              />
              <TwitterIcon
                sx={{
                  bgcolor: "#FFF",
                  p: 1.2,
                  borderRadius: "50%",
                  mx: 1,
                }}
              />
              <LinkedInIcon
                sx={{
                  bgcolor: "#FFF",
                  p: 1.2,
                  borderRadius: "50%",
                  mx: 1,
                }}
              />
              <PinterestIcon
                sx={{
                  bgcolor: "#FFF",
                  p: 1.2,
                  borderRadius: "50%",
                  mx: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <hr />
        {/* copyright area here  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#6F6F6F", py: 2, display: "flex" }}
          >
            Copyright &copy; 2022 | All the rights are reserved{" "}
            <Stack sx={{ color: "#7FAD39", px: 0.5 }}>KTS</Stack>
          </Typography>
          <img src={paymentCard} alt="paymentCard" />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
