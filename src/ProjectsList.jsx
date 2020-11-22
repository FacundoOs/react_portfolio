import React from "react";
import { projectData } from "./data/projects";
import PostCardDemo from "./ProjectCard.jsx";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
        margin: "6rem 0"
    }
});

const ProjectsList = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} justify="center" className={classes.root}>
            {projectData.map((projects) => {
                return (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={projects.id}
                        className={classes.mainContainer}
                    >
                        <PostCardDemo projects={projects} />;
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default ProjectsList;

