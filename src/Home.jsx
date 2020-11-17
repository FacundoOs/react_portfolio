//rafce
import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "./assets/avatar.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">

      <Avatar className={classes.avatar} src={avatar} alt="avatar-picture" />
      </Grid>
      <Typography className={classes.title} variant="h2">
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
    </Box>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(45),
    height: theme.spacing(45),
    margin: theme.spacing(4),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absoute", 
    top: "50%",
    left: "50%",
    // transform: "translate(50%, 50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));
