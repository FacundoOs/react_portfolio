import React from 'react'
import { projectData } from '../../utils/projects'
import PostCardDemo from './ProjectCard.jsx'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import useStyles from './projectsListStyle'

const ProjectsList = () => {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.root} id="portfolio">
        <Typography id="PortfolioTitle" className={classes.title}>
          Portfolio
        </Typography>
        <Grid container spacing={6} className={classes.cards}>
          {projectData.map(projects => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={projects.id}
                data-aos="zoom-in-up"
              >
                <PostCardDemo projects={projects} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default ProjectsList
