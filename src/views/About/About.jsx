import React, { useEffect } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import photo from '../../assets/about-image/profile.jpeg'
import useStyle from './aboutStyle'
import DividerSection from '../../components/DividerShared/Divider.jsx'

const About = () => {
  const classes = useStyle()

  return (
    <div>
      <DividerSection />
      <Grid container className={classes.root}>
        <Card className={classes.card} id="about" data-aos="fade-left">
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
                Hello. I am Facundo, an Argentine based in Stockholm. That after
                11 years as an electronic technician, decides to take a leap in
                his career to enter the fascinating world of programming.
              </Typography>
              <Typography className={classes.aboutDescription}>
                Working in an IoT company piqued my interest in code. Having
                used C++ to program microcontrollers made it easier for me to
                enter this new world.
              </Typography>
              <Typography className={classes.aboutDescription}>
                I enjoy spending hours programming and learning new
                technologies. UX lover ❤️ .
              </Typography>
              <Typography className={classes.aboutDescription}>
                Driven and permanently curious.
              </Typography>
            </CardContent>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default About
