import { makeStyles } from '@material-ui/core/styles'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import useStyle from '../About/aboutStyle'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    // position: 'absoute',
    // top: '50%',
    // left: '50%',
    // width: '100vw',
    height: '100vh',
    textAlign: 'center',
    // zIndex: 1,
    // paddingTop: '5rem',
  },
  avatarGrid: {
    justifyContent: 'center',
    // paddingTop: '8rem',
  },
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(4),
    '@media (max-width:450px)': {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  },
  title: {
    color: 'white',
    fontSize: '4rem',
    '@media (max-width:450px)': {
      fontSize: '1.8rem',
    },
  },
  subtitle: {
    color: 'tan',
    marginBottom: '3rem',
    '@media (max-width:450px)': {
      fontSize: '1.5rem',
    },
  },
  gridList: {
    justifyContent: 'space-around',
    paddingLeft: 70,
    '@media (max-width:600px)': {
      paddingLeft: 22,
    },
  },
  iconList: {
    maxHeight: '8vh',
  },
  iconAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    '@media (max-width:450px)': {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
}))

export default useStyles
