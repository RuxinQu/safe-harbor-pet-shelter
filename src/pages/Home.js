import React from "react";
import Box from "@mui/material/Box";

export default function Home() {
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
          padding: { xs: "3rem", lg: 0 },
          position: "relative",
          textAlign: "center",
          display: "flex",
          justifyContent: { xs: "center", lg: "flex-end" },
          alignItems: "center",
        }}
      >
        <h1 className="title">Adopt a furry friend?</h1>
      </Box>

      {/* banner wrapper */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
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
              fill-opacity="1"
              d="M0,96L48,117.3C96,139,192,181,288,202.7C384,224,480,224,576,197.3C672,171,768,117,864,90.7C960,64,1056,64,1152,96C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
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
        {/* bottom curve banner */}
        <Box
          className="custom-shape-divider-bottom"
          sx={{ display: { xs: "block", lg: "none" }, marginBottom: -1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#152238"
              fill-opacity="1"
              d="M0,192L48,192C96,192,192,192,288,192C384,192,480,192,576,165.3C672,139,768,85,864,101.3C960,117,1056,203,1152,224C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </Box>
      </Box>
    </Box>
  );
}
