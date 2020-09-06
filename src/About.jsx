import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawDesignerLife primaryColor="#12283a" height="200px" />
        </div>
        <div class="column">
          <h1 id="about-header" className="ui header">
            About Me
          </h1>
          <p>
          More than 11 years of work experience in technical areas. As a technician and as a manager. 
        I excel at conflict resolution, continuous improvement, planning, strategy, time reduction, 
        and waste. Where there are obstacles and problems, I see opportunities. Always in constant learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
