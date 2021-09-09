import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import useStyles from './skillsStyle'
import { knowledgeData } from '../../utils/knowledge'
import Knowledge from './Knowledge.jsx'

const skillsStyle = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} id="PortfolioTitle">
      <div className={classes.title}>Knowledge</div>

      <Grid container className={classes.knowledgeGrid}>
        {knowledgeData.map(knowledge => {
          return (
            <Grid item xs={12} sm={6} md={4} className={classes.knowledgeCard}>
              <Knowledge data={knowledge} />
            </Grid>
          )
        })}
      </Grid>

      <div>My skills</div>
      <Grid>skills</Grid>
    </Grid>
  )
}

export default skillsStyle
