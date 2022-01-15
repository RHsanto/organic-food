import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Banner = () => {
  return (
    <Box>
      <Container>
        <Grid
          container
          spacing={{ xs: 0, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
          sx={{ px: { xs: 0, md: 3 } }}
        >
          {/* all departments area here  */}
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            sx={{
              bgcolor: "#7FAD39",
            }}
          >
            <Button
              sx={{
                py: 1.5,
                color: "#FFF",
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
          </Grid>

          {/* search area here and call section here  */}
          <Grid item xs={12} sm={12} md={9} container>
            {/* search area here  */}
            <Grid item xs={12} sm={12} md={9} sx={{ border: 1 }}>
              <InputBase
                sx={{ flex: 1, px: 0 }}
                placeholder="What do you need?"
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Grid>

            {/* phone number area here  */}
            <Grid item xs={12} sm={12} md={3}>
              Hello
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
