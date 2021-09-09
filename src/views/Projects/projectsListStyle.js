import { makeStyles } from '@material-ui/core'
import useStyle from '../About/aboutStyle'

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background: '#fff',
    paddingTop: '1.5rem',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '5rem',
    paddingTop: '2rem',
    transition: 'transform .3s ease-in-out',
    '& span': {
      borderRadius: '5px 0 0 5px',
      '&:nth-child(odd)': {
        transform: 'skewY(15deg)',
        color: '#392020',
        background:
          'linear-gradient( 277deg, rgb(255 255 255) 33%, rgb(59 56 59) 92%)',
      },
      '&:nth-child(even)': {
        transform: 'skewY(-15deg)',
        backgroundColor: '#dfdede',
        color: '#a6a6a6',
      },
      '&:hover': {
        transform: 'skewY(0deg)',
      },
    },
    [breakpoints.down('xs')]: {
      fontSize: '3rem',
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
