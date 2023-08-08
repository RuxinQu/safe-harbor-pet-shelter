import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 500,
        backgroundImage: "url(/assets/banner-about.JPG)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
      }}
    >
      <Typography
        color={"#fff"}
        sx={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: { xs: "1.5rem", sm: "2rem", lg: "3rem" },
        }}
      >
        Safe Harbor Pet Shelter (China)
      </Typography>
    </Box>
  );
};
