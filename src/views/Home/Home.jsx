import React from 'react'
import useStyles from './homeStyle'

const Home = props => {
  const classes = useStyles()

  return (
    <div className={classes.root} id="PortfolioTitle">
      <div className={classes.shape_contain}></div>
      <div className={`${classes.strip2} ${classes.strip}`}></div>
      <div className={`${classes.tri2} ${classes.tri}`} id="home"></div>
      <div className={classes.circle}></div>
      <div className={classes.tri1}></div>
      <div className={`${classes.strip1} ${classes.strip}`}></div>
      <div className={`${classes.tri3} ${classes.tri}`}></div>
      <div className={`${classes.strip3} ${classes.strip}`}></div>
      <div className={classes.leftside}>WEB DESIGNER</div>
      <div className={classes.rightside}>FREELANCER</div>
      <div className={classes.topLeft}>Juan Facundo Osores</div>
      <div className={classes.headline}>Full Stack Developer</div>
    </div>
  )
}

export default Home
