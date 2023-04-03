import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const Detail = ({ id, pet, loading }) => {
  return (
    !loading && (
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: 800 },
          mx: "auto",
          my: { xs: "2rem", md: "4rem" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem", lg: "1.8rem" },
            my: "1rem",
            textAlign: "center",
          }}
        >
          {pet.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ width: 345, mx: "auto" }}>
            <ImageGallery items={pet.ImageGalleryArr} loading="lazy" />
          </Box>
          <Box sx={{ p: "2rem", mx: "auto" }}>
            <Typography variant="h6">Breed: {pet.breed}</Typography>
            <Typography variant="h6">Gender: {pet.gender}</Typography>
            <Link component={ReactRouterLink} to={`/pet/adopt/${id}`}>
              Adopt {pet.name}
            </Link>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "80%", md: 800 }, mx: "auto" }}>
          <Typography variant="body1" sx={{ my: "1rem" }}>
            {pet.description}
          </Typography>
        </Box>
      </Box>
    )
  );
};