import React from 'react'
import useStyles from './dividerStyle'

const Divider = () => {
  const classes = useStyles()

  return (
    <div className={classes.dividerContainer}>
      <div className={classes.dividerLeft}></div>
      <div className={classes.dividerMid}></div>
      <div className={classes.dividerRight}></div>
    </div>
  )
}

export default Divider
