import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import FavoriteIcon from "@mui/icons-material/Favorite";

const pages = [
  { title: "Home", path: "/" },
  { title: "Find a Pet", path: "/adopt-a-pet" },
  { title: "Contact", path: "/contact" },
];
export const AppNavbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    // navigate(path);
    setAnchorElNav(null);
  };

  // When a user scrolls up, the header will show up. When they scroll down, it disappears.
  const [scroll, setScroll] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const changeHeader = () => {
    let newScroll = window.scrollY;
    if (newScroll - scroll < 0) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    setScroll(newScroll);
  };
  window.addEventListener("scroll", changeHeader);

  return (
    <AppBar position={showHeader ? "sticky" : "static"} color="theme">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              width: { xs: 0, lg: 100 },
              height: { xs: 0, lg: 100 },
            }}
          >
            <img
              src="/logo.png"
              alt="logo"
              style={{ width: "100%" }}
              className="logo"
            />
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              fontFamily: "Rowdies",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Harbor
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* this part of menu is for mobile */}
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
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  component={ReactRouterLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* this part of menu is for desktop */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              fontFamily: "Rowdies",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Harbor
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                component={ReactRouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#e1e1e1",
                  display: "block",
                  fontFamily: "Rowdies",
                }}
              >
                {page.title}
              </Button>
            ))}
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              color="#e1e1e1"
              sx={{ mx: 3 }}
            />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Donate to us">
              <Button
                sx={{
                  my: 2,
                  color: "#e1e1e1",
                  fontFamily: "Rowdies",
                }}
                component={ReactRouterLink}
                to="/donate"
                startIcon={<FavoriteIcon color="error" />}
              >
                DONATE
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <Divider variant="middle" color="#e1e1e1" />
    </AppBar>
  );
};
