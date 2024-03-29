import React, { useEffect } from 'react'
import Home from '../views/Home/Home.jsx'
import About from '../views/About/About.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import Skills from '../views/Skills/Skills.jsx'
import ProjectsList from '../views/Projects/ProjectsList.jsx'
import Contact from '../views/Contact/Contact.jsx'
import { Switch, Route } from 'react-router-dom'
import node from '../assets/particles-images/node.png'
import rails from '../assets/particles-images/rails.png'
import native from '../assets/particles-images/native.png'
import react from '../assets/particles-images/react.png'
import FooterIcons from '../components/Navbar/FooterIcons.jsx'
import useStyles from './appStyle'
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  const classes = useStyles()

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <ProjectsList />
      <Contact />
      {/* <Switch>
        <Route exact path="/projects" component={ProjectsList}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch> */}
      {/* <Footer /> */}
      <FooterIcons />
    </>
  )
}

export default App

const particlesParams = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: false,
        value_area: 900,
      },
    },
    collisions: {
      enable: false,
    },
    shape: {
      type: 'image',
      image: [
        {
          src: react,
          height: 40,
          width: 40,
        },
        {
          src: native,
          height: 40,
          width: 40,
        },
        {
          src: node,
          height: 40,
          width: 40,
        },
        {
          src: rails,
          height: 40,
          width: 40,
        },
      ],
    },
    size: {
      value: 30,
      random: true,
      animation: {
        enable: false,
        speed: 1,
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
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
}
