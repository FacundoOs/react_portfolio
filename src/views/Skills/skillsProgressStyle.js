import { makeStyles, withStyles } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core'

const SkillsLinear = withStyles(theme => ({
  root: {
    height: '20px',
    borderRadius: 10,
  },
  colorPrimary: {
    backgroundColor: 'rgb(176 176 178)',
  },
  bar: {
    background:
      'linear-gradient(277deg, rgba(152,50,244,1) 33%, rgba(210,55,208,1) 92%)',
  },
}))(LinearProgress)

export default SkillsLinear
