import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@mui/material";
import  {makeStyles}  from "@mui/styles";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "fixed!important",
    marginRight: "48px!important",
    marginBottom: "10px!important",
    bottom: "48px",
    right: "48px",
    border: "1px solid transparent!important",
    borderRadius: "50%!important",
    padding: "22px",
    boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)"
  },
  icon: {
    fontSize: "1.25rem!important",
  },
}));

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const classes = useStyles(toggleTheme);

    return (
      <Tooltip
        title={"Toggle theme"}
        placement="right"
        TransitionComponent={Zoom}
      >
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          aria-label={"Toggle theme"}
          className={classes.iconButton}
        >
          {theme === "light" ? (
              <Brightness4 className={classes.icon} />
          ) : (
              <Brightness7 className={classes.icon} />
          )}
        </IconButton>
      </Tooltip>
    );
};
