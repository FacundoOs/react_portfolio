import React from 'react'
import useStyles from './homeStyle'
import profile_tri from '../../assets/home-image/profile_tri.png'
import cloud_tri from '../../assets/home-image/cloud_tri.png'
import tri3 from '../../assets/home-image/tri3.png'

const Home = props => {
  const classes = useStyles()

  return (
    <div className={classes.root} id="PortfolioTitle">
      <div className={classes.shape_contain}></div>
      <div className={`${classes.strip2} ${classes.strip}`}></div>
      <div>
        <img
          id="home"
          className={`${classes.tri2} ${classes.tri}`}
          src={cloud_tri}
          alt="cloud triangle"
        />
      </div>
      <div className={classes.circle}></div>
      <div>
        <img
          className={classes.tri1}
          src={profile_tri}
          alt="profile triangle"
        />
      </div>
      <div className={`${classes.strip1} ${classes.strip}`}></div>
      <div>
        <img
          className={`${classes.tri3} ${classes.tri}`}
          src={tri3}
          alt="empty triangle"
        />
      </div>
      <div className={`${classes.strip3} ${classes.strip}`}></div>
      <div className={classes.leftside}>WEB DESIGNER</div>
      <div className={classes.rightside}>FREELANCER</div>
      <div className={classes.topLeft}>Juan Facundo Osores</div>
      <div className={classes.headline}>Full Stack Developer</div>
    </div>
  )
}

export default Home
