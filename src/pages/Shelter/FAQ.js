import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { qna } from "../../util/data";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const navigation = ["previous", "next"];

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { questionId } = useParams();
  const navigate = useNavigate();
  const id = parseInt(questionId);
  return (
    <Box
      sx={{
        width: "90%",
        minHeight: "80vh",
        margin: "auto",
        my: 2,
      }}
    >
      <Tooltip title="Back to FAQ" placement="bottom">
        <Fab
          aria-label="back"
          size="medium"
          onClick={() => {
            navigate("/");
            setTimeout(
              () => document.getElementById("faq").scrollIntoView(),
              50
            );
          }}
        >
          <ArrowBackIcon />
        </Fab>
      </Tooltip>
      {id < 6 && id >= 0 ? (
        <Box
          sx={{
            width: { xs: "90%", lg: 900 },
            margin: "0 auto",
          }}
        >
          <Typography
            key={[id - 1]}
            sx={{
              fontSize: { xs: 24, md: 33 },
              mt: "2rem",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {qna[id - 1].question}
          </Typography>
          <Typography
            key={qna[id - 1]}
            variant="body1"
            sx={{ my: 5 }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {id === 2 && (
              <>
                <Link
                  style={{ fontWeight: 600 }}
                  href="https://www.hsi.org/news-media/adopting-transporting-pets-internationally/"
                  target="_blank"
                >
                  Here
                </Link>{" "}
                is an article you should read before starting the adoption
                process.{" "}
              </>
            )}
            {qna[id - 1].answer}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {navigation.map((nav) => (
              <Fab
                key={nav}
                disabled={
                  (nav === "previous" && id === 1) ||
                  (nav === "next" && id === 5)
                }
                variant="extended"
                size="medium"
                color="primary"
                onClick={() => {
                  if (nav === "previous") {
                    navigate(`/question/${id - 1}`);
                  } else {
                    navigate(`/question/${id + 1}`);
                  }
                }}
              >
                {nav}
              </Fab>
            ))}
          </Box>
        </Box>
      ) : (
        <Typography textAlign="center">Bad Request</Typography>
      )}
    </Box>
  );
}
