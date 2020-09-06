import React, { Component } from "react";
import axios from "axios";

class Cv extends Component {
  state = {
    cv: [],
  };

  componentDidMount() {
    axios.get("./src/data/cv.json").then((response) => {
      this.setState({
        cv: response.data,
      });
    });
  }

  render() {
    const curriculum = this.state.cv;
    let cvList;

    if (curriculum.length > 0) {
      cvList = curriculum.map((curriculum_vitae) => {
        return (
          <div>
          <div id={"project-" + curriculum_vitae.id} key={curriculum_vitae.id}>
            <div class="ui relaxed divided list">
              <div class="item">
                <i class="large github middle aligned icon"></i>
                <div class="content">
                  <div class="description">{curriculum_vitae.date}</div>
                  <div class="description"><h2>{curriculum_vitae.position}</h2></div>
                  <div class="description">{curriculum_vitae.description}</div>
                </div>
              </div>
            </div>

            {/*<h3 className="ui header">
              {curriculum_vitae.job_experience || curriculum_vitae.education}
            </h3>*/}
          </div>
          </div>
        );
      });
    }
    return (
      <div className="ui">
        <h1 id="cv-header" className="ui header">
          My CV
        </h1>
        <h1>Job experience</h1>
        {cvList}
      </div>
    );
  }
}
export default Cv;
