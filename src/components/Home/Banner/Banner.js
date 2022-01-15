import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Banner = () => {
  return (
    <Box>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ px: 3 }}
        >
          {/* all departments area here  */}
          <Grid
            item
            xs={2}
            sm={4}
            md={3}
            sx={{
              bgcolor: "#7FAD39",
            }}
          >
            <Box
              sx={{
                py: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
              }}
            >
              <MenuIcon sx={{ px: 1 }} />{" "}
              <Typography variant="h6" sx={{ pr: 3 }}>
                All departments
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>
          </Grid>
          {/* search area here and call section here  */}
          <Grid item xs={2} sm={4} md={9} container>
            {/* search area here  */}
            <Grid item xs={2} sm={4} md={9} sx={{ border: 1 }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="What do you need?"
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Grid>
            {/* phone number area here  */}
            <Grid item xs={2} sm={4} md={3}>
              Hello
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
