import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  background: {
    paddingTop: '4rem',
    background:
      'linear-gradient(180deg, rgba(5,16,106,1) 51%, rgba(0,0,0,1) 100%)',
    '@media (max-width:450px)': {
      paddingTop: '1rem',
    },
  },
  root: {
    padding: '5rem 3rem',
    // background:
    //   'linear-gradient(180deg, rgba(5,16,106,1) 51%, rgba(60,90,255,1) 100%)',
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
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // position: 'absolute',
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
