import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Search } from "../Search";

export const PetHero = () => {
  return (
    <Box>
      <Typography>Adopt a Pet</Typography>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="cat" control={<Radio />} label="Cat" />
          <FormControlLabel value="dog" control={<Radio />} label="Dog" />
        </RadioGroup>
      </FormControl>
      <Search />
    </Box>
  );
};
