import React from 'react'
import Home from './components/Home/Home.jsx'
import Footer from './Footer.jsx'
import About from './components/About/About.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Particles from 'react-particles-js'
import ProjectsList from './components/Projects/ProjectsList.jsx'
import Contact from './components/Contact/Contact.jsx'
import { makeStyles } from '@material-ui/core/styles'
import { Switch, Route } from 'react-router-dom'
import node from '../src/assets/pngkit_new-balance-logo-png_667065.png'
import rails from '../src/assets/pngfind.com-ruby-on-rails-png-3441378.png'
import native from '../src/assets/kisspng-javascript-logo-clip-art-download-copyright-my-profi-world-web-development-5c5543cbde9492.5280562715490917879117.png'
import react from '../src/assets/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png'
// import { HashLink as Link } from 'react-router-hash-link'
import FooterIcons from './components/Navbar/FooterIcons.jsx'

const App = () => {
  const classes = useStyles()
  return (
    <>
      <Navbar />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: false,
                value_area: 900,
              },
            },
            // line_linked: {
            //   enable: false,
            // },
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
              // stroke: {
              //   width: 1,
              //   color: 'tomato',
              // },
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
        }}
      />
      <Home />
      <About />
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

const useStyles = makeStyles({
  particlesCanva: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
})
