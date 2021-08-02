import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(({ breakpoints }) => ({
  // dividerContainer: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  //   alignItems: 'center',
  // },
  // dividerLeft: {
  //   width: '40%',
  //   height: '.1rem',
  //   backgroundImage: 'linear-gradient(to left, #fff, transparent)',
  // },
  // dividerMid: {
  //   width: '.8rem',
  //   height: '.8rem',
  //   background: '#3c5aff',
  //   borderRadius: '50%',
  //   border: '0.1rem solid #fff',
  //   boxShadow: 'inset 0 0 0 0.1rem #fff, 0 0 0 0.2rem #900C3F',
  // },
  // dividerRight: {
  //   width: '40%',
  //   height: '.1rem',
  //   backgroundImage: 'linear-gradient(to right, #fff, transparent)',
  // },
  root: {
    justifyContent: 'center',
    background:
      'linear-gradient(180deg, rgba(0,0,0,1) 8%, rgba(60,90,255,1) 100%)',
  },
  card: {
    margin: '5rem 1rem',
    display: 'flex',
    borderRadius: '1rem',
    flexDirection: 'column',
    overflow: 'initial',
    alignItems: 'center',
    position: 'relative',
    width: '90%',
    transition: '0.8s',
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: '2rem',
      paddingBottom: '1rem',
      marginLeft: '3rem',
      margintRigth: '3rem',
      width: '70%',
    },
  },
  media: {
    position: 'relative',
    borderRadius: '1rem',
    width: '50%',
    height: 0,
    marginTop: '-1rem',
    paddingBottom: '48%',

    [breakpoints.up('md')]: {
      width: '100%',
      transform: 'translateX(-20px)',
    },
  },
  content: {
    width: '90%',
  },
  about: {
    display: 'inline-block',
    background: '#222',
    color: 'white',
    borderRadius: '0.8rem',
    padding: '4px',
    marginBottom: '2rem',
    fontSize: 26,
    [breakpoints.down('md')]: {
      fontSize: 14,
      marginBottom: 0,
    },
  },
  aboutTitle: {
    fontSize: 23,
    paddingBottom: '0.6rem',
    [breakpoints.down('xs')]: {
      fontSize: 16,
      paddingBottom: 0,
    },
  },
  aboutDescription: {
    fontSize: 18,
    paddingBottom: '0.6rem',
    textAlign: 'justify',
    letterSpacing: 'normal',
    [breakpoints.down('xs')]: {
      fontSize: 14,
      letterSpacing: '-1px',
      paddingBottom: 0,
    },
  },
}))

export default useStyle
