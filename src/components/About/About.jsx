import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import photo from '../../assets/profile.jpeg'
import useStyle from './aboutStyle'
import DividerSection from '../../shared/Divider.jsx'

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

// const useStyle = makeStyles(({ breakpoints }) => ({
//   root: {
//     justifyContent: 'center',
//     background:
//       'linear-gradient(180deg, rgba(0,0,0,1) 8%, rgba(60,90,255,1) 100%)',
//   },
//   card: {
//     margin: '5rem 1rem',
//     display: 'flex',
//     borderRadius: '1rem',
//     flexDirection: 'column',
//     overflow: 'initial',
//     alignItems: 'center',
//     position: 'relative',
//     width: '90%',
//     transition: '0.8s',
//     [breakpoints.up('md')]: {
//       flexDirection: 'row',
//       paddingTop: '2rem',
//       paddingBottom: '1rem',
//       marginLeft: '3rem',
//       margintRigth: '3rem',
//       width: '70%',
//     },
//   },
//   media: {
//     position: 'relative',
//     borderRadius: '1rem',
//     width: '50%',
//     height: 0,
//     marginTop: '-1rem',
//     paddingBottom: '48%',

//     [breakpoints.up('md')]: {
//       width: '100%',
//       transform: 'translateX(-20px)',
//     },
//   },
//   content: {
//     width: '90%',
//   },
//   about: {
//     display: 'inline-block',
//     background: '#222',
//     color: 'white',
//     borderRadius: '0.8rem',
//     padding: '4px',
//     marginBottom: '2rem',
//     fontSize: 26,
//     [breakpoints.down('md')]: {
//       fontSize: 14,
//       marginBottom: 0,
//     },
//   },
//   aboutTitle: {
//     fontSize: 23,
//     paddingBottom: '0.6rem',
//     [breakpoints.down('xs')]: {
//       fontSize: 16,
//       paddingBottom: 0,
//     },
//   },
//   aboutDescription: {
//     fontSize: 18,
//     paddingBottom: '0.6rem',
//     textAlign: 'justify',
//     letterSpacing: 'normal',
//     [breakpoints.down('xs')]: {
//       fontSize: 14,
//       letterSpacing: '-1px',
//       paddingBottom: 0,
//     },
//   },
// }))
