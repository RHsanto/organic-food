import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../images/logo.webp";
import { Badge, Stack } from "@mui/material";

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{ bgcolor: "#FFF", py: 1, boxShadow: "none" }}
      >
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img src={logo} alt="logo" />
            </Typography>

            {/* responsive contents area here  */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button>Home</Button>
                  <Button>Shop</Button>
                  <Button>Blog</Button>
                  <Button>Contact</Button>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img src={logo} alt="logo" />
            </Typography>

            {/* large area contengt area here  */}
            <Box
              sx={{
                mt: "12px",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Button sx={{ mx: 2, fontWeight: "bold", color: "text.primary" }}>
                Home
              </Button>
              <Button sx={{ mx: 2, fontWeight: "bold", color: "text.primary" }}>
                Shop
              </Button>
              <Button sx={{ mx: 2, fontWeight: "bold", color: "text.primary" }}>
                Blog
              </Button>
              <Button sx={{ mx: 2, fontWeight: "bold", color: "text.primary" }}>
                Contact
              </Button>
            </Box>

            {/* cart favourite and total information area here  */}
            <Box
              sx={{ mt: "12px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Badge badgeContent={4} color="success">
                  <FavoriteIcon sx={{ color: "text.primary", mx: 1.2 }} />
                </Badge>
                <Badge badgeContent={4} color="success">
                  <LocalMallIcon sx={{ color: "text.primary", mx: 1.2 }} />
                </Badge>

                <Typography
                  sx={{ color: "gray", px: 2, display: "flex" }}
                  variant="p"
                >
                  item:{" "}
                  <Stack sx={{ fontWeight: "bold", color: "text.primary" }}>
                    $150.00
                  </Stack>
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
