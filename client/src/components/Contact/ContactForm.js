import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { sendContactForm } from "../../util/api";
import { ToastContainer, toast } from "react-toastify";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import FormControlLabel from "@mui/material/FormControlLabel";
const menu = [
  "Adoption Inquiry",
  "Volunteering",
  "Donations",
  "General Question",
  "Other",
];

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  otherSubject: "",
  message: "",
};

export const ContactForm = () => {
  const {
    watch,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues, mode: "onBlur" });

  const selectedOption = watch("subject");

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form submitted!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <Box>
      <Typography textAlign={"center"}>We'd Love to Hear From You!</Typography>
      <Box
        component={"form"}
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > :not(style)": { m: 1, width: 320 },
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          render={({ field }) => (
            <TextField label="Name" size="medium" required {...field} />
          )}
          name="name"
          control={control}
          rules={{
            required: "Name is required",
            maxLength: { value: 20, message: "Maximum length exceeded" },
          }}
        />
        {errors.name && <small className="error">{errors.name.message}</small>}

        <Controller
          render={({ field }) => (
            <TextField label="Email" size="medium" required {...field} />
          )}
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid Email address",
            },
          }}
        />
        {errors.email && (
          <small className="error">{errors.email.message}</small>
        )}

        <Controller
          render={({ field }) => (
            <TextField label="Phone" size="medium" required {...field} />
          )}
          name="phone"
          control={control}
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/,
              message: "Invalid phone nubmer",
            },
          }}
        />
        {errors.phone && (
          <small className="error">{errors.phone.message}</small>
        )}
        <FormControl>
          <InputLabel>Subject</InputLabel>
          <Controller
            name="subject"
            control={control}
            rules={{
              required: "Subject is required",
            }}
            render={({ field }) => (
              <Select {...field} required label="Subject">
                {menu.map((i) => (
                  <MenuItem value={i} key={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        {errors.subject && (
          <small className="error">{errors.subject.message}</small>
        )}

        {selectedOption === "Other" && (
          <Controller
            name="otherSubject"
            control={control}
            rules={{
              required: "Subject is required",
            }}
            render={({ field }) => (
              <TextField
                label="Enter Your Subject Here"
                size="medium"
                {...field}
              />
            )}
          />
        )}
        {errors.otherSubject && (
          <small className="error">{errors.otherSubject.message}</small>
        )}

        <Controller
          name="message"
          control={control}
          rules={{
            required: "Subject is required",
          }}
          render={({ field }) => (
            <TextField
              label="Message"
              size="medium"
              multiline
              rows={5}
              required
              {...field}
            />
          )}
        />
        {errors.message && (
          <small className="error">{errors.message.message}</small>
        )}

        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ width: 100 }}
          type="submit"
        >
          Send
        </Button>
      </Box>

      <ToastContainer />
    </Box>
  );
};
