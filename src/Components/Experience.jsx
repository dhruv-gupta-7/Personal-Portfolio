import { Typography } from "@mui/material";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Experience.css";
import htmlIcon from "../Images/html.png";
import cssIcon from "../Images/css.png";
import javascriptIcon from "../Images/javascript.png";
import reactIcon from "../Images/react.png";
import muiIcon from "../Images/mui.png";
import githubIcon from "../Images/github.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Experience = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        paddingTop: "6rem",
        marginTop: "-2rem",
        padding: "4rem",
      }}
    >
      <Box id="headerWrapper" sx={{ display: "flex", flexDirection: "column" }}>
        <h2
          style={{
            color: "white",
            float: "left",
            marginLeft: "-0.5%",
            marginBottom: "1%",
            borderBottom: "2px solid gray",
            width: "max-content",
            borderRadius: "1px",
            display: "inline",
          }}
        >
          Experience
        </h2>
        <h5 style={{ marginLeft: "-0.5%", color: "white" }}>
          There are the Technologies I've worked with...
        </h5>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "4%",
          flexWrap: "wrap",
        }}
      >
        <Box
          id="iconsBox"
          sx={{
            padding: "8px 7rem",
            borderRadius: "5px",
            boxShadow: "0.5px 3px 2.5px 1px #F16529",
            width: "294px",
            marginBottom: "2rem",
          }}
        >
          <img src={htmlIcon} alt="html" height={70} width={70} />
          <Typography
            style={{ color: "wheat", marginLeft: "13px", marginTop: "10px" }}
          >
            HTML
          </Typography>
        </Box>

        <Box
          id="iconsBox"
          sx={{
            padding: "8px 7rem",
            borderRadius: "5px",
            boxShadow: "0.5px 3px 2.5px 1px #039BE5",
            width: "294px",
            marginBottom: "2rem",
          }}
        >
          <img src={cssIcon} alt="react" height={70} width={70} />
          <Typography
            style={{ color: "wheat", marginLeft: "20px", marginTop: "10px" }}
          >
            CSS
          </Typography>
        </Box>

        <Box
          id="iconsBox"
          sx={{
            padding: "8px 7rem",
            borderRadius: "5px",
            boxShadow: "0.5px 3px 2.5px 1px #FFD600",
            width: "294px",
            marginBottom: "2rem",
          }}
        >
          <img src={javascriptIcon} alt="react" height={70} width={70} />
          <Typography
            style={{ color: "wheat", marginLeft: "-2.5px", marginTop: "10px" }}
          >
            JavaScript
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "4%",
          flexWrap: "wrap",
        }}
      >
        <Box
          id="iconsBox"
          sx={{
            padding: "8px 7rem",
            borderRadius: "5px",
            boxShadow: "0.5px 3px 2.5px 1px #00D7FF",
            width: "294px",
            marginBottom: "2rem",
          }}
        >
          <img src={reactIcon} alt="css" height={70} width={70} />
          <Typography
            style={{ color: "wheat", marginLeft: "13px", marginTop: "10px" }}
          >
            React
          </Typography>
        </Box>

        <Box
          id="iconsBox"
          sx={{
            padding: "8px 7rem",
            borderRadius: "5px",
            boxShadow: "0.5px 3px 2.5px 1px #00D7FF",
            width: "294px",
            marginBottom: "2rem",
          }}
        >
          <img src={muiIcon} alt="muiIcon" height={70} width={70} />
          <Typography
            id="material-ui"
            style={{
              width: "95px",
              color: "wheat",
              marginLeft: "-17px",
              marginTop: "12px",
            }}
          >
            Material-UI
          </Typography>
        </Box>

        <Box
          id="iconsBox"
          sx={{
            padding: "8px 7rem",
            borderRadius: "5px",
            boxShadow: "0.5px 3px 2.5px 1px #F5DEB3",
            width: "294px",
            marginBottom: "2rem",
          }}
        >
          <img src={githubIcon} alt="muiIcon" height={70} width={70} />
          <Typography
            style={{ color: "wheat", marginLeft: "11px", marginTop: "10px" }}
          >
            Github
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
