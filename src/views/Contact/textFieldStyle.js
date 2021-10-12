import { makeStyles, withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const MyTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#F1810E',
    },
    '& label': {
      color: '#F1810E',
      '@media (max-width:450px)': {
        fontSize: '0.8rem',
      },
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'red',
    },
    '& .MuiInputBase-input': {
      fontFamily: 'Montserrat, SansSerif',
      color: '#fff!important'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#F1810E',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4B6EC5',
      },
    },
  },
})(TextField)

export default MyTextField
