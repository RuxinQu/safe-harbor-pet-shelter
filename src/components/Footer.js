import * as React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

const navigation = [
  { title: "about us", path: "/about-us" },
  { title: "adopt a pet", path: "/adopt-a-pet" },
  { title: "donate", path: "/donate" },
  { title: "contact us", path: "/contact" },
];
export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#152238", color: "#e1e1e1" }}>
      <Grid
        container
        textAlign="center"
        sx={{ pb: 3, m: "0 auto", width: { xs: "100%", md: "90%", lg: 1200 } }}
      >
        {/* icon and shelter title */}
        <Grid xs={12} lg={2}>
          <img src="/logo.png" alt="logo" width="100px" className="logo" />
          <Typography>Safe Harbor Pet Shelter</Typography>
        </Grid>

        {/* links on the right */}
        <Grid
          container
          xs={12}
          lg={10}
          textAlign="center"
          sx={{ p: { xs: 2, md: 5 } }}
        >
          {navigation.map((nav) => (
            <Grid xs={12} lg={3}>
              <Link
                color="inherit"
                underline="hover"
                variant="body2"
                sx={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
                component={ReactRouterLink}
                to={nav.path}
              >
                {nav.title}
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid xs={12} container justifyContent="center" sx={{ order: "1" }}>
          <Typography sx={{ fontSize: "small" }}>
            Copyright © {new Date().getFullYear()} - RuxinQu
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
