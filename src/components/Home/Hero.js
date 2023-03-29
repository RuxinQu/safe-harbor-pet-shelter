import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { imageData } from "../../util/data";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const Hero = () => {
  const matchesSm = useMediaQuery("(min-width:600px)");
  const matchesMd = useMediaQuery("(min-width:900px)");
  return (
    <Box sx={{ backgroundColor: "#152238", py: { xs: 5, md: 10 } }}>
      <Typography
        color="#e1e1e1"
        sx={{
          fontWeight: 800,
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "2rem", lg: "3rem" },
          pb: { xs: 5, md: 10 },
        }}
      >
        Adopt a Furry Friend?
      </Typography>

      {/* banner wrapper */}

      {/* top curve banner */}
      <ImageList
        className="home-image"
        sx={{ width: { sx: "100%", xl: "1400px" }, m: "0 auto" }}
        variant="quilted"
        cols={matchesMd ? 12 : 6}
        rowHeight={matchesSm ? 120 : 60}
      >
        {imageData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
