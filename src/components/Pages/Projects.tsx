import { Component } from "react";
import { Page } from "../Page";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import DogeProject from "../../img/dogeproject.png";
import SolarSystemProject from "../../img/solarsystemproject.png";
import WebsiteProject from "../../img/websiteproject.png";
import CompilerProject from "../../img/compilerproject.png";
import TetrisProject from "../../img/tetrisproject.png";
import DatashareProject from "../../img/datashareproject.png";
import ChararecProject from "../../img/chararecproject.png";
import AnimaforumProject from "../../img/animaforumproject.jpg";
import BreakoutProject from "../../img/breakoutproject.png";
import GameoflifeProject from "../../img/gameoflifeproject.png";
import LifeofamirProject from "../../img/lifeofamirproject.png";

import "../../css/Projects.scss";
import { Col, Container, Row } from "react-bootstrap";

export class Projects extends Component {
	render() {
		return (
			<Page>
				<div className="Projects" id="Projects">
					<h1>Projects</h1>

					<Container className="cardsDeck">
						<Row className="rowHandle" lg={3}>
							<Col className="colHandle">
								<Card className="projectCard" border="warning">
									<Card.Header as="h3">NPM package</Card.Header>
									<Card.Img
										className="imgHandle"
										variant="top"
										src="https://i.imgur.com/eeA5TUl.gif"
									/>
									<Card.Body>
										<Card.Title as="h2">
											Caroumesh
											<img
												className="codeBadge"
												src="https://img.shields.io/npm/dt/caroumesh?color=gold&label=Downloads&logo=npm&logoColor=white"
												alt="Downloads"
											/>
										</Card.Title>
										<Card.Text>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-React-turquoise?style=flat&logo=React&logoColor=white"
												alt="React"
											/>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-npm-CB3837?&style=flat&logo=npm&logoColor=white"
												alt="npm"
											/>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-three.js-black?&style=flat&logo=three.js&logoColor=white"
												alt="three.js"
											/>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-TypeScript-dodgerblue?style=flat&logo=TypeScript&logoColor=white"
												alt="TypeScript"
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
											A React component to display 3d models in a carousel-like
											fashion
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button
											className="linkButton"
											href="https://github.com/Adonis-Stavridis/caroumesh"
											target="_blank"
											variant="success"
										>
											Source code
										</Button>
										<Button
											className="linkButton"
											href="https://adonis-stavridis.github.io/caroumesh-example/"
											target="_blank"
											variant="warning"
										>
											Website
										</Button>
									</Card.Footer>
								</Card>
							</Col>
							<Col className="colHandle">
								<Card className="projectCard" border="warning">
									<Card.Header as="h3">VS Code Extension</Card.Header>
									<Card.Img
										className="imgHandle"
										variant="top"
										src={DogeProject}
									/>
									<Card.Body>
										<Card.Title as="h2">
											Doge
											<img
												className="codeBadge"
												src="https://img.shields.io/visual-studio-marketplace/i/adonis-stavridis.doge?color=gold&label=Installs&logo=visual-studio-code"
												alt="Installs"
											/>
										</Card.Title>
										<Card.Text>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-Visual_Studio_Code-blue?style=flat&logo=visual-studio-code&logoColor=white"
												alt="Visual Studio Code"
											/>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-TypeScript-dodgerblue?style=flat&logo=TypeScript&logoColor=white"
												alt="TypeScript"
											/>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-JavaScript-goldenrod?style=flat&logo=JavaScript&logoColor=white"
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
											An extension to add the famous internet character Doge and
											his friends into the IDE
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button
											className="linkButton"
											href="https://github.com/Adonis-Stavridis/Doge-Extension"
											target="_blank"
											variant="success"
										>
											Source code
										</Button>
										<Button
											className="linkButton"
											href="https://marketplace.visualstudio.com/items?itemName=Adonis-Stavridis.doge"
											target="_blank"
											variant="warning"
										>
											Website
										</Button>
									</Card.Footer>
								</Card>
							</Col>
							<Col className="colHandle">
								<Card className="projectCard" border="warning">
									<Card.Header as="h3">Interactive application</Card.Header>
									<Card.Img
										className="imgHandle"
										variant="top"
										src={SolarSystemProject}
									/>
									<Card.Body>
										<Card.Title as="h2">Solar System</Card.Title>
										<Card.Text>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-OpenGL-slategrey?style=flat&logo=OpenGL&logoColor=white"
												alt="OpenGL"
											/>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-WebGL-990000?style=flat&logo=WebGL&logoColor=white"
												alt="WebGL"
											/>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-JavaScript-goldenrod?style=flat&logo=JavaScript&logoColor=white"
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
										<Card.Text>An interactive solar system</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button
											className="linkButton"
											href="https://github.com/Adonis-Stavridis/Solar-System"
											target="_blank"
											variant="success"
										>
											Source code
										</Button>
										<Button
											className="linkButton"
											href="https://adonis-stavridis.github.io/Solar-System/"
											target="_blank"
											variant="warning"
										>
											Website
										</Button>
									</Card.Footer>
								</Card>
							</Col>
						</Row>
					</Container>

					<Container className="cardsDeck">
						<Row className="rowHandle" lg={3}>
							<Col className="colHandle">
								<Card className="projectCard">
									<Card.Header as="h3">Personal website</Card.Header>
									<Card.Img
										className="imgHandle"
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
										<Card.Text>An online website and portfolio</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button
											className="linkButton"
											href="https://github.com/Adonis-Stavridis/adonis-stavridis.github.io"
											target="_blank"
											variant="success"
										>
											Source code
										</Button>
									</Card.Footer>
								</Card>
							</Col>
							<Col className="colHandle">
								<Card className="projectCard">
									<Card.Header as="h3">Compiler</Card.Header>
									<Card.Img
										className="imgHandle"
										variant="top"
										src={CompilerProject}
									/>
									<Card.Body>
										<Card.Title as="h2">Scalpa</Card.Title>
										<Card.Text>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-C-darkgrey?style=flat&logo=C&logoColor=white"
												alt="C"
											/>
										</Card.Text>
										<Card.Text>
											A compiler of a minimal grammar of the Pascal programming
											language
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button
											className="linkButton"
											href="https://github.com/Adonis-Stavridis/Mini-Pascal-Compiler"
											target="_blank"
											variant="success"
										>
											Source code
										</Button>
									</Card.Footer>
								</Card>
							</Col>
							<Col className="colHandle">
								<Card className="projectCard">
									<Card.Header as="h3">Video Game</Card.Header>
									<Card.Img
										className="imgHandle"
										variant="top"
										src={TetrisProject}
									/>
									<Card.Body>
										<Card.Title as="h2">Tetris</Card.Title>
										<Card.Text>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-C++-blue?style=flat&logo=C%2B%2B&logoColor=white"
												alt="C++"
											/>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-CMake-064F8C?style=flat&logo=CMake&logoColor=white"
												alt="CMake"
											/>
										</Card.Text>
										<Card.Text>A Tetris desktop game</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button
											className="linkButton"
											href="https://github.com/Adonis-Stavridis/Tetris"
											target="_blank"
											variant="success"
										>
											Source code
										</Button>
									</Card.Footer>
								</Card>
							</Col>
						</Row>

						<Row className="rowHandle" lg={3}>
							<Col className="colHandle">
								<Card className="projectCard">
									<Card.Header as="h3">Shared Database</Card.Header>
									<Card.Img
										className="imgHandle"
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
											An architecture of client-server applications to store
											data with backups
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button
											className="linkButton"
											href="https://github.com/Adonis-Stavridis/Shared-Database"
											target="_blank"
											variant="success"
										>
											Source code
										</Button>
									</Card.Footer>
								</Card>
							</Col>
							<Col className="colHandle">
								<Card className="projectCard">
									<Card.Header as="h3">Character Recognition App</Card.Header>
									<Card.Img
										className="imgHandle"
										variant="top"
										src={ChararecProject}
									/>
									<Card.Body>
										<Card.Title as="h2">Chararec</Card.Title>
										<Card.Text>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-JavaScript-goldenrod?style=flat&logo=JavaScript&logoColor=white"
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
											An online application to recognise a letter or a number
											drawn by the user on a canvas
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button
											className="linkButton"
											href="https://github.com/Adonis-Stavridis/Character-Recognition-App"
											target="_blank"
											variant="success"
										>
											Source code
										</Button>
										<Button
											className="linkButton"
											href="https://adonis-stavridis.github.io/Character-Recognition-App/"
											target="_blank"
											variant="warning"
										>
											Website
										</Button>
									</Card.Footer>
								</Card>
							</Col>
							<Col className="colHandle">
								<Card className="projectCard">
									<Card.Header as="h3">Forum</Card.Header>
									<Card.Img
										className="imgHandle"
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
											A forum to talk about your favorite animals
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button
											className="linkButton"
											href="https://github.com/Adonis-Stavridis/Anima-Forum"
											target="_blank"
											variant="success"
										>
											Source code
										</Button>
									</Card.Footer>
								</Card>
							</Col>
						</Row>

						<Row className="rowHandle" lg={3}>
							<Col className="colHandle">
								<Card className="projectCard">
									<Card.Header as="h3">Online Game</Card.Header>
									<Card.Img
										className="imgHandle"
										variant="top"
										src={BreakoutProject}
									/>
									<Card.Body>
										<Card.Title as="h2">Breakout</Card.Title>
										<Card.Text>
											<img
												className="codeBadge"
												src="https://img.shields.io/badge/-JavaScript-goldenrod?style=flat&logo=JavaScript&logoColor=white"
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
											className="linkButton"
											href="https://github.com/Adonis-Stavridis/Breakout"
											target="_blank"
											variant="success"
										>
											Source code
										</Button>
										<Button
											className="linkButton"
											href="https://adonis-stavridis.github.io/Breakout/"
											target="_blank"
											variant="warning"
										>
											Website
										</Button>
									</Card.Footer>
								</Card>
							</Col>
							<Col className="colHandle">
								<Card className="projectCard">
									<Card.Header as="h3">Terminal Game</Card.Header>
									<Card.Img
										className="imgHandle"
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
										<Card.Text>
											A game of life played inside the terminal
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button
											className="linkButton"
											href="https://github.com/Adonis-Stavridis/Game-of-Life"
											target="_blank"
											variant="success"
										>
											Source code
										</Button>
									</Card.Footer>
								</Card>
							</Col>
							<Col className="colHandle">
								<Card className="projectCard">
									<Card.Header as="h3">Unity Game</Card.Header>
									<Card.Img
										className="imgHandle"
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
											className="linkButton"
											href="https://github.com/Adonis-Stavridis/Life-of-Amir"
											target="_blank"
											variant="success"
										>
											Source code
										</Button>
									</Card.Footer>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</Page>
		);
	}
}

export default Projects;
