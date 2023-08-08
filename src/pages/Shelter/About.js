import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Hero } from "../../components/About/Hero";
import { SocialIcon } from "../../components/About/SocialIcon";
import { ShelterImgList } from "../../components/About/ShelterImgList";
import { dogShelter, catShelter, adoption } from "../../util/data";

const button = [
  { a: "/donate", text: "Thinking of Donating to us?" },
  { a: "/question/1", text: "Other ways to help us?" },
];

export default function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Box
        sx={{
          width: { xs: "90%", md: "70%", xl: 1200 },
          m: "5rem auto",
        }}
      >
        <Divider
          color="theme"
          sx={{
            borderBottomWidth: 3,
            m: "2rem auto",
            backgroundColor: "#152238",
            width: 100,
          }}
        />
        <Typography sx={{ my: "2rem" }}>
          We are a non-governmental animal protection organization founded by
          Ms. Bu Yi (Habao) in 2002. It is a member of{" "}
          <Link href="http://www.csapa.org/apinfo/26461.htm" target="_blank">
            China Small Animal Protection Association
          </Link>
          . For the past {new Date().getFullYear() - 2002} years, our
          organization has been dedicated to rescuing as many stray cats and
          dogs as possible.
        </Typography>
        <Typography sx={{ my: "2rem" }}>
          Currently, we care for over <strong>800</strong> cats and dogs in
          Jiaxing, China, providing them with essential health care and
          services, including spaying/neutering and vaccinations. Our ultimate
          goal is to help each animal find a loving and permanent home.
        </Typography>
        {/* dog house section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            my: "5px",
          }}
        >
          <ShelterImgList images={dogShelter} shelter="dog" />
          <Box sx={{ width: { xs: "100%", lg: "400px" }, fontWeight: 600 }}>
            <Typography variant="h6" textAlign="center">
              The Dog House
            </Typography>
            <Typography sx={{ my: "1rem" }}>
              We do everything we can to keep the dogs happy in the farmhouse
              yard. We receive donations to cover the cost of food and other
              daily expenses.
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ borderBottomWidth: 3 }} />

        {/* cat house section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            my: "5px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", lg: "400px" },
              fontWeight: 600,
              order: { xs: 2, lg: -1 },
            }}
          >
            <Typography variant="h6" textAlign="center">
              The Cat House
            </Typography>
            <Typography sx={{ my: "1rem" }}>
              We have many volunteers who help with cleaning the shelter,
              feeding the cats, providing medical care and etc.
            </Typography>
          </Box>
          <ShelterImgList images={catShelter} shelter="cat" />
        </Box>
        <Divider sx={{ borderBottomWidth: 3 }} />

        {/* activity section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            my: "5px",
          }}
        >
          <ShelterImgList images={adoption} shelter="sale" />
          <Box sx={{ width: { xs: "100%", lg: "400px" }, fontWeight: 600 }}>
            <Typography variant="h6" textAlign="center">
              Adoption & Charity Sale
            </Typography>
            <Typography sx={{ my: "1rem" }}>
              Our volunteers always hold adoption activity to let people meet
              our lovely animals. Charity sale are organized by our volunteers.
              All money and donations are directly used for our animals.
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ borderBottomWidth: 3 }} />

        <Box
          sx={{
            my: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ my: "1rem" }}>
            However, The COVID-19 pandemic has caused the shelter to face
            unprecedented financial challenges. Transportation issues have
            caused some dogs and cats to remain in the shelter, even though a
            suitable family has been found for them.
          </Typography>
          {button.map((b) => (
            <Button
              key={b.text}
              component={"a"}
              href={b.a}
              variant="outlined"
              sx={{ margin: "0.5rem 0" }}
            >
              {b.text}
            </Button>
          ))}
          <Typography sx={{ my: "1rem" }}>
            We welcome all questions. If you have any questions regarding our
            shelter, feel free to <Link href="/contact">contact us</Link> or
            check out our social media(in Chinese).
          </Typography>
          <SocialIcon />
        </Box>

        <Box
          sx={{
            width: { xs: "70%", lg: "50%", xl: "600px" },
            m: "0 auto",
          }}
        >
          <iframe
            title="jiaxing"
            width="100%"
            height="400"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJoZwNwgglszURnK1eqfG8F04&key=AIzaSyAaByHIVWRDbEfoeZkQcrLQg1upeS4Lza0"
          ></iframe>
        </Box>
      </Box>
    </>
  );
}
