import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Facebook, LinkedIn, GitHub } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const FooterIcons = () => {
  const classes = useStyles()
  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        label="Linkedin"
        value="linkedin"
        icon={<LinkedIn />}
        component={Link}
        to={{ pathname: 'https://www.linkedin.com/in/facundo-osores/' }}
        target="_blank"
      />
      <BottomNavigationAction
        label="Github"
        value="github"
        icon={<GitHub />}
        component={Link}
        to={{ pathname: 'https://github.com/FacundoOs' }}
        target="_blank"
      />
    </BottomNavigation>
  )
}

export default FooterIcons

const useStyles = makeStyles({
  root: {
    height: 'auto',
    ' .MuiBottomNavigationAction-root': {
      maxWidth: 250,
      color: '#4B6EC5',
      padding: '0!important',
    },
    '& .MuiSvgIcon-root': {
      color: '#4B6EC5',
      '&:hover': {
        color: '#05106a',
      },
    },
  },
})
