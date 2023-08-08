import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 500,
        backgroundImage: "url(/assets/banner-contact.JPG)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography
        className="contact-title"
        color="#e1e1e1"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: { xs: "1.5rem", sm: "2rem", lg: "3rem" },
        }}
      >
        Contact Us
      </Typography>
    </Box>
  );
};
