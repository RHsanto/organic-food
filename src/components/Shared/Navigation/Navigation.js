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
import { NavLink } from "react-router-dom";

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
                  <Button><NavLink to='/home'>Home</NavLink></Button>
                  <Button><NavLink to='/shop'>Shop</NavLink></Button>
                  <Button><NavLink to='/blog'>Blog</NavLink></Button>
                  <Button><NavLink to='/contact'>Contact</NavLink></Button>
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
             
                <NavLink
                 style={(isActive) => ({
                  marginRight: '50px', fontWeight: "bold",
                  letterSpacing:'2px',
                  color: isActive ? "green" : "black",
                })}
                 to='/home'>Home</NavLink>
 
              <NavLink
               style={(isActive) => ({
                marginRight: '50px', fontWeight: "bold",
                letterSpacing:'2px',
                color: isActive ? "green" : "black",
              })}
               to='/shop'>  Shop</NavLink>
    
             
               <NavLink 
               style={(isActive) => ({
                marginRight: '50px', fontWeight: "bold",
                letterSpacing:'2px',
                color: isActive ? "green" : "black",
              })}
                to='/blog'>
               Blog
               </NavLink>
  
                <NavLink
                 style={(isActive) => ({
                  marginRight: '50px', fontWeight: "bold",
                  letterSpacing:'2px',
                  color: isActive ? "green" : "black",
                })}
                 to='/contact'>
                Contact
                </NavLink>
            
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
                <Badge badgeContent={1} color="success">
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
