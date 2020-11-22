import React from "react";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import { Switch, Route } from "react-router-dom";
import About from "./About.jsx";
import Navbar from "./Navbar.jsx";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import ProjectsList from "./ProjectsList.jsx";
import Contact from "./Contact.jsx";

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        top: 0,
        left: 0
    }
});

const App = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 70,
                            density: {
                                enable: false,
                                value_area: 900
                            }
                        },
                        collisions: {
                            enable: false
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "tomato"
                            }
                        },
                        size: {
                            value: 10,
                            random: true,
                            anima: {
                                enable: false,
                                speed: 6,
                                size_min: 0.1,
                                sync: false
                            }
                        },

                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
            <Switch>
                <Route exact path="/projects" component={ProjectsList} />
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
            </Switch>
            <Footer />
        </>
    );
};

export default App;

