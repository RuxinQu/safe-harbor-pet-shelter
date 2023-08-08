import React from "react";
import { withStyles } from "@mui/icons-material/";
import Divider from "@mui/material/Divider";

const styles = (theme) => ({
  divider: {
    backgroundColor: "#FF0000", // Replace with your desired color
    height: 2, // Customize the height of the divider as needed
  },
});

export const CustomDivider = withStyles(styles)(({ classes }) => (
  <Divider className={classes.divider} />
));
