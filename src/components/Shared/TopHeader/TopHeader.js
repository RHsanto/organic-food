import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PersonIcon from "@mui/icons-material/Person";

const TopHeader = () => {
  // languages states and handler here
  const [language, setLanguage] = useState("English");
  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box sx={{ bgcolor: "#F5F5F5", py: 1.5 }}>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* email and text area of top navigation */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContexnt: "center",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <MailIcon sx={{ fontSize: "18px", px: "5px" }} />
            organi@food.com
          </Typography>
          {/* divider start here  */}
          <Box
            sx={{ height: "20px", width: "1px", bgcolor: "lightgray", mx: 3 }}
          ></Box>
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Free Shipping for all Order of $99
          </Typography>
        </Box>
        {/* social links, languages and others area of top navigation */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* social icons here  */}
          <Box>
            <FacebookIcon sx={{ fontSize: "16px", px: 1 }} />
            <TwitterIcon sx={{ fontSize: "16px", px: 1 }} />
            <LinkedInIcon sx={{ fontSize: "16px", px: 1 }} />
            <PinterestIcon sx={{ fontSize: "16px", px: 1 }} />
          </Box>
          {/* divider start here  */}
          <Box
            sx={{ height: "20px", width: "1px", bgcolor: "lightgray", mx: 2 }}
          ></Box>
          {/* language area here */}
          <Box>
            <TextField
              select
              value={language}
              onChange={handleLanguage}
              SelectProps={{
                native: true,
              }}
              variant="standard"
              sx={{ border: 0 }}
            >
              <option>English</option>
              <option>Bangla</option>
            </TextField>
          </Box>
          {/* divider start here  */}
          <Box
            sx={{ height: "20px", width: "1px", bgcolor: "lightgray", mx: 2 }}
          ></Box>
          {/* user icon here */}
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "text.primary",
            }}
          >
            <PersonIcon sx={{ fontSize: "20px", pr: 1 }} /> Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopHeader;
