import React, { Component } from "react";
import Page from "../Page";

import Jumbotron from "react-bootstrap/Jumbotron";

import "../../css/Experience.scss";

export class Experience extends Component {
  render() {
    return (
      <Page>
        <div className="Experience" id="Experience">
          <h1>Experience</h1>

          <Jumbotron className="experienceInfo">
            <div className="positionTitle">
              <h2>Intern</h2>
              <h3>Software Engineer</h3>
              <br />
              <h4>University of Strasbourg</h4>
              <h5>June 2020 - July 2020</h5>
            </div>
            <p>
              • Developed tools for a 3D modeling library using combinatorial
              map principles for structuring mesh topology
            </p>
            <p>
              • Implemented a vertex, edge and face translation tool as well as
              extrude and bevel functionalities
            </p>
          </Jumbotron>

          <Jumbotron className="experienceInfo">
            <div className="positionTitle">
              <h2>Intern</h2>
              <h3>Information Technology</h3>
              <br />
              <h4>University of Nicosia</h4>
              <h5>July 2018 - August 2018</h5>
            </div>
            <p>
              • Prepared all classroom workstations for the following semester
              by cleaning, repairing and replacing hardware, updating software
              and operating systems, and verifying good overall functionality of
              the computers
            </p>
            <p>
              • Fixed an error of a software blocking Windows from updating and
              causing other software to malfunction
            </p>
            <p>
              • Reduced Windows startup time by 50% to 60%, by tweaking
              settings, disabling services and uninstalling unnecessary software
            </p>
          </Jumbotron>
        </div>
      </Page>
    );
  }
}

export default Experience;
