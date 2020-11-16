import React from "react";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route} from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Cv from "./Cv";
import Home from "./MainPage";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/cv" component={Cv}></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
