import React, { Component } from "react";

import "../css/NavBar.scss";

export class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <a href="#Home">Home</a>
        <a href="#AboutMe">About Me</a>
        <a href="#Experience">Experience</a>
        <a href="#Scholarship">Scholarship</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </div>
    );
  }
}

export default NavBar;
