import { makeStyles } from '@material-ui/core'
import useStyle from '../About/aboutStyle'

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background: '#fff',
  },
  title: {
    fontSize: '3rem',
    color: '#000',
    textAlign: 'center!important',
    paddingTop: '1rem',
    [breakpoints.down('sm')]: {
      fontSize: '2.5rem',
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
