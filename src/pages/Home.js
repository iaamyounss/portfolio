import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@mui/material';
import {makeStyles}  from "@mui/styles";
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { Resume } from '../components/resume/Resume';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { SideNavbar } from '../components/nav/SideNavbar';
import { Works } from '../components/works/Works';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Home = () => {
  const classes = useStyles();
  // style={{backgroundImage: `url(${Background})` , backgroundSize: "cover",position: "fixed", zIndex: "-1"}}
  return (
    <div >

        <div className={classes.root} id="home" >
          <LogoLink />
          <Content />
          <ThemeToggle />
          <Hidden smDown>
            <SocialIcons />
          </Hidden>
          <Hidden mdUp>
            <SpeedDials />
          </Hidden>
          <Resume />
        </div>
        <SideNavbar />
        <Works />
        <About />
        <Contact />

    </div>
  );
};