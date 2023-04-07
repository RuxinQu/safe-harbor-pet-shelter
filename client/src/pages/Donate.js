import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Donate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        width: { xs: "95%", md: "80%", xl: 1200 },
        textAlign: "center",
        m: "1rem auto",
      }}
    >
      <Typography sx={{ fontSize: { xs: "1.3rem", md: "1.8rem" } }}>
        Note:
      </Typography>
      <Typography>
        Habao does not have a PayPal or other account to receive US dollars.
        Therefore, this feature is currently unavailable, and{" "}
        <span style={{ color: "#f44336", fontWeight: 600 }}>
          any attempted transactions will not go through
        </span>
        . We kindly ask that you contact Harbor before attempting a donation. We
        appreciate your generosity in considering a donation, and we are working
        to find a solution to this issue.
      </Typography>
      <Box mt={"1rem"}>
        <iframe
          src="https://donorbox.org/embed/safe-harbor-pet-shelter-1"
          title="donorbox"
          allowpaymentrequest="allowpaymentrequest"
          seamless="seamless"
          frameBorder="0"
          scrolling="no"
          height="500px"
          width="100%"
          style={{
            maxWidth: "500px",
            minWidth: "250px",
            maxHeight: "none!important",
          }}
        ></iframe>
      </Box>
    </Box>
  );
}
