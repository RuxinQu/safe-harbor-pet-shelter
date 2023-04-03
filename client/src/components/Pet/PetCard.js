import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const PetCard = ({ name, img, gender, breed, id }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ mb: { xs: 0, md: "1rem", lg: "2rem" } }}>
      <CardMedia sx={{ height: 320 }} image={img} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Breed: {breed}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Gender: {gender}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/pet/adopt/${id}`)}>
          Adopt
        </Button>
        <Button size="small" onClick={() => navigate(`/pet/detail/${id}`)}>
          Detail
        </Button>
      </CardActions>
    </Card>
  );
};
