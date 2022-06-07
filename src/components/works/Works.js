/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@mui/material";
import {makeStyles}  from "@mui/styles/";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/iamyounss-portfolio.png';
import Dashtrade from '../../assets/recentprojects/iamyounss-dashtrade.png';
import Shopify from '../../assets/recentprojects/iamyounss-shopify.png';
import Vitrines from '../../assets/recentprojects/iamyounss-vitrines.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Develop this minimalist portfolio in ReactJS and deploy it on Vercel.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Dashtrade Project', 
      description: `A top 100 crypto-currencys dashboard with their stats 
      and global market performance. I worked with a professional trader on it with the SCRUM
      process. We choosed to leave it available for everyone to enjoy.`,
      alter: 'Dashtrade Project',
      image: `${Dashtrade}`,
    },
    { 
      id: 3,
      title: 'Shopify Partner', 
      description: `As a Shopify Partner i was building amazing ecommerce shops for 
      my consumers, customizing my theme on demand for them or adding special
      things on their own theme version that are not available on the default theme`,
      alter: 'Shopify Partner',
      image: `${Shopify}`,
    },
    { 
      id: 4,
      title: 'Static websites', 
      description: `Websites development for persons around me. I developed static
      and ecommerce websites for small companies on my department`,
      image: `${Vitrines}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="xl">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
