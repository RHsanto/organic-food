import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Collapse,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, alpha } from "@mui/material/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import bgImg from "../../../images/bannerwebp.webp";

// search area styled here
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const BannerAndSearch = () => {
  // all departments handle button here
  const [showDepartments, setShowDepartments] = useState(true);

  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* all departments area here  */}
          <Box
            sx={{
              border: 1,
              borderColor: "lightgray",
              width: { xs: "100%", md: "30%" },
            }}
          >
            <Button
              onClick={() => setShowDepartments(!showDepartments)}
              style={{
                padding: "11px 0",
                color: "#FFF",
                display: "flex",
                backgroundColor: "#7FAD39",
                borderRadius: 0,
                width: "100%",
              }}
            >
              <MenuIcon sx={{ px: 1 }} />{" "}
              <Typography
                variant="p"
                sx={{ pr: 3, fontSize: "14px", fontWeight: "bold" }}
              >
                All departments
              </Typography>
              <KeyboardArrowDownIcon />
            </Button>
            {/* all department content here  */}
            <Collapse in={showDepartments}>
              <Box sx={{ p: 2, textAlign: "start" }}>
                <Button sx={{ display: "block", color: "text.primary" }}>
                  Fresh Meat
                </Button>
                <Button sx={{ display: "block", color: "text.primary" }}>
                  vegetables
                </Button>
                <Button sx={{ display: "block", color: "text.primary" }}>
                  Fruit & Nut Gifts
                </Button>
                <Button sx={{ display: "block", color: "text.primary" }}>
                  Fresh Berries
                </Button>
                <Button sx={{ display: "block", color: "text.primary" }}>
                  Ocean Foods
                </Button>
                <Button sx={{ display: "block", color: "text.primary" }}>
                  Butter & Eggs
                </Button>
                <Button sx={{ display: "block", color: "text.primary" }}>
                  Fast Foods
                </Button>
                <Button sx={{ display: "block", color: "text.primary" }}>
                  Fresh Onion
                </Button>
                <Button sx={{ display: "block", color: "text.primary" }}>
                  Papayaya & Crisps
                </Button>
                <Button sx={{ display: "block", color: "text.primary" }}>
                  Oatmeal
                </Button>
                <Button sx={{ display: "block", color: "text.primary" }}>
                  Fresh Bananas
                </Button>
              </Box>
            </Collapse>
          </Box>

          {/* search and call section container here  */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            container
            sx={{ pl: { xs: 0, md: 4 } }}
          >
            {/* search area here  */}
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              sx={{
                border: 1,
                borderColor: "lightgray",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                my: { xs: 2, md: 0 },
              }}
            >
              <Typography
                variant="p"
                sx={{
                  pr: 3,
                  fontSize: "16px",
                  fontWeight: "bold",
                  display: "flex",
                }}
              >
                All Categories
                {/* divider start here  */}
                <Box
                  sx={{
                    height: "20px",
                    width: "1px",
                    bgcolor: "lightgray",
                    mx: 4,
                  }}
                ></Box>
              </Typography>
              {/* main search input and button area here  */}
              <Box sx={{ py: { xs: 1, md: 0 } }}>
                <Search sx={{ color: "#7FAD39" }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="What do you need ?"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>
            </Grid>

            {/* phone number area here  */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xl: "center", md: "flex-end" },
                alignItems: "center",
              }}
            >
              <PhoneIcon
                sx={{
                  color: "#7FAD39",
                  bgcolor: "#F5F5F5",
                  p: 1.5,
                  borderRadius: "50%",
                  ml: 2,
                }}
              />
              <Box sx={{ px: 1 }}>
                <Typography
                  variant="p"
                  sx={{
                    pr: 3,
                    fontSize: "16px",
                    fontWeight: "bold",
                    display: "block",
                  }}
                >
                  +880 19102030
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    pr: 3,
                    fontSize: "12px",
                  }}
                >
                  support 24/7 time
                </Typography>
              </Box>
            </Grid>
            {/* banner here  */}
            <Box
              sx={{
                backgroundImage: `url(${bgImg})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                textAlign: "start",
                width: "100%",
                my: 4,
                py: 10,
                px: { xs: 2, md: 8 },
              }}
            >
              <Typography
                variant="p"
                sx={{ color: "#7FAD39", fontWeight: "bold" }}
              >
                FRUIT FRESH
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bolder", py: 2, color: "#252525" }}
              >
                Vegetable <br /> 100% Organic
              </Typography>
              <Typography variant="p" sx={{ color: "#6f6f6f" }}>
                Free Pickup and Delivery Available
              </Typography>
              <Button
                style={{
                  display: "block",
                  backgroundColor: "#7FAD39",
                  color: "#FFF",
                  borderRadius: 0,
                  padding: "12 20px",
                  marginTop: 30,
                }}
              >
                Shop now
              </Button>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BannerAndSearch;
