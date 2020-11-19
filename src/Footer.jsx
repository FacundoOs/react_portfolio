import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



const Footer = () => {
  return (
    <Box component="footer">
      <div className="ui container">
        <p id="footer">Made with React {React.version}</p>
      </div>
    </Box>
  );
};

export default Footer;

const useStyle = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    color: "white",
    textAlign: "center",
  },

}));