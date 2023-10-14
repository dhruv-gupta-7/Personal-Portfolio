import React, { useState } from 'react';
import { Grid, IconButton, Paper, Typography } from '@mui/material';
import { LinkedIn, GitHub, Mail } from '@mui/icons-material';
import './Footer.css';

const socialMediaLinks = [
  { icon: <LinkedIn />, link: 'https://www.linkedin.com/in/dhruv-gupta-b31477204/' },
  { icon: <GitHub />, link: 'https://github.com/dhruv-gupta-7' },
  { icon: <Mail />, link: 'mailto:dhruvgupta828@gmail.com' },
];

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconMouseEnter = (index) => {
    setHoveredIcon(index);
  };

  const handleIconMouseLeave = () => {
    setHoveredIcon(null);
  };

  const handleLinkClick = (link) => {
    if (link.startsWith('mailto:')) {
      window.location.href = link;
    } else {
      window.open(link, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <footer id="footerContainer" style={{ backgroundColor: '#131414', padding: '1rem 0' }}>
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h5" color="white" gutterBottom>
          Connect With Me
        </Typography>
        <div
          style={{
            borderBottom: '1px solid wheat',
            width: '188px',
            height: '5px',
            margin: '0 auto 10px',
          }}
        ></div>
      </div>
      <Grid container direction="row" justifyContent="center" gap={1} alignItems="center">
        {socialMediaLinks.map((item, index) => (
          <Grid item key={index}>
            <Paper
              elevation={3}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '10px',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                transform: hoveredIcon === index ? 'translateY(-5px)' : 'translateY(0)',
              }}
              onMouseEnter={() => handleIconMouseEnter(index)}
              onMouseLeave={handleIconMouseLeave}
            >
              <IconButton
                style={{ color: hoveredIcon === index ? 'black' : 'black' }}
                onClick={() => handleLinkClick(item.link)}
              >
                {item.icon}
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </footer>
  );
};

export default Footer;
