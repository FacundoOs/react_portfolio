import React from "react";
import { projectData } from "./data/projects";
import PostCardDemo from "./ProjectCard";
import { Grid, Box, makeStyles } from "@material-ui/core";


const ProjectsList = () => {
  const classes = useStyles()
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container spacing={3} justify="center">
        {projectData.map((projects) => {
          return (
            <Grid item xs={8} sm={6} md={3}>
              <PostCardDemo projects={projects} />;
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProjectsList;

const useStyles = makeStyles({
mainContainer: {
  margin: "3rem"
},
})
