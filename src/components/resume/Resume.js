import React from 'react';
import {makeStyles}  from "@mui/styles";
import { Typography, Link } from '@mui/material';
import { TextDecrypt } from '../content/TextDecrypt';
import {
  ResumeIcon
} from '../content/ResumeButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  
}));

export const Resume = () => {
  const classes = useStyles();
  const websiteLink = "https://iamyounss.webflow.io";
  
  return (
    <Link
      color='inherit'
      underline='none'
      href= {websiteLink}
      target='_blank'
      rel='noopener noreferrer'
      className={classes.footerText}
    >
      <ResumeIcon />
      <Typography component='span'>
        <TextDecrypt text={' Website'} />
      </Typography>
    </Link>
  );
};
