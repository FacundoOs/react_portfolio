//rafce
import React from "react";
import {
  Typography,
  Avatar,
  Grid,
  Box,
  GridList,
  GridListTile,
} from "@material-ui/core";
import avatar from "./assets/avatar.png";
import Typed from "react-typed";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import react from "./assets/react.png";
import reactNative from "./assets/images.png";
import ruby from "./assets/ruby.jpeg";
import rails from "./assets/rails.png";
import cy from "./assets/cy.png";
import rspec from "./assets/rspec.png";
import html from "./assets/html.jpg";
import js from "./assets/js.jpg";
import css from "./assets/css.png";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const Home = () => {
  const classes = useStyles();
  const icons = [react, reactNative, ruby, rails, cy, rspec, html, js, css];

  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 9;
    }
    if (isWidthUp("md", props.width)) {
      return 5;
    }
    if (isWidthUp("xs", props.width)) {
      return 3;
    }
    return 1;
  };

  return (
    <Box className={classes.typedContainer} p={7}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="avatar-picture" />
      </Grid>
      <Typography className={classes.title}>
        <Typed strings={["Facundo Osores"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h4">
        <Typed
          strings={["Web Design", "Web Development", "Full Stack Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>

      <div className={classes.root}>
        <GridList className={classes.gridList} cols={getGridListCols}>
          {icons.map((icon) => {
            return (
              <GridListTile key={icon} className={classes.iconList}>
                <Avatar alt="icon" src={icon} className={classes.iconAvatar}/>
              </GridListTile>
            );
          })}
        </GridList>
      </div>
    </Box>
  );
};

export default withWidth()(Home);

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(4),
    "@media (max-width:450px)": {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  },
  title: {
    color: "white",
    fontSize: "4rem",
    "@media (max-width:450px)": {
      fontSize: "1.8rem",
    },
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
    "@media (max-width:450px)": {
      fontSize: "1.5rem",
    },
  },
  typedContainer: {
    position: "absoute",
    top: "50%",
    left: "50%",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
    marginTop: 30,
  },
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: "space-around",
    // overflow: 'hidden',
  },
  gridList: {
    // display: 'flex',
    // flexWrap: "wrap",
    justifyContent: "space-around",

    // transform: "translateZ(0)",
  },
  iconList: {
    maxHeight: "8vh",
  },
  iconAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    "@media (max-width:450px)": {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  } 
}));
