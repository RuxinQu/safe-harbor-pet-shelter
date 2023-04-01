import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getPetsByName } from "../util/api";
import { PetCard } from "../components/Pet/PetCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SearchPage() {
  // Get the search value from useLocation() here
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const name = searchParams.get("name");

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSearch = async (name) => {
      const pets = await getPetsByName(name);
      setPets([...pets]);
      setLoading(false);
    };
    handleSearch(name);
  }, [name]);
  return (
    <Box sx={{ backgroundColor: "#e0e0e0" }}>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: { xs: "1.1rem", md: "1.3rem", lg: "1.4rem" },
          py: { xs: "2rem", md: "4rem" },
        }}
      >
        {pets.length
          ? `Here are the results for the pet's name '${name}':`
          : `No pets were found with the name '${name}'.`}
      </Typography>
      <Grid container width={{ xs: "95%", md: "80%", xl: 1200 }} mx={"auto"}>
        {!loading &&
          pets.map((i) => (
            <Grid
              key={i._id}
              item
              xs={12}
              sm={6}
              lg={3}
              sx={{ p: { xs: "2px", md: "5px" } }}
            >
              <PetCard title={i.name} img={i.images[0].url} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
