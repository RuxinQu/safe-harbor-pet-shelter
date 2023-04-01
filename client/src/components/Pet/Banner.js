import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const types = ["all", "cat", "dog"];

export const Banner = ({ type, handleChangeType }) => {
  return (
    <Box textAlign={"center"} sx={{ pb: { xs: "2rem", md: "4rem" } }}>
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: { xs: "1.2rem", md: "1.5rem", lg: "1.8rem" },
        }}
      >
        Pets available for adoption
      </Typography>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="animal-options"
          name="animals"
          value={type}
          onChange={handleChangeType}
        >
          {types.map((t) => (
            <FormControlLabel
              key={t}
              value={t}
              control={<Radio />}
              label={t[0].toUpperCase() + t.slice(1)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
