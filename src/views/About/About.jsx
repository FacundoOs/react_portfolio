import React from 'react'
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
        <Card className={classes.card} id="about">
          <CardMedia
            className={classes.media}
            image={photo}
            title="profile-picture"
          ></CardMedia>
          <CardContent className={classes.content}>
            <Typography variant="h5" className={classes.about}>
              About me
            </Typography>
            <CardContent id="aboutTitle" className={classes.titleDescription}>
              <Typography className={classes.aboutTitle}>
                Where there are obstacles and problems, I see opportunities.
              </Typography>
            </CardContent>
            <CardContent
              id="aboutDescription"
              className={classes.aboutDescriptionRoot}
            >
              <Typography className={classes.aboutDescription}>
                Hello. I am Facundo, a software developer with good knowledge of
                frontend and backend techniques. UX lover. I have 2 passions in
                this life: traveling and programming ❤️.
              </Typography>
              <Typography className={classes.aboutDescription}>
                Based in Stockholm, where the day and the night can be infinite.
              </Typography>
              <Typography className={classes.aboutDescription}>
                {/* <a href="https://craftacademy.se/english/" target="_blank">
                Craft Academy
              </a>{' '} */}
                I love spending hours programming and learning new technologies.
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
