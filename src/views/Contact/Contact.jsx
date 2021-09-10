import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Box, Button, Grid } from '@material-ui/core'
import emailjs from 'emailjs-com'
import useStyle from './contactStyle'
import MyTextField from './textFieldStyle'
import DividerSection from '../../components/DividerShared/Divider.jsx'

const Contact = () => {
  const classes = useStyle()
  const [message, setMessage] = useState('')

  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        'gmail_portfolio',
        'portfolio_contact',
        e.target,
        'user_CLlpYlJ5sKkXQ4MOclSOH'
      )
      .then(
        result => {
          setMessage('Your message was send. Thanks')

          console.log(result.text)
        },
        error => {
          setMessage('Something happend. Try again')
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  return (
    <div className={classes.background} id="contact">
      <Grid container justifyContent="center" className={classes.root}>
        <Box component="form" className={classes.form} onSubmit={sendEmail}>
          <h2 className={classes.title}>Contact Me!</h2>
          <MyTextField
            id="name"
            name="name"
            fullWidth={true}
            label="Name / Company name"
            variant="outlined"
            margin="dense"
            size="medium"
            required
            InputProps={{
              className: classes.input,
            }}
          />
          <MyTextField
            id="email"
            name="email"
            type="email"
            pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
            required
            InputProps={{
              className: classes.input,
            }}
          />
          <MyTextField
            id="message"
            name="message"
            fullWidth={true}
            label="Message"
            variant="outlined"
            margin="dense"
            size="medium"
            multiline
            rows={5}
            required
            InputProps={{
              className: classes.input,
            }}
          />
          <Button
            className={classes.button}
            variant="outlined"
            type="submit"
            id="montserrat"
          >
            Send message
          </Button>
          {message && <h2>{message}</h2>}
        </Box>
      </Grid>
    </div>
  )
}

export default Contact
