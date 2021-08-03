import { makeStyles } from '@material-ui/core'
import useStyle from '../About/aboutStyle'

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background:
      'linear-gradient(0deg, rgba(5,16,106,1) 51%, rgba(60,90,255,1) 100%)',
  },
  title: {
    paddingLeft: '7rem',
    fontSize: '2rem',
    color: '#ffff',
    [breakpoints.down('sm')]: {
      paddingLeft: '1rem',
    },
  },
  cards: {
    width: '100%',
    padding: '1rem 7rem',
    margin: 0,
    justifyContent: 'center',
    [breakpoints.down('sm')]: {
      padding: '1rem 1rem',
    },
  },
}))

export default useStyles
