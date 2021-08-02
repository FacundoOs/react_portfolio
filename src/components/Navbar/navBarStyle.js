import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: '250',
    backgroundColor: '#222',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  appBar: {
    backgroundColor: 'transparent',
    transition: '1s',
  },
  activeNavbar: {
    backgroundColor: '#514A4A',
    transition: '1s',
    opacity: 0.8,
  },
  sectionsGrid: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    float: ' right',
    '& > .active': {
      borderBottom: '0.1rem solid #fff',
      color: '#FF5733!important',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  drawerSections: {
    color: '#fff',
    '& > .active': {
      color: '#FF5733',
    },
  },
  menuIcon: {
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  sectionLink: {
    cursor: 'pointer',
    '& :hover': {
      color: '#BEB8B6',
    },
  },
  sections: {
    color: '#fff',
    fontSize: '1.2rem',
    cursor: 'pointer',
    padding: '2rem',
  },
  title: {
    flexGrow: 3,
    fontSize: '2.1rem',
    cursor: 'pointer',
  },
  list: {
    color: '#4B6EC5',
  },
}))

export default useStyles
