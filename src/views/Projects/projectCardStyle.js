import { makeStyles } from '@material-ui/core/styles'
import useStyle from '../About/aboutStyle'

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: '0.2s',
    cursor: 'pointer',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow:
      'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
  },
  flip: {
    position: 'relative',
    width: '100%',
  },
  front: {
    display: 'block',
    backgroundSize: 'cover!important',
    backgroundPosition: 'center!important',
    backgroundRepeat: 'no-repeat',
    height: '13rem',
    background: '#313131',
    borderRadius: '10px',
    '&:hover': {
      opacity: 1,
    },
  },

  back: {
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundPosition: 'center!important',
    height: '13rem',
    background: '#4b6ec5',
    borderRadius: '.625rem',
    transitionTimingFunction: 'cubic-bezier(.175, .885, .32, 1.275)',
    transitionDuration: '1.5s',
    transitionProperty: 'transform, opacity',
    position: 'absolute',
    opacity: 0,
    top: 0,
    left: 0,
    transform: 'rotateX(-180deg)',
    '& p': {
      color: '#fff',
      paddingLeft: '.625rem',
      paddingRight: '.625rem',
    },
    '&:hover': {
      opacity: 1,
      transform: 'rotateX(0deg)',
    },
  },
}))

export default useStyles
