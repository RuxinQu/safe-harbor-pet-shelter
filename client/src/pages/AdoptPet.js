import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { BannerContainer } from "../containers/Pet/BannerContainer";
import { PetCard } from "../components/Pet/PetCard";
import { imageData } from "../util/data";

export default function AdoptPet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BannerContainer />
      <Grid container width={{ xs: "95%", md: "80%", xl: 1200 }} mx={"auto"}>
        {imageData.map((i) => (
          <Grid
            key={i.img}
            item
            xs={12}
            sm={6}
            lg={3}
            sx={{ p: { xs: "2px", md: "5px" } }}
          >
            <PetCard title={i.title} img={i.img} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
