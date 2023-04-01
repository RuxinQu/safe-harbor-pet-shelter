import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Banner } from "../components/Pet/Banner";
import { Search } from "../components/Pet/Search";
import { PetCard } from "../components/Pet/PetCard";
import { getPets } from "../util/api";

export default function AdoptPet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [type, setType] = useState("all");
  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSearch = async (type) => {
      const pets = await getPets(type);
      setPets([...pets]);
      setLoading(false);
    };
    handleSearch(type);
  }, [type]);

  return (
    <Box sx={{ backgroundColor: "#e0e0e0" }}>
      <Search />
      <Banner handleChangeType={handleChangeType} type={type} />
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
