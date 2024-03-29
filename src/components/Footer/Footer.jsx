import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Footer = () => {
  const classes = useStyle()
  return (
    <Box component="footer" className={classes.root}>
      <p>Made with React {React.version}</p>
    </Box>
  )
}

export default Footer

const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    // position: 'fixed',
    width: '100%',
    height: '20px',
    bottom: 0,
    paddingTop: '10px',
    paddingBottom: '10px',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
