import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: '100%',
        height: "100%",
        justifyContent: "center",
        marginTop: "-8%",
        paddingBottom: '5rem'

      }}
    >
      <Box sx={{ margin: "36px 0" }}>
        <Typography>
          <h2
            style={{
              color: "white",
              marginLeft: "4.5%",
              marginBottom: "6%",
              borderBottom: "2px solid gray",
              borderRadius: "1px",
              display: "inline-block",
            }}
          >
            About
          </h2>

          <p style={{ margin: "0 3.5% 0 4.7%", color: "white", fontSize: "15px" }}>
            
            👋 Welcome to my Portfolio Website! 🚀 <br/> <br/>

I am a fresher front-end developer with a passion for building user-friendly and visually appealing web applications. I have a strong foundation in HTML5, CSS3, and JavaScript, and I am proficient in using modern frameworks and libraries, such as React, Material-UI, and Bootstrap. I am also eager to learn and grow in the field of web development, and I am always looking for new ways to improve my skills. <br/> <br/> I am highly skilled in debugging, problem-solving, responsive design, and adhering to tight deadlines while ensuring high-quality code. Additionally, my knowledge in accessibility and performance optimization ensures that web applications are usable and perform well across devices and networks. <br/> <br/> Collaboration is at the
            core of my work ethic, and I thrive in an environment where ideas
            flow freely and diverse perspectives converge. Working hand in hand
            with designers and backend developers, I enjoy the thrill of
            teamwork as we collectively create impactful and innovative
            solutions. Together, we'll harness the power of code to bring
            imagination to life and build something extraordinary. Join me on
            this exciting journey of web development innovation, where we'll
            create captivating digital experiences that resonate with users and
            make a meaningful impact in the digital world.{" "}
          </p>
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
