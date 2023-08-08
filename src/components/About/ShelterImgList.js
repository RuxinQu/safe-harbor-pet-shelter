import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function setWidth(shelter) {
  switch (shelter) {
    case "dog":
      return { width: { xs: "80%", sm: 400 }, height: { xs: "auto", sm: 360 } };
    case "cat":
      return { width: { xs: "80%", sm: 300 } };
    case "sale":
      return { width: { xs: "80%", sm: 500 }, height: { xs: "auto", sm: 200 } };
    default:
      return;
  }
}

function setCol(shelter) {
  switch (shelter) {
    case "cat":
      return 1;
    case "sale":
      return 4;
    default:
      return 2;
  }
}

export const ShelterImgList = ({ images, shelter }) => {
  return (
    <ImageList sx={setWidth(shelter)} variant="quilted" cols={setCol(shelter)}>
      {images.map((item) => (
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
