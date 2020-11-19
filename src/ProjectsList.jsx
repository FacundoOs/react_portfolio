import React from "react";
import { projectData } from "./data/projects";
import PostCardDemo from "./ProjectCard";
import { Grid, Box, makeStyles } from "@material-ui/core";

const ProjectsList = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container spacing={3} justify="center">
        {projectData.map((projects) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={projects.id}>
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
    margin: "6rem 3rem",
    "@media (max-width:450px)": {
      margin: "4rem 0.2rem",
    },
  },
});
