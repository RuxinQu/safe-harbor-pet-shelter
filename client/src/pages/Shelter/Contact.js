import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { SocialIcon } from "../../components/About/SocialIcon";
import { ContactForm } from "../../components/Contact/ContactForm";
import { Hero } from "../../components/Contact/Hero";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Box
        className="contact"
        sx={{
          width: { xs: "90%", md: "70%", xl: 1200 },
          m: "2rem auto",
        }}
      >
        <Typography sx={{ my: "2rem" }}>
          We are a non-governmental animal protection organization founded by
          Ms. Bu Yi(Habao) in Jiaxing, China in 2002. Currently, our shelter
          houses 800+ cats and dogs.
        </Typography>
        <Typography sx={{ my: "2rem" }}>
          Have a question about the adoption process or our shelter? Feel free
          to contact us through the contact form! Due to the time zone
          difference, we will try to get back to you within a week. Thank you
          for your patience. Safe Harbor Pet Shelter wishes you a wonderful
          life.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: { xs: "column", md: "row" },
            m: "3rem 0",
          }}
        >
          <ContactForm />
          <Box
            sx={{
              padding: "1rem 0",
              width: 320,
            }}
          >
            <p>Our contact information:</p>
            <Link href="mailto:safeharborpetshelter@gmail.com">
              safeharborpetshelter@gmail.com
            </Link>
            <p>Follow us:</p>
            <SocialIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
}
