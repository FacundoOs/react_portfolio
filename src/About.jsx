import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import photo from "./assets/profile.jpeg";

const useStyle = makeStyles(({ breakpoints }) => ({
  root: {
    margin: "6rem 1rem",
    display: "flex",
    borderRadius: "1rem",
    flexDirection: "column",
    overflow: "initial",
    alignItems: "center",
    position: "relative",
    width: "85%",
    transition: "0.8s",
    paddingBottom: "1rem",
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: "2rem",
      marginLeft: "3rem",
      margintRigth: "3rem",
    },
  },
  media: {
    position: "relative",
    borderRadius: "1rem",
    width: "50%",
    height: 0,
    marginTop: "-1rem",
    paddingBottom: "48%",

    [breakpoints.up("md")]: {
      width: "100%",
      transform: "translateX(-20px)",
    },
  },
  content: {
    width: "90%",
  },
  about: {
    display: "inline-block",
    background: "#222",
    color: "white",
    borderRadius: "0.8rem",
    padding: "4px",
    marginBottom: "2rem",
    [breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
  aboutTitle: {
    fontSize: 23,
    paddingBottom: "0.6rem",
    [breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
  aboutDescription: {
    fontSize: 18,
    paddingBottom: "0.6rem",
    [breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
}));

const About = () => {
  const classes = useStyle();
  return (
    <Grid container justify="center">
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={photo}
          title="test"
        ></CardMedia>
        <CardContent className={classes.content}>
          <Typography variant="h5" className={classes.about}>
            About me
          </Typography>
          <CardContent class="aboutTitle" className={classes.titleDescription}>
            <Typography className={classes.aboutTitle}>
              Where there are obstacles and problems, I see opportunities.
            </Typography>
          </CardContent>

          <CardContent class="aboutDescription">
            <Typography className={classes.aboutDescription}>
              Hi. I am Facundo, an Argentine boy who loves challenges. I
              currently live in Stockholm.
            </Typography>
            <Typography className={classes.aboutDescription}>
              Taking my first steps in the world of programming.
            </Typography>
            <Typography className={classes.aboutDescription}>
              I did an intensive 3-month full-stack developer course where I not
              only learned new languages, I was also trained in agile
              methodologies, pair programming and the soft skills necessary to
              move in this world.
            </Typography>
            <Typography className={classes.aboutDescription}>
              More than 11 years of work experience in technical areas. As a
              technician and as a manager.
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default About;