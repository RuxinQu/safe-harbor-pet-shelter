import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const HomeSectionTop = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        backgroundColor: "#152238",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", lg: "flex-end" },
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#e1e1e1",
            fontWeight: 800,
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "2.5rem", xl: "4rem" },
            padding: { xs: "3rem", lg: 0 },
          }}
        >
          Adopt a furry friend?
        </Typography>
      </Box>

      {/* banner wrapper */}
      <Box
        sx={{
          display: "flex",
          // justifyContent: "flex-end",
          position: "relative",
          width: { xs: "100%", lg: "80%" },
        }}
      >
        {/* top curve banner */}
        <Box
          className="custom-shape-divider-top"
          sx={{
            display: { xs: "block", lg: "none" },
            marginTop: -1,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#152238"
              fillOpacity="1"
              d="M0,128L1440,32L1440,0L0,0Z"
            ></path>
          </svg>
        </Box>
        <img
          className="home-img"
          src="bg-home.jpg"
          alt="background"
          style={{
            width: "100%",
            backgroundColor: "#152238",
          }}
        />
      </Box>
    </Box>
  );
};
