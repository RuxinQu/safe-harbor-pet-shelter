import React from "react";
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

export const PetHero = () => {
  const matchesSm = useMediaQuery("(min-width:600px)");
  const matchesMd = useMediaQuery("(min-width:900px)");

  return (
    <ImageList
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
  );
};
