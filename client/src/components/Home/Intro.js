import React, { useState } from "react";
import Link from "@mui/material/Link";
import { Link as ReactRouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import PetsIcon from "@mui/icons-material/Pets";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { qna } from "../../util/data";

export const Intro = () => {
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
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "3rem 0",
      }}
    >
      <Box
        sx={{
          width: { xs: 100, lg: 150 },
          height: { xs: 100, lg: 150 },
        }}
      >
        <img src="logo.png" alt="logo" style={{ width: "100%" }} />
      </Box>
      <Typography
        sx={{
          fontWeight: 800,
          textAlign: "center",
          width: "90%",
          fontSize: { xs: "1.4rem", md: "1.9rem" },
        }}
      >
        Safe Harbor Pet Shelter (China)
      </Typography>

      {/* wrapper for the cards */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: { xs: "3rem 0", lg: "5rem 0" },
        }}
      >
        <Card sx={{ width: { xs: "95%", sm: 400 }, minHeight: 300 }}>
          <CardContent>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.3rem", md: "1.8rem" },
                textAlign: "center",
              }}
              gutterBottom
            >
              Who We Are
            </Typography>
            <Typography variant="body1" textAlign="center">
              We are a non-governmental animal protection organization founded
              by Ms. Bu Yi(Habao) in Jiaxing, China in 2002. Currently, our
              shelter houses{" "}
              <span style={{ color: "#000", fontWeight: 800 }}>800+</span> cats
              and dogs.
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" component={ReactRouterLink} to="/about-us">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: { xs: "95%", sm: 400 }, minHeight: 300 }}>
          <CardContent>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.3rem", md: "1.8rem" },
                textAlign: "center",
              }}
              gutterBottom
            >
              What We Care
            </Typography>
            <Typography variant="body1" textAlign="center">
              We adopt these stray animals and are committed to helping them
              find their forever homes. All dogs and cats in our care are spayed
              or neutered and fully vaccinated.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: { xs: "95%", sm: 400 }, minHeight: 300 }}>
          <CardContent>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.3rem", md: "1.8rem" },
                textAlign: "center",
              }}
              gutterBottom
            >
              What We Provide
            </Typography>
            <Typography variant="body1" textAlign="center">
              We offer{" "}
              <span style={{ color: "#000", fontWeight: 800 }}>
                international
              </span>{" "}
              adoption options, though the rules and requirements may vary
              depending on the country. For more information, please contact
              Habao.
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              size="small"
              variant="contained"
              endIcon={<PetsIcon />}
              component={ReactRouterLink}
              to="/pet"
            >
              Adopt a Pet
            </Button>
          </CardActions>
        </Card>
      </Box>

      <Divider sx={{ borderBottomWidth: 3, width: "90%" }} />

      {/* we need help part*/}
      <Box
        sx={{
          textAlign: "center",
          width: { xs: "80%", md: "70%", lg: "1000px" },
          margin: { xs: "5rem 0", lg: "8rem 0" },
        }}
      >
        <Typography
          color="#f44336"
          sx={{ fontWeight: 700, fontSize: { xs: "1.3rem", md: "1.8rem" } }}
        >
          --- We Need Help ---
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          The COVID-19 pandemic has caused the shelter to face unprecedented
          financial challenges. Transportation issues have caused some dogs and
          cats to remain in the shelter, even though a suitable family has been
          found for them. We kindly ask for any donations, no matter how small,
          to help support the shelter and our mission to find loving homes for
          all animals.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          component={ReactRouterLink}
          to="/donate"
          startIcon={<VolunteerActivismIcon />}
        >
          DONATE
        </Button>
      </Box>

      <Divider sx={{ borderBottomWidth: 3, width: "90%" }} />

      {/* question section */}
      <Box sx={{ my: "3rem" }} id="faq">
        <Typography
          sx={{
            fontWeight: 800,
            textAlign: "center",
            fontSize: { xs: 20, md: 25 },
            mb: 5,
          }}
          gutterBottom
        >
          FAQ
        </Typography>

        {qna.map((qa) => {
          return (
            <Typography key={qa.id} variant="body1" sx={{ padding: "2px 0" }}>
              <Link
                to={`/question/${qa.id}`}
                component={ReactRouterLink}
                underline="hover"
                className="question"
              >
                {qa.question}
              </Link>
            </Typography>
          );
        })}
      </Box>

      {scroll && (
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
      )}
    </Box>
  );
};
