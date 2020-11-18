import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box, Button, Grid, Typography } from "@material-ui/core";

const Contact = () => {
  const classes = useStyle();
  return (
    <Grid container justify="center">
      <Box component="form" className={classes.form}>
        <Typography variant="h2">Contact Me!!!</Typography>
        <MyTextField
          id="name"
          fullWidth={true}
          label="Name / Company name"
          variant="outlined"
          margin="dense"
          size="medium"
          InputProps={{
            className: classes.input
          }}
        />
        <MyTextField
          id="email"
          fullWidth={true}
          label="Email"
          variant="outlined"
          margin="dense"
          size="medium"
          InputProps={{
            className: classes.input
          }}
        />
        <MyTextField
          id="message"
          fullWidth={true}
          label="Message"
          variant="outlined"
          margin="dense"
          size="medium"
          multiline
          rows={5}
          InputProps={{
            className: classes.input
          }}
        />
        <Button className={classes.button} variant="outlined" >Send message</Button>
      </Box>
    </Grid>
  );
};

export default Contact;

const MyTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#F1810E",
    },
    "& label": {
      color: "#F1810E",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "red",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#F1810E",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#4B6EC5",
      },
    },
  },
})(TextField);

const useStyle = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    color: "white",
    textAlign: "center"
  },
  input: {
    color: "white"
  },
  button: {
    marginTop: "1.5rem",
    color: "#F1810E",
    borderColor: "#F1810E",
    fontSize: "1.5rem"
  }
}));
