import React, { useState } from "react";
import Hello from "./Hello";
import Home from "./Home";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Cv from "./Cv";
import MainPage from "./MainPage";
import Navbar from "./Navbar";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import ProjectsList from "./ProjectsList";
import Contact from './Contact'

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      {/* <PostCardDemo/> */}

      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 70,
              density: {
                enable: false,
                value_area: 900,
              },
            },
            collisions: {
              enable: false,
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 10,
              random: true,
              anima: {
                enable: false,
                speed: 6,
                size_min: 0.1,
                sync: false,
              },
            },

            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
      <Switch>
        <Route exact path="/projects" component={ProjectsList}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        {/* <Route exact path="/" component={MainPage}></Route> */}
        {/* <Route exact path="/about" component={About}></Route> */}
        <Route exact path="/Resume" component={Cv}></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
  },
});
