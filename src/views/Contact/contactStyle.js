import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  background: {
    paddingTop: '4rem',
    background: 'rgb(64 64 64)',
    '@media (max-width:450px)': {
      paddingTop: '1rem',
    },
  },
  root: {
    padding: '5rem 3rem',
    '@media (max-width:450px)': {
      padding: '2rem',
    },
  },
  title: {
    '@media (max-width:450px)': {
      fontSize: '1.5rem',
    },
  },
  form: {
    color: 'white',
    textAlign: 'center',
  },
  input: {
    color: 'white',
  },
  button: {
    marginTop: '1.5rem',
    color: '#F1810E',
    borderColor: '#F1810E',
    fontSize: '1.5rem',
    '@media (max-width:450px)': {
      fontSize: '0.8rem',
    },
  },
}))

export default useStyles
