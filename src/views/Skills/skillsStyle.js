import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    width: '100vw',
    minHeight: '90vh',
    backgroundColor: '#fff',
    paddingTop: '2rem',
  },
  title: {
    fontSize: '5rem',
    paddingLeft: '1rem',
    [breakpoints.down('xs')]: {
      fontSize: '3rem',
    },
  },
  knowledgeGrid: {
    justifyContent: 'flex-start',
    width: '100%',
    padding: '2rem',
    margin: 0,
    display: 'flex',
    [breakpoints.down('xs')]: {
      paddingTop: '1rem',
    },
  },
  knowledgeCard: {
    padding: '2rem',
    [breakpoints.down('xs')]: {
      padding: '0',
    },
    '& > h1': {
      color: 'green',
      [breakpoints.down('xs')]: {
        fontSize: '1.5rem',
      },
    },
  },
}))

export default useStyles
