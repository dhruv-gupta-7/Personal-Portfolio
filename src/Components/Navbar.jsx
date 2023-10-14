import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#131414" }}>
        <Toolbar>
          <Typography
            style={{ fontFamily: "'Great Vibes', curbsive" }}
            sx={{ flexGrow: 1, letterSpacing: 2 }}
            variant="h5"
            component="div"
          >
            Dhruv
          </Typography>

          <MenuIcon
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            id="menuBtn"
          ></MenuIcon>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{
              "& .MuiList-root ": { width: "115px", borderRadius: "0" },
              "& .MuiButtonBase-root": { justifyContent: "center" },
            }}
          >
            <MenuItem>
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Home
              </ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                About
              </ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Portfolio
              </ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Experience
              </ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink
                activeClass="active"
                to="connect"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Connect Me
              </ScrollLink>
            </MenuItem>
          </Menu>

          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
          >
            <Button
              id="navBtn"
              style={{
                color: "#797c80",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Home
            </Button>
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
          >
            <Button
              id="navBtn"
              style={{
                color: "#797c80",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              About
            </Button>
          </ScrollLink>
          <ScrollLink
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
          >
            <Button
              id="navBtn"
              style={{
                color: "#797c80",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Portfolio
            </Button>
          </ScrollLink>
          <ScrollLink
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
          >
            <Button
              id="navBtn"
              style={{
                color: "#797c80",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Experience
            </Button>
          </ScrollLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar; 
