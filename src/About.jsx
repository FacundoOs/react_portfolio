import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawDesignerLife primaryColor='#12283a' height='200px' />
        </div>
        <div class="column">
          <h1 id="about-header" className="ui header">About Me</h1>
          <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem providet corporis fuga distinctio ipsam?
           Et quos harum exceptuari dolorum molestias?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;