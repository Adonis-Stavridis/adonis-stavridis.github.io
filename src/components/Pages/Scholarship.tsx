import React, { Component } from "react";
import Page from "../Page";

import Jumbotron from "react-bootstrap/Jumbotron";

import "../../css/Scholarship.scss";

export class Scholarship extends Component {
  render() {
    return (
      <Page>
        <div className="Scholarship" id="Scholarship">
          <h1>Scholarship</h1>

          <Jumbotron className="scholarshipInfo">
            <div className="degreeTitle">
              <h2>Master's Degree</h2>
              <h3>Computer Graphics</h3>
              <br />
              <h4>University of Strasbourg</h4>
              <h5>2020-2022</h5>
            </div>
            <p>
              Main Courses:
              <br />
              Compilation · Advanced Algorithmic · 3D Graphics Programming ·
              Architecture and Web Development · Computer Vision · Computer Security · Computer-Aided Proving
            </p>
          </Jumbotron>

          <Jumbotron className="scholarshipInfo">
            <div className="degreeTitle">
              <h2>Bachelor's Degree</h2>
              <h3>Computer Science</h3>
              <br />
              <h4>University of Strasbourg</h4>
              <h5>2017-2020</h5>
            </div>
            <p>
              Main Courses:
              <br />
              Data Structures · Algorithms · Object-Oriented Programming ·
              Computer Architecture · Operating Systems · Computer Networking ·
              Web Development · Human Computer Interaction · Calculus · Algebra
            </p>
            <p>
              Optional Courses:
              <br />
              3D Modelling · 3D Animation · Game Development
            </p>
          </Jumbotron>
        </div>
      </Page>
    );
  }
}

export default Scholarship;
