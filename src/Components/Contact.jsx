import {
  Button,
  FormControl,
} from "@mui/material";
import {
  OutlinedInput,
  makeStyles,
} from "@material-ui/core";

import * as React from "react";

import Box from "@mui/material/Box";
import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  outlinedInput: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white", 
      borderWidth: 2,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white", 
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white", 
    },
    "& .MuiOutlinedInput-input": {
      padding: "8px 14px", 
      height: "25px", 
      color: 'white',
    },
    "& input::placeholder": {
      color: "#dee5ed", 
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        padding: "4rem",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          Contact
        </h2>
        <h5 style={{  marginLeft: "-0.5%", color: "white" }}>
          Submit the form below to get in touch with me...
        </h5>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%',marginTop: '3%'}}>

        <FormControl id='inputFields' sx={{minWidth: '50%', marginBottom: '1.5%'}}>
          <OutlinedInput
            className={classes.outlinedInput}
            placeholder="Enter your name"
          />
        </FormControl>

        <FormControl id='inputFields' sx={{minWidth: '50%', marginBottom: '1.5%'}}>
          <OutlinedInput
            className={classes.outlinedInput}
            placeholder="Enter your email"
          />
        </FormControl>

        <FormControl id='inputFields' sx={{minWidth: '50%', marginBottom: '1.5%'}}>
          <OutlinedInput
          style={{padding: '0.5px'}}
          multiline
          minRows={10}
          maxRows={10}
            className={classes.outlinedInput}
            placeholder="Enter your message"
          />
        </FormControl>

        <Button
          size="small"
          variant="contained"
          sx={{
            width: "5.8rem",
            fontSize: "13px",
            textTransform: "inherit",
            backgroundImage: 'linear-gradient(to right, #05c2e8, #4250c9)',
            padding: '8px 15px 8px 15px',
            marginTop: '0.9rem'
          }}
        >
          Let's Talk
        </Button>

    </Box>
    </Box>
  );
};

export default Contact;
