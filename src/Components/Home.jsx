import { Box, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Home.css";
import React, { useState } from "react";
import img from "../Images/img.png";


const Home = () => {
  const iconStyle = {
    fontSize: "medium",
    width: "20px",
    height: "17px",
    transition: "transform 0.2s ease-in-out",
  };

  const handleDownloadClick = () => {
    const anchor = document.createElement("a");
    anchor.href = "https://drive.google.com/u/3/uc?id=1N8Fdqd9gH--JNvgjmdZBAPlOw5JUiQt1&export=download";
    anchor.download = "Resume.pdf"; 
    anchor.click();
  };
  

  return (
    <Box
      sx={{
        display: "flex",
        height: "45rem",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        id="contentWrapper"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            display: "block",
            color: "white",
            fontWeight: "500",
          }}
          id="tagline"
        >
          I'm a Front End{" "}
          <Typography variant="h3" id="taglPart2">
            Developer
          </Typography>
        </Typography>

        <Typography
          variant="6"
          style={{ color: "#797c80", fontFamily: "'Open Sans', sans-serif" }}
          sx={{
            marginLeft: "0.1rem",
            width: "19.7rem",
            fontSize: "12px",
          }}
          id="description"
        >
          Crafting Seamless User Experiences: Embracing the <p></p> Beauty and
          Challenges of Frontend Development
        </Typography>

        <Button
          size="small"
          variant="contained"
          onClick={handleDownloadClick}
          sx={{
            width: "5.8rem",
            fontSize: "13px",
            textTransform: "inherit",
            "&:hover svg": {
              transform: "rotate(90deg)",
            },
          }}
          id="portfolioBtn"
        >
          Resume <ArrowRightAltIcon fontSize="large" style={iconStyle} />
        </Button>
      
      </Box>

      <Box id="imgContainer">
        <img
          id="img"
          src={img}
          sx={{ height: "20rem" }}
          width={260}
          alt="My image"
        />
      </Box>
    </Box>
  );
};

export default Home;
