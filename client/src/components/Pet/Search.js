import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";

export const Search = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchHandler = (data) => {
    const searchQuery = new URLSearchParams({
      name: data.name,
    }).toString();
    navigate("/search?" + searchQuery);
  };

  return (
    <Container maxWidth="xl">
      <form
        onSubmit={handleSubmit(onSearchHandler)}
        style={{ textAlign: "right", padding: "1rem 0 2rem 0" }}
      >
        <input
          {...register("name", { required: true })}
          placeholder="Search a pet by name"
          style={{
            width: "150px",
            borderRadius: "20px",
            padding: "5px",
          }}
        />
        <button
          type="submit"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          🔎
        </button>
      </form>
    </Container>
  );
};
