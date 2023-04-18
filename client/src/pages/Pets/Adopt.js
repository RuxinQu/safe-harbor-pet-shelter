import React, { useState, useEffect } from "react";
import { useParams, Link as ReactRouterLink } from "react-router-dom";
import { getPetById } from "../../util/api";
import { AdoptForm } from "../../components/Pet/AdoptForm";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function Adopt() {
  const { id } = useParams();
  const [pet, setPet] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleSearch = async (id) => {
      const petById = await getPetById(id);
      setPet(petById);
      setLoading(false);
    };
    handleSearch(id);
  });

  return (
    !loading && (
      <Box
        sx={{
          width: { xs: "80%", xl: 1200 },
          mx: "auto",
          my: { xs: "2rem", md: "4rem" },
          textAlign: "center",
        }}
      >
        <Link component={ReactRouterLink} to={`/pet/detail/${id}`}>
          View detail about {pet.name}
        </Link>
        <AdoptForm pet={pet} />
      </Box>
    )
  );
}
