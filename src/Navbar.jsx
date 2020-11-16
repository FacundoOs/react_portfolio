import React, { useState } from "react";
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
} from "@material-ui/core";
import {
  Apps,
  ArrowBack,
  AssignmentInd,
  ContactMail,
} from "@material-ui/icons";
import avatar from "./assets/personal_avatar.jpg";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from '@material-ui/core/Drawer'

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();

  const sideList = (slider) => (
    <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
      <Avatar className={classes.avatar} src={avatar} alt="avatar-picture" />
      <Divider />
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon>{listItem.listIcon}</ListItemIcon>
            <ListItemText primary={listItem.listText}></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h5">Portfolio</Typography>
            <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;

const menuItems = [
  {
    listIcon: <AssignmentInd />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#222",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));