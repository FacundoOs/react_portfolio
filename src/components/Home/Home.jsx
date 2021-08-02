import React from 'react'
import {
  Typography,
  Avatar,
  Grid,
  Box,
  GridList,
  GridListTile,
} from '@material-ui/core'
import avatar from '../../assets/avatar.png'
import Typed from 'react-typed'
// import { makeStyles } from '@material-ui/core/styles'
// import react from './assets/react.png'
// import reactNative from './assets/images.png'
// import ruby from './assets/ruby.jpeg'
// import rails from './assets/rails.png'
// import cy from './assets/cy.png'
// import rspec from './assets/rspec.png'
// import html from './assets/html.jpg'
// import js from './assets/js.jpg'
// import css from './assets/css.png'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import useStyles from './homeStyle'

const Home = props => {
  const classes = useStyles()
  // const icons = [react, reactNative, ruby, rails, cy, rspec, html, js, css]

  const getGridListCols = () => {
    if (isWidthUp('xl', props.width)) {
      return 9
    }
    if (isWidthUp('md', props.width)) {
      return 9
    }
    if (isWidthUp('xs', props.width)) {
      return 6
    }
    return 1
  }

  return (
    <Box className={classes.root} id="home">
      <Grid container className={classes.avatarGrid}>
        <Avatar className={classes.avatar} src={avatar} alt="avatar-picture" />
      </Grid>
      <Typography className={classes.title} id="homeName">
        <Typed strings={['Facundo Osores']} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h4" id="homeString">
        <Typed
          strings={['Web Design', 'Web Development', 'Full Stack Developer']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      {/* <GridList className={classes.gridList} cols={getGridListCols()} id="algo">
        {icons.map(icon => {
          return (
            <GridListTile key={icon} className={classes.iconList}>
              <Avatar alt="icon" src={icon} className={classes.iconAvatar} />
            </GridListTile>
          )
        })}
      </GridList> */}
    </Box>
  )
}

export default withWidth()(Home)
