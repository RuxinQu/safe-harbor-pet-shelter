import React, { useState, useEffect } from "react";
import { useParams, Link as ReactRouterLink } from "react-router-dom";
import { getPetsById } from "../util/api";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import ErrorIcon from "@mui/icons-material/Error";

export default function Adopt() {
  const { id } = useParams();
  const [pet, setPet] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleSearch = async (id) => {
      const petById = await getPetsById(id);
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
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem", lg: "1.8rem" },
            textAlign: "center",
          }}
        >
          Adopt {pet.name}
        </Typography>
        <Link component={ReactRouterLink} to={`/pet/detail/${id}`}>
          View detail about {pet.name}
        </Link>
        <Typography sx={{ my: { xs: "2rem", md: "4rem" } }}>
          <ErrorIcon color="error" fontSize="large" />
          We are currently testing this feature. Please{" "}
          <Link component={ReactRouterLink} to="/contact">
            contact us
          </Link>{" "}
          for information on the adoption process.
        </Typography>
      </Box>
    )
  );
}
