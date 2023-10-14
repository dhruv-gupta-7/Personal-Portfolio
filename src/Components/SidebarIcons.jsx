import React from 'react';
import './SidebarIcons.css';
import { Box, Link, SvgIcon, Tooltip, Zoom } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail'; 

const SidebarIcons = () => {
  const recipientEmail = 'dhruvgupta828@gmail.com'; 

  return (
    <Box id='sideBar'>
      <nav>
        <ul>
          <li>
            <a className='sidebarIcons' href="https://www.linkedin.com/in/dhruv-gupta-b31477204/" target="_blank" rel="noreferrer">
              <Tooltip TransitionComponent={Zoom} arrow placement="right-end" title="LinkedIn">
                <LinkedInIcon sx={{ display: 'block' }} />
              </Tooltip>
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a className='sidebarIcons' href="https://github.com/dhruv-gupta-7" target='-blank' rel="noreferrer">
              <Tooltip TransitionComponent={Zoom} arrow placement="right-end" title="Github">
                <GitHubIcon sx={{ display: 'block' }} />
              </Tooltip>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a
              className='sidebarIcons'
              href={`mailto:${recipientEmail}`}
              rel="noreferrer"
            >
              <Tooltip TransitionComponent={Zoom} arrow placement="right-end" title="Email">
                <MailIcon sx={{ display: 'block' }} />
              </Tooltip>
              <span>Email</span>
            </a>
          </li>
        </ul>
      </nav>
    </Box>
  );
};

export default SidebarIcons;
