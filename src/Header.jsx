import React from "react";
import { Navlink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ui fixed inverted menu">
      <div className="ui container">
      <Link id="header" className="header item" to="/">
        My Portfolio
        </Link>
        <div className="right menu">
          <Navlink
          id="about-tab"
          className="ui item"
          activeStyle={{ fontWeight: "bold"}}
          to="/about"
          >
            About Me
          </Navlink>
          <Navlink
          id="projects-tab"
          className="ui item"
          activeStyle={{ fontWeight: "bold" }}
          to="/projects"
          >
            Projects
          </Navlink>
        </div>
      </div>
    </nav>
  );
};

export default Header;