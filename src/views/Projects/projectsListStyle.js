import { makeStyles } from '@material-ui/core'
import useStyle from '../About/aboutStyle'

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background: 'rgba(248, 248, 250, 1)',
    paddingTop: '1.5rem',
  },
  title: {
    display: 'flex',
    // justifyContent: 'center',
    textAlign: 'center',
    fontSize: '5rem',
    paddingTop: '2rem',
    paddingLeft: '1.5rem',
    '& span': {
      borderRadius: '5px',
      transition: 'transform .3s ease-in-out',

      '&:nth-child(odd)': {
        transform: 'skewY(15deg)',
        color: '#392020',
        background:
          'linear-gradient( 277deg, rgb(255 255 255) 33%, rgb(59 56 59) 92%)',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      },
      '&:nth-child(even)': {
        transform: 'skewY(-15deg)',
        backgroundColor: '#dfdede',
        color: '#a6a6a6',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      },
      '&:hover': {
        transform: 'skewY(0deg)',
        boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
      },
    },
    [breakpoints.down('xs')]: {
      fontSize: '3rem',
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
