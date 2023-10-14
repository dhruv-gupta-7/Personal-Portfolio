import {
  Button,
  Card,
  CardActions,
  CardMedia,
} from "@mui/material";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Portfolio.css";
import SocialBook from "../Images/SocialBook.png";
import ExpenseTracker from "../Images/ExpenseTracker.png";
import ReactPortfolio from "../Images/Portfolio.png";
import Ecommerce from "../Images/Ecommerce.png"
import CabBooking from "../Images/Cab.png"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Portfolio = () => {

  const SocialbookDemo = () => {
    const url = "https://amazing-nougat-7843be.netlify.app/";
    window.open(url, "_blank");
  };

  const SocialbookCode = () => {
    const url = "https://github.com/dhruv-gupta-7/React-SocialBook";
    window.open(url, "_blank");
  };

  const ExpenseTrackerDemo = () => {
    const url = "https://luminous-elf-fab97f.netlify.app/";
    window.open(url, "_blank");
  };

  const ExpenseTrackerCode = () => {
    const url = "https://github.com/dhruv-gupta-7/React-Expense-Tracker";
    window.open(url, "_blank");
  };

  const PortfolioDemo = () => {
    const url = "https://marvelous-gelato-0965cc.netlify.app/";
    window.open(url, "_blank");
  };

  const PortfolioCode = () => {
    const url = "https://github.com/dhruv-gupta-7/my-react-portfolio";
    window.open(url, "_blank");
  };

  const EcommerceDemo = () => {
    const url = "https://react-ecommerce-store333.netlify.app/";
    window.open(url, "_blank");
  };

  const EcommerceCode = () => {
    const url = "https://github.com/dhruv-gupta-7/React-Ecommerce-Store";
    window.open(url, "_blank");
  };

  const CabBookingDemo = () => {
    const url = "https://react-cab-booking.netlify.app/";
    window.open(url, "_blank");
  };

  const CabBookingCode = () => {
    const url = "https://github.com/dhruv-gupta-7/React-Cab-Booking";
    window.open(url, "_blank");
  };


  return (
    <Box
      id="projectsWrapper"
      sx={{
        height: '100%',
        minHeight: '35rem',
        width: "100%",
        padding: '4rem',
      }}
    >

      <Box sx={{ display: "flex", flexDirection: "column", }}>
        <h2
          style={{
            color: "white",
            float: "left",
            marginLeft: "-0.5%",
            borderBottom: "2px solid gray",
            width: "max-content",
            borderRadius: "1px",
            display: "inline",
          }}
        >
          Portfolio
        </h2>
        <h5 style={{ marginLeft: "-0.5%", color: "white" }}>
          Check out some of my work here...
        </h5>
      </Box>

      <Box
        id="row1"
        sx={{ display: "flex", flexWrap: 'wrap', padding: '1rem 2rem', rowGap: '1rem', justifyContent: 'center', flexDirection: "row", columnGap: '1rem' }}
      >
        <Card className="card" sx={{ minWidth: 280, maxWidth: 300 }}>
          <CardMedia
            component="img"
            className="cardImage"
            alt="SocialBook (ProjectName)"
            height="155"
            image={SocialBook}
          />

          <CardActions
            sx={{
              backgroundColor: "#131414",
              paddingTop: "6%",
              paddingBottom: "6%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button sx={{ color: "whitesmoke" }} size="small" onClick={SocialbookDemo}>           Demo         </Button>
            <Button sx={{ color: "whitesmoke" }} size="small" onClick={SocialbookCode}>           Code         </Button>
          </CardActions>
        </Card>


        <Card className="card" sx={{ minWidth: 280 }}>
          <CardMedia
            component="img"
            className="cardImage"
            alt="green iguana"
            height="155"
            image={ExpenseTracker}
          />

          <CardActions
            sx={{
              backgroundColor: "#131414",
              paddingTop: "6%",
              paddingBottom: "6%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button sx={{ color: "whitesmoke" }} size="small" onClick={ExpenseTrackerDemo}>           Demo         </Button>
            <Button sx={{ color: "whitesmoke" }} size="small" onClick={ExpenseTrackerCode}>           Code         </Button>
          </CardActions>
        </Card>
        <Card className="card" sx={{ minWidth: 280 }}>
          <CardMedia
            component="img"
            className="cardImage"
            alt="green iguana"
            height="155"
            image={ReactPortfolio}
          />

          <CardActions
            sx={{
              backgroundColor: "#131414",
              paddingTop: "6%",
              paddingBottom: "6%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button sx={{ color: "whitesmoke" }} size="small" onClick={PortfolioDemo}>           Demo         </Button>
            <Button sx={{ color: "whitesmoke" }} size="small" onClick={PortfolioCode}>           Code         </Button>
          </CardActions>
        </Card>
        <Card className="card" sx={{ minWidth: 280, maxWidth: 300 }}>
          <CardMedia
            component="img"
            className="cardImage"
            alt="SocialBook (ProjectName)"
            height="155"
            image={Ecommerce}
          />

          <CardActions
            sx={{
              backgroundColor: "#131414",
              paddingTop: "6%",
              paddingBottom: "6%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button sx={{ color: "whitesmoke" }} size="small" onClick={EcommerceDemo}>           Demo         </Button>
            <Button sx={{ color: "whitesmoke" }} size="small" onClick={EcommerceCode}>           Code         </Button>
          </CardActions>
        </Card>


        <Card className="card" sx={{ minWidth: 280 }}>
          <CardMedia
            component="img"
            className="cardImage"
            alt="green iguana"
            height="155"
            image={CabBooking}
          />

          <CardActions
            sx={{
              backgroundColor: "#131414",
              paddingTop: "6%",
              paddingBottom: "6%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button sx={{ color: "whitesmoke" }} size="small" onClick={CabBookingDemo}>           Demo         </Button>
            <Button sx={{ color: "whitesmoke" }} size="small" onClick={CabBookingCode}>           Code         </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Portfolio; 
