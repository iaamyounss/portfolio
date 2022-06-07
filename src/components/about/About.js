/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@mui/material";
import  {makeStyles} from "@mui/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hey hi !";
  const aboutme = `I'm ${LastName}, a multidisciplinary 
                  Freelance Front-end Engineer since 3 years now. I'm always down for something new and challenging!
                  I'm here to help you building your app or work on a team of developers. 
                  Leave me an email, i'll be happy to read and answer to it ! 
                  `;

  return (
    <section id="about">
      <Container component="main" className={classes.main} >
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
