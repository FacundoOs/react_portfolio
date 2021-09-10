import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Avatar,
  ListItemIcon,
  Divider,
  ListItem,
  List,
  ListItemText,
  Grid,
} from '@material-ui/core'
import {
  Home,
  Apps,
  Menu,
  AssignmentInd,
  Assessment,
  ContactMail,
} from '@material-ui/icons'
import avatar from '../../assets/home-image/avatar.png'
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import { Link } from 'react-router-dom'
import FooterIcons from './FooterIcons.jsx'
import { Link as NavLink, animateScroll as scroll } from 'react-scroll'
import useStyles from './navBarStyle'

const Navbar = props => {
  const [state, setState] = useState({ right: false })
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open })
  }
  const [activeNavbar, setActiveNavbar] = useState(false)
  const classes = useStyles()

  const menuItems = [
    {
      listIcon: <Home />,
      listText: 'Home',
      listPath: 'home',
    },
    {
      listIcon: <AssignmentInd />,
      listText: 'About',
      listPath: 'about',
    },
    {
      listIcon: <Assessment />,
      listText: 'Skills',
      listPath: 'skills',
    },
    {
      listIcon: <Apps />,
      listText: 'Portfolio',
      listPath: 'portfolio',
    },
    {
      listIcon: <ContactMail />,
      listText: 'Contact',
      listPath: 'contact',
    },
  ]

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  const changeBackground = () => {
    window.scrollY >= 120 ? setActiveNavbar(true) : setActiveNavbar(false)
  }

  const sideList = slider => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="avatar-picture" />
      <Divider />
      <List className={classes.drawerSections}>
        {menuItems.map((listItem, key) => (
          <ListItem
            key={key}
            component={NavLink}
            to={listItem.listPath}
            smooth={true}
            spy={true}
            activeClass="active"
            offset={-64}
          >
            <ListItemIcon className={classes.list}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.sectionLink}
              primary={listItem.listText}
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const menuList = x => {
    return (
      <>
        {menuItems.map((listItem, key) => (
          <NavLink
            key={key}
            smooth={true}
            activeClass="active"
            to={listItem.listPath}
            spy={true}
            offset={-90}
            className={classes.sections}
          >
            {listItem.listText}
          </NavLink>
        ))}
      </>
    )
  }

  return (
    <>
      <Box component="nav">
        <AppBar
          position="fixed"
          className={!activeNavbar ? classes.appBar : classes.activeNavbar}
        >
          <Toolbar>
            <IconButton
              className={classes.menuIcon}
              onClick={toggleSlider('right', true)}
            >
              <Menu />
            </IconButton>
            <Grid className={classes.sectionsGrid}>{menuList()}</Grid>
            <MobilRightMenuSlider
              anchor="left"
              open={state.right}
              onClose={toggleSlider('right', false)}
            >
              {sideList('right')}
              <FooterIcons />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
export default Navbar
