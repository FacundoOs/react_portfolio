import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  background: {
    display: 'flex',
    alignItems: 'center',
    background: '#000',
    minHeight: '90vh',
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
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    color: '#fff',
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
