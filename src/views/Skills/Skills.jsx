import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './skillsStyle'
import { knowledgeData } from '../../utils/knowledge'
import Knowledge from './Knowledge.jsx'
import SkillsProgress from './SkillsProgress.jsx'
import { skills } from '../../utils/skills'

const skillsStyle = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} id="skills">
      <div className={classes.title} id="PortfolioTitle">
        Knowledge
      </div>

      <Grid container className={classes.knowledgeGrid} id="PortfolioTitle">
        {knowledgeData.map(knowledge => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className={classes.knowledgeCard}
              key={knowledge.id}
            >
              <Knowledge data={knowledge} />
            </Grid>
          )
        })}
      </Grid>

      <div className={classes.subtitle} id="PortfolioTitle">
        My skills
      </div>
      <Grid container className={classes.skillsGrid} id="PortfolioTitle">
        {skills.map(skillsData => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className={classes.skillsProgress}
              key={skillsData.id}
              data-aos="flip-left"
            >
              <SkillsProgress data={skillsData} />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default skillsStyle
