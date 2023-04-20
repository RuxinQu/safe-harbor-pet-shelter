import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to submit form data to server or send email
  };

  return (
    <Box>
      <Typography textAlign={"center"}>We'd Love to Hear From You!</Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { m: 1, width: 320 },
        }}
      >
        <TextField
          id="outlined-controlled"
          label="Name"
          name="name"
          size="medium"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <TextField
          id="outlined-controlled"
          label="Email"
          type="email"
          name="email"
          size="medium"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <TextField
          id="outlined-controlled"
          label="Phone"
          type="tel"
          name="phone"
          size="medium"
          value={formState.phone}
          onChange={handleChange}
          required
        />
        <TextField
          id="filled-select-currency-native"
          select
          label="Subject"
          SelectProps={{
            native: true,
          }}
          helperText="Choose a subject"
          name="subject"
          size="medium"
          variant="outlined"
          required
        >
          <option value="Adoption Inquiry">Adoption Inquiry</option>
          <option value="Volunteering">Volunteering</option>
          <option value="Donations">Donations</option>
          <option value="General Question">General Question</option>
        </TextField>
        <TextField
          id="filled-multiline-static"
          label="Message"
          name="message"
          size="medium"
          multiline
          rows={5}
          required
        />
      </Box>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
};
