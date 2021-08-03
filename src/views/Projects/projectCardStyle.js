import { makeStyles } from '@material-ui/core/styles'
import useStyle from '../About/aboutStyle'

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    margin: 6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: '0.2s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  content: {
    padding: '.1rem 1rem!important',
    '& .MuiTypography-root': {
      lineHeight: 1.2,
    },
  },
  avatar: {
    width: 50,
    height: 50,
    border: '2px solid #fff',
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}))

export default useStyles