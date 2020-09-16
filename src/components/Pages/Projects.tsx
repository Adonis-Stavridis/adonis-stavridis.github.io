import React, { Component } from "react";
import Page from "../Page";

import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import DogeProject from "../../img/dogeproject.png";
import WebsiteProject from "../../img/websiteproject.jpeg";
import CubosProject from "../../img/cubosproject.png";

import "../../css/Projects.scss";

export class Projects extends Component {
  render() {
    return (
      <Page>
        <div className="Projects" id="Projects">
          <h1>Projects</h1>

          <CardColumns className="cardsDeck">
            <Card className="projectCard">
              <Card.Header as="h3">VS Code Extension</Card.Header>
              <Card.Img variant="top" src={DogeProject} />
              <Card.Body>
                <Card.Title as="h2">
                  Doge
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/visual-studio-marketplace/d/adonis-stavridis.doge?color=gold&label=Downloads&logo=visual-studio-code"
                    alt="Downloads"
                  />
                </Card.Title>
                <Card.Text>
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-TypeScript-dodgerblue?style=flat&logo=TypeScript&logoColor=white"
                    alt="TypeScript"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-Visual_Studio_Code-blue?style=flat&logo=visual-studio-code&logoColor=white"
                    alt="Visual Studio Code"
                  />
                </Card.Text>
                <Card.Text>
                  A fun project to develop a small Visual Studio Code extension
                  that allows to add the famous internet character Doge, and his
                  friends.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  href="https://github.com/Adonis-Stavridis/Doge-Extension"
                  target="_blank"
                  variant="success"
                  block
                >
                  Source code
                </Button>
              </Card.Footer>
            </Card>

            <Card className="projectCard">
              <Card.Header as="h3">Personal website</Card.Header>
              <Card.Img variant="top" src={WebsiteProject} />
              <Card.Body>
                <Card.Title as="h2">adonis-stavridis.github.io</Card.Title>
                <Card.Text>
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-TypeScript-dodgerblue?style=flat&logo=TypeScript&logoColor=white"
                    alt="TypeScript"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-React-turquoise?style=flat&logo=React&logoColor=white"
                    alt="React"
                  />
                </Card.Text>
                <Card.Text>
                  A small project to build an online personal website as a
                  Portfolio, for my entire work. In fact, you are viewing it
                  right now!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  href="https://github.com/Adonis-Stavridis/adonis-stavridis.github.io"
                  target="_blank"
                  variant="success"
                  block
                >
                  Source code
                </Button>
              </Card.Footer>
            </Card>

            <Card className="projectCard">
              <Card.Header as="h3">3D Modeling Software</Card.Header>
              <Card.Img variant="top" src={CubosProject} />
              <Card.Body>
                <Card.Title as="h2">Cubos</Card.Title>
                <Card.Text>
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-C++-blue?style=flat&logo=C%2B%2B&logoColor=white"
                    alt="C++"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-Qt-limegreen?style=flat&logo=Qt&logoColor=white"
                    alt="Qt"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-OpenGL-slategrey?style=flat&logo=OpenGL&logoColor=white"
                    alt="OpenGL"
                  />
                </Card.Text>
                <Card.Text>
                  A WIP project where I am building an easy to use 3D modeling
                  software!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  href="https://github.com/Adonis-Stavridis/Cubos"
                  target="_blank"
                  variant="success"
                  block
                >
                  Source code
                </Button>
              </Card.Footer>
            </Card>
          </CardColumns>
        </div>
      </Page>
    );
  }
}

export default Projects;
