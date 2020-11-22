import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Facebook, LinkedIn, GitHub } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        " .MuiBottomNavigationAction-root": {
            maxWidth: 250,
            color: "#4B6EC5"
        },
        "& .MuiSvgIcon-root": {
            "color": "#4B6EC5",
            "&:hover": {
                color: "#000",
                fontSize: "2rem"
            }
        }
    }
});

const FooterIcons = () => {
    const classes = useStyles();
    return (
        <BottomNavigation className={classes.root}>
            {/* <a target="_blank" href={"https://www.facebook.com/facundo.osores.58/"}> */}
            <BottomNavigationAction
                label="Facebook"
                value="facebook"
                icon={<Facebook />}
            />
            {/* </a> */}
            {/* <a target="_blank" href={"https://www.linkedin.com/in/facundo-osores/"}> */}
            <BottomNavigationAction
                label="Linkedin"
                value="linkedin"
                icon={<LinkedIn />}
            />
            {/* </a> */}
            {/* <a target="_blank" href={"https://github.com/FacundoOs"}> */}
            <BottomNavigationAction
                label="Github"
                value="github"
                icon={<GitHub />}
            />
            {/* </a> */}
        </BottomNavigation>
    );
};

export default FooterIcons;

