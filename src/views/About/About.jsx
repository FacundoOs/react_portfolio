import React, { useEffect } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import photo from '../../assets/about-image/profile.jpg'
import useStyle from './aboutStyle'

const About = () => {
  const classes = useStyle()

  return (
    <Grid container className={classes.root} id="about">
      <Card className={classes.card} data-aos="fade-left">
        <CardMedia
          className={classes.media}
          image={photo}
          title="profile-picture"
        ></CardMedia>
        <CardContent className={classes.content}>
          <Typography variant="h5" className={classes.about}>
            About me
          </Typography>
          <CardContent id="aboutTitle">
            <Typography className={classes.aboutTitle}>
              “First, solve the problem. Then, write the code.” – John Johnson
            </Typography>
          </CardContent>
          <CardContent
            id="aboutDescription"
            className={classes.aboutDescriptionRoot}
          >
            <Typography className={classes.aboutDescription}>
              Hello!! I am Facundo, an Argentine based in Stockholm.
            </Typography>
            <Typography className={classes.aboutDescription}>
              I have serious passion for UI effects, animations and creating
              intuitive, dynamic user experiences.
            </Typography>
            <Typography className={classes.aboutDescription}>
              I'm a web developer with a focus on the MERN stack, but still
              exploring other technologies and frameworks that catch my
              interest! if you're looking for a developer to add to your team,
              I'd love to hear from you! ❤️ .
            </Typography>
            <Typography className={classes.aboutDescription}>
              Driven and permanently curious.
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default About
