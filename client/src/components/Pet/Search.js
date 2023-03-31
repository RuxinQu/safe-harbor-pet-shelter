import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
// import useHistory here.
import { useNavigate } from "react-router-dom";

export const Search = () => {
  // get the history object here
  const navigate = useNavigate();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value,
    }).toString();

    // imperatively redirect with history.push()
    navigate("/search?" + searchQuery);
  };

  return (
    <Box
      sx={{ position: "absolute", right: 0, top: "20px" }}
      component="form"
      onSubmit={onSearchHandler}
    >
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </Box>
  );
};
