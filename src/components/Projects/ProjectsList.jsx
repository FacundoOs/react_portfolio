import React from 'react'
import { projectData } from '../../data/projects'
import PostCardDemo from './ProjectCard.jsx'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import useStyles from './projectsListStyle'
import DividerSection from '../../shared/Divider.jsx'

const ProjectsList = () => {
  const classes = useStyles()
  return (
    <>
      <Grid
        className={classes.root}
        id="portfolio"
        // style={{
        //   background:
        //     'linear-gradient(0deg, rgba(5,16,106,1) 51%, rgba(60,90,255,1) 100%)',
        // }}
      >
        <DividerSection />
        <Typography className={classes.title}>Portfolio</Typography>
        <Grid
          container
          spacing={3}
          // justifyContent="center"
          className={classes.cards}
        >
          {projectData.map(projects => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={projects.id}>
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

// const useStyles = makeStyles(({ breakpoints }) => ({
//   root: {
//     background:
//       'linear-gradient(0deg, rgba(5,16,106,1) 51%, rgba(60,90,255,1) 100%)',
//   },
//   title: {
//     paddingLeft: '7rem',
//     fontSize: '2rem',
//     color: '#ffff',
//     [breakpoints.down('sm')]: {
//       paddingLeft: '1rem',
//     },
//   },
//   cards: {
//     width: '100%',
//     padding: '1rem 7rem',
//     margin: 0,
//     [breakpoints.down('sm')]: {
//       padding: '1rem 1rem',
//     },
//   },
// }))
