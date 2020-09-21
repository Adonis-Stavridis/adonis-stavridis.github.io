import React, { Component } from "react";
import Page from "../Page";

import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import DogeProject from "../../img/dogeproject.png";
import WebsiteProject from "../../img/websiteproject.png";
import CubosProject from "../../img/cubosproject.png";
import DatashareProject from "../../img/datashareproject.png";
import ChararecProject from "../../img/chararecproject.png";
import AnimaforumProject from "../../img/animaforumproject.jpg";
import BreakoutProject from "../../img/breakoutproject.png";
import GameoflifeProject from "../../img/gameoflifeproject.png";
import LifeofamirProject from "../../img/lifeofamirproject.png";

import "../../css/Projects.scss";

export class Projects extends Component {
  render() {
    return (
      <Page>
        <div className="Projects" id="Projects">
          <h1>Projects</h1>

          <CardColumns className="cardsDeck">
            <Card className="projectCard" border="warning">
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
                  that allows to add the famous internet character Doge and his
                  friends
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

            <Card className="projectCard" border="warning">
              <Card.Header as="h3">Personal website</Card.Header>
              <Card.Img
                className="imgPadding"
                variant="top"
                src={WebsiteProject}
              />
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
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-HTML5-tomato?style=flat&logo=HTML5&logoColor=white"
                    alt="HTML5"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-CSS3-darkblue?style=flat&logo=CSS3&logoColor=white"
                    alt="CSS3"
                  />
                </Card.Text>
                <Card.Text>
                  A small project to build an online personal website as a
                  portfolio for my entire work
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

            <Card className="projectCard" border="warning">
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
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-HTML5-tomato?style=flat&logo=HTML5&logoColor=white"
                    alt="HTML5"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-CSS3-darkblue?style=flat&logo=CSS3&logoColor=white"
                    alt="CSS3"
                  />
                </Card.Text>
                <Card.Text>
                  A WIP project where I am building an easy to use 3D modeling
                  software
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
                <Button
                  href="https://adonis-stavridis.github.io/Cubos-website/"
                  target="_blank"
                  variant="warning"
                  block
                >
                  Website
                </Button>
              </Card.Footer>
            </Card>

            <Card className="projectCard">
              <Card.Header as="h3">Shared Database</Card.Header>
              <Card.Img
                className="imgPadding"
                variant="top"
                src={DatashareProject}
              />
              <Card.Body>
                <Card.Title as="h2">Datashare</Card.Title>
                <Card.Text>
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-C-darkgrey?style=flat&logo=C&logoColor=white"
                    alt="C"
                  />
                </Card.Text>
                <Card.Text>
                  An architecture of applications and servers that connect and
                  store information about users, using the network, with message
                  acquisition, server backup and server synchronisation
                  solutions
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  href="https://github.com/Adonis-Stavridis/Shared-Database"
                  target="_blank"
                  variant="success"
                  block
                >
                  Source code
                </Button>
              </Card.Footer>
            </Card>

            <Card className="projectCard">
              <Card.Header as="h3">Character Recognition App</Card.Header>
              <Card.Img
                className="imgPadding"
                variant="top"
                src={ChararecProject}
              />
              <Card.Body>
                <Card.Title as="h2">Chararec</Card.Title>
                <Card.Text>
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-JavaScript-yellow?style=flat&logo=JavaScript&logoColor=white"
                    alt="JavaScript"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-HTML5-tomato?style=flat&logo=HTML5&logoColor=white"
                    alt="HTML5"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-CSS3-darkblue?style=flat&logo=CSS3&logoColor=white"
                    alt="CSS3"
                  />
                </Card.Text>
                <Card.Text>
                  An online application that tries to recognise a letter or a
                  number drawn by the user on a canvas
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  href="https://github.com/Adonis-Stavridis/Character-Recognition-App"
                  target="_blank"
                  variant="success"
                  block
                >
                  Source code
                </Button>
                <Button
                  href="https://adonis-stavridis.github.io/Character-Recognition-App/"
                  target="_blank"
                  variant="warning"
                  block
                >
                  Website
                </Button>
              </Card.Footer>
            </Card>

            <Card className="projectCard">
              <Card.Header as="h3">Forum</Card.Header>
              <Card.Img
                className="imgPadding"
                variant="top"
                src={AnimaforumProject}
              />
              <Card.Body>
                <Card.Title as="h2">Anima-Forum</Card.Title>
                <Card.Text>
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-PHP-mediumpurple?style=flat&logo=PHP&logoColor=white"
                    alt="PHP"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-SQL-lightsteelblue?style=flat&logo=MySQL&logoColor=white"
                    alt="SQL"
                  />
                </Card.Text>
                <Card.Text>
                  A forum to talk about your favorite animals, with personal
                  accounts, topics and comments
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  href="https://github.com/Adonis-Stavridis/Anima-Forum"
                  target="_blank"
                  variant="success"
                  block
                >
                  Source code
                </Button>
              </Card.Footer>
            </Card>

            <Card className="projectCard">
              <Card.Header as="h3">Online Game</Card.Header>
              <Card.Img
                className="imgPadding"
                variant="top"
                src={BreakoutProject}
              />
              <Card.Body>
                <Card.Title as="h2">Breakout</Card.Title>
                <Card.Text>
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-JavaScript-yellow?style=flat&logo=JavaScript&logoColor=white"
                    alt="JavaScript"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-HTML5-tomato?style=flat&logo=HTML5&logoColor=white"
                    alt="HTML5"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-CSS3-darkblue?style=flat&logo=CSS3&logoColor=white"
                    alt="CSS3"
                  />
                </Card.Text>
                <Card.Text>
                  A Breakout game with different levels of difficulty and a
                  scoreboard system
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  href="https://github.com/Adonis-Stavridis/Breakout"
                  target="_blank"
                  variant="success"
                  block
                >
                  Source code
                </Button>
              </Card.Footer>
            </Card>

            <Card className="projectCard">
              <Card.Header as="h3">Terminal Game</Card.Header>
              <Card.Img
                className="imgPadding"
                variant="top"
                src={GameoflifeProject}
              />
              <Card.Body>
                <Card.Title as="h2">Game of Life</Card.Title>
                <Card.Text>
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-C-darkgrey?style=flat&logo=C&logoColor=white"
                    alt="C"
                  />
                </Card.Text>
                <Card.Text>A game of life played inside the terminal</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  href="https://github.com/Adonis-Stavridis/Game-of-Life"
                  target="_blank"
                  variant="success"
                  block
                >
                  Source code
                </Button>
              </Card.Footer>
            </Card>

            <Card className="projectCard">
              <Card.Header as="h3">Unity Game</Card.Header>
              <Card.Img
                className="imgPadding"
                variant="top"
                src={LifeofamirProject}
              />
              <Card.Body>
                <Card.Title as="h2">Life of Amir</Card.Title>
                <Card.Text>
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-C%23-darkviolet?style=flat&logo=C-Sharp&logoColor=white"
                    alt="C#"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-Unity-darkgrey?style=flat&logo=Unity&logoColor=white"
                    alt="Unity"
                  />
                  <img
                    className="codeBadge"
                    src="https://img.shields.io/badge/-Blender-orange?style=flat&logo=Blender&logoColor=white"
                    alt="Blender"
                  />
                </Card.Text>
                <Card.Text>
                  A small RPG single-player game made in the Unity Engine
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  href="https://github.com/Adonis-Stavridis/Life-of-Amir"
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
