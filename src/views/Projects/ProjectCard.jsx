import React from 'react'
import { IconButton, Box } from '@material-ui/core/'
import { GitHub, Share } from '@material-ui/icons/'
import useStyles from './projectCardStyle'

const ProjectCard = ({ projects }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.flip}>
        <div
          className={classes.front}
          style={{ backgroundImage: `url(${projects.image})` }}
        ></div>
        <div className={classes.back}>
          <p> {projects.description}</p>
        </div>
      </div>
      <Box px={1} pt={1}>
        {projects.name}
      </Box>
      <Box px={2} mt={-1}>
        {projects.link.length !== 0 ? (
          <a target="_blank" href={projects.link}>
            <IconButton color="secondary">
              <Share />
            </IconButton>
          </a>
        ) : null}
        {projects.github.length !== 0 ? (
          <a target="_blank" href={projects.github}>
            <IconButton color="secondary">
              <GitHub />
            </IconButton>
          </a>
        ) : null}
      </Box>
    </div>
  )
}

export default ProjectCard
