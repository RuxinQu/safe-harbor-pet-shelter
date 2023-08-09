import * as React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

const quickLinks = [
  { title: "about us", path: "/about-us" },
  { title: "contact us", path: "/contact" },
  { title: "faq", path: "/" },
];

const categories = [
  { title: "adopt a pet", path: "/pet" },
  { title: "donate", path: "/donate" },
  { title: "admin", path: "/admin" },
];

export function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#152238",
        color: "#e1e1e1",
        py: 2,
      }}
    >
      <Grid
        container
        sx={{ mx: "auto", width: { xs: "90%", md: "70%", xl: 1200 } }}
      >
        {/* icon and title on the top left */}
        <Grid xs={12} md={6} lg={4} textAlign="center">
          <img src="/logo.png" alt="logo" width="100px" className="logo" />
          <Item sx={{ fontSize: "1rem" }}>Safe Harbor Pet Shelter</Item>
        </Grid>

        <Grid
          container
          xs={12}
          md={6}
          lg={8}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {/* categories */}
          <Grid xs={6} lg={4}>
            <Item>
              <Box
                id="quick-links"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Quick Links
              </Box>
              <Box
                component="ul"
                aria-labelledby="quick-links"
                sx={{ pl: 2, listStyle: "none" }}
              >
                {quickLinks.map((nav) => (
                  <li key={nav.title}>
                    <Link
                      fontSize="11px"
                      component={ReactRouterLink}
                      to={nav.path}
                      underline="hover"
                      color="inherit"
                      sx={{ textTransform: "uppercase" }}
                      onClick={() => {
                        if (nav.title === "faq") {
                          setTimeout(
                            () =>
                              document.getElementById("faq").scrollIntoView(),
                            50
                          );
                        }
                      }}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </Box>
            </Item>
          </Grid>
          {/* categories */}
          <Grid xs={6} lg={4}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Categories
              </Box>
              <Box
                component="ul"
                aria-labelledby="category-b"
                sx={{ pl: 2, listStyle: "none" }}
              >
                {categories.map((c) => (
                  <li key={c.title}>
                    <Link
                      fontSize="11px"
                      component={ReactRouterLink}
                      to={c.path}
                      underline="hover"
                      color="inherit"
                      sx={{ textTransform: "uppercase" }}
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item sx={{ fontSize: "small" }}>
              Copyright © {new Date().getFullYear()} - Safe Harbor Pet Shelter.
              Developed by{" "}
              <Link href="http://ruxinqu.com" color={"#FFA500"}>
                Ruxin Qu
              </Link>
              .
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
