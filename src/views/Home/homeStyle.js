import { makeStyles } from '@material-ui/core/styles'
import profile from '../../assets/home-image/profile.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    overflow: 'hidden',
  },
  shape_contain: {
    boxSizing: 'border-box',
    height: '100vh',
    transform: 'translate3d(0, 0, 0)',
    background:
      'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) no-repeat center',
    backgroundSize: 'cover',
    opacity: 0.4,
    filter: 'blur(2px) hue-rotate(110deg)',
  },
  circle: {
    width: '70vh',
    height: '70vh',
    borderRadius: '50%',
    background: 'rgba(136, 239, 231, 0.3)',
    position: 'absolute',
    top: '15vh',
    left: '50%',
    transform: 'translate3d(-50%, 0, 0)',
  },
  tri1: {
    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
    webkitClickPath: 'polygon(0 0, 100% 0, 50% 100%)',
    width: '90vh',
    height: '72vh',
    background: `url(${profile}) no-repeat  `,
    position: 'absolute',
    backgroundSize: 'cover',
    top: '17vh',
    left: '50%',
    transform: 'translate3d(-50%, 0, 0)',
    opacity: 0.8,
  },
  tri: {
    clipPath:
      'polygon(50% 0, 0% 100%, 9% 100%, 50% 17%, 50% 17%, 85% 91%, 13% 91%, 0 100%, 100% 100%, 50% 0)',
    webkitClipPath:
      'polygon(50% 0, 0% 100%, 9% 100%, 50% 17%, 50% 17%, 85% 91%, 13% 91%, 0 100%, 100% 100%, 50% 0)',
    width: '80vh',
    height: '70vh',
    position: 'absolute',
    transform: 'translate3d(-50%, 0, 0)',
  },
  tri2: {
    background:
      'url(https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) no-repeat center center',
    backgroundSize: 'cover',
    top: '11vh',
    left: '50%',
  },
  tri3: {
    background: 'rgba(0, 113, 110, 0.2)',
    top: '26vh',
    left: '50%',
  },
  strip: {
    position: 'absolute',
    background:
      'linear-gradient(0deg, rgba(164, 0, 217, 0) 0%, rgba(164, 0, 217, 0.3) 35%, rgba(255, 67, 134, 0.3) 65%, rgba(255, 67, 134, 0) 100%)',
    left: '50%',
  },
  strip1: {
    width: '20vh',
    height: '120vh',
    transform: 'translate3d(-175%, -15%, 0) rotateZ(30deg)',
  },
  strip2: {
    width: '5vh',
    height: '90vh',
    transform: 'translate3d(60vh, -15%, 0) rotateZ(30deg)',
  },
  strip3: {
    width: '5vh',
    height: '90vh',
    transform: 'translate3d(-70vh, 25%, 0) rotateZ(30deg)',
  },
  leftside: {
    position: 'absolute',
    left: '20px',
    top: '70%',
    transformOrigin: '10% 0%',
    transform: 'rotate(-90deg)',
    fontSize: '1.2rem',
    color: '#ced6f8',
  },
  rightside: {
    position: 'absolute',
    right: '20px',
    top: '70%',
    transformOrigin: '90% 0%',
    transform: 'rotate(90deg)',
    fontSize: '1.2rem',
    color: '#ced6f8',
  },
  topLeft: {
    position: 'absolute',
    left: '40px',
    top: '40px',
    textAlign: 'center',
    color: 'white',
    fontSize: '1.8em',
  },
  headline: {
    position: 'absolute',
    width: '100%',
    zIndex: '200',
    paddingTop: '50vh',
    textAlign: 'center',
    color: '#ced6f8',
    fontSize: '5vw',
    textShadow: '4px 4px 4px #000000',
  },
}))

export default useStyles
