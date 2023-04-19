import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FaWeibo } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { ShelterImgList } from "../../components/About/ShelterImgList";
import { dogShelter, catShelter, charitySale } from "../../util/data";

const button = [
  { a: "/donate", text: "Thinking of Donating to us?" },
  { a: "/question/1", text: "Other ways to help us?" },
];

export default function Aboutus() {
  const [showWechat, setShowWechat] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "70%", xl: 1200 },
        m: "1rem auto",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: { xs: "1.4rem", md: "1.9rem" },
          py: "2rem",
        }}
      >
        Safe Harbor Pet Shelter (China)
      </Typography>
      <Typography variant="body1">
        We are a non-governmental animal protection organization founded by Ms.
        Bu Yi (Habao) in 2002. It is a member of{" "}
        <Link href="http://www.csapa.org/apinfo/26461.htm" target="_blank">
          China Small Animal Protection Association
        </Link>
        . For the past {new Date().getFullYear() - 2002} years, our organization
        has been dedicated to rescuing as many stray cats and dogs as possible.
        Currently, we care for over <strong>800</strong> cats and dogs in
        Jiaxing, China, providing them with essential health care and services,
        including spaying/neutering and vaccinations. Our ultimate goal is to
        help each animal find a loving and permanent home.
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
          <Typography variant="body1">
            We do everything we can to keep the dogs happy in the farmhouse
            yard. We receive donations to cover the cost of food and other daily
            expenses.
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
          <Typography variant="body1">
            We have many volunteers who help with cleaning the shelter, feeding
            the cats, providing medical care and etc.
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
        <ShelterImgList images={charitySale} shelter="sale" />
        <Box sx={{ width: { xs: "100%", lg: "400px" }, fontWeight: 600 }}>
          <Typography variant="h6" textAlign="center">
            Adoption & Charity Sale
          </Typography>
          <Typography variant="body1">
            Our volunteers always hold adoption activity to let people meet our
            lovely animals. Charity sale are organized by our volunteers. All
            money and donations are directly used for our animals.
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
        <Typography variant="body1">
          However, The COVID-19 pandemic has caused the shelter to face
          unprecedented financial challenges. Transportation issues have caused
          some dogs and cats to remain in the shelter, even though a suitable
          family has been found for them.
        </Typography>
        {button.map((b) => (
          <Button
            key={b.text}
            component={"a"}
            href={b.a}
            target="_blank"
            variant="outlined"
            sx={{ margin: "0.5rem 0" }}
          >
            {b.text}
          </Button>
        ))}
        <Typography variant="body1">
          We welcome all questions. If you have any questions regarding our
          shelter, feel free to{" "}
          <Link href="/contact" target="_blank">
            contact us
          </Link>{" "}
          or check out our social media(in Chinese).
        </Typography>
        <Box>
          <IconButton
            aria-label="weibo"
            size="large"
            color="error"
            component={"a"}
            target="_blank"
            href="https://weibo.com/n/哈宝的爱之家基地"
          >
            <FaWeibo />
          </IconButton>
          <IconButton
            aria-label="phone"
            size="large"
            color="success"
            onClick={() =>
              showWechat ? setShowWechat(false) : setShowWechat(true)
            }
          >
            <AiFillWechat />
          </IconButton>
          {showWechat && <span>Account Number: 13967353069</span>}
          <IconButton
            size="small"
            color="error"
            component="a"
            target="_blank"
            href="https://www.xiaohongshu.com/user/profile/5c2302d70000000005031f0c"
          >
            <img
              src="https://asset.brandfetch.io/idvL6iJWSM/idR0HyI9DC.png"
              alt="little red book"
              width={31.5}
              height={31.5}
            />
          </IconButton>
        </Box>
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
  );
}
