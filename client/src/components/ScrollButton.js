import React, { useState } from "react";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const ScrollButton = () => {
  const [scroll, setScroll] = useState(false);
  const showArrow = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", showArrow);
  return (
    scroll && (
      <Button
        aria-label="up"
        variant="contained"
        sx={{
          position: "fixed",
          bottom: 0,
          right: "10%",
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ArrowUpwardIcon />
      </Button>
    )
  );
};
