import React, { useEffect } from "react";
import { Banner } from "../components/Pet/Banner";
import { PetCard } from "../components/Pet/PetCard";
import { imageData } from "../util/data";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
export default function AdoptPet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />

      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ justifyContent: "space-evenly" }}
      >
        {imageData.map((i) => (
          <ImageListItem>
            <PetCard title={i.title} img={i.img} />
          </ImageListItem>
        ))}
      </Grid>
    </>
  );
}
