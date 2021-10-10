import { Component } from "react";
import { Page } from "../Page";

import MePhoto from "../../img/me.jpeg";

import "../../css/AboutMe.scss";

export class AboutMe extends Component {
	render() {
		return (
			<Page>
				<div className="AboutMe" id="AboutMe">
					<h1>About Me</h1>

					<div className="meInfo">
						<img className="profilePhoto" src={MePhoto} alt="Me" />
						<div className="description">
							<p>
								4th year Student at the University of Strasbourg, currently
								enrolled in a Master of Science in Computer Graphics, with a
								Bachelor of Science in Computer Science already acquired.
							</p>
							<p>
								3+ years of experience in Software and Web Development with
								knowledge in, but not limited to, Data Structures, Algorithms,
								Object-Oriented Programming, Computer Architecture, Networking,
								Computer Graphics and Game Development.
							</p>
							<p>
								Able to work alone and in a collaborative environment, and also
								able to quickly adapt to any workflow.
							</p>
							<p>
								Interests include contributing to open-source projects, learning
								about new technologies as well as playing the guitar and
								volleyball.
							</p>
							<p>
								Fluent in English, French and Greek, and proficient in Spanish
								and German.
							</p>
						</div>
					</div>
				</div>
			</Page>
		);
	}
}

export default AboutMe;
