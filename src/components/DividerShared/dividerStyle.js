import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  dividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  dividerLeft: {
    width: '40%',
    height: '.1rem',
    backgroundImage: 'linear-gradient(to left, #fff, transparent)',
  },
  dividerMid: {
    width: '.8rem',
    height: '.8rem',
    background: '#3c5aff',
    borderRadius: '50%',
    border: '0.1rem solid #fff',
    boxShadow: 'inset 0 0 0 0.1rem #fff, 0 0 0 0.2rem #900C3F',
  },
  dividerRight: {
    width: '40%',
    height: '.1rem',
    backgroundImage: 'linear-gradient(to right, #fff, transparent)',
  },
}))

export default useStyles
