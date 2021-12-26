import { Component } from "react";
import { Page } from "../Page";

import "../../css/Contact.scss";

import GMailLogo from "../../img/GMail-logo.png";
import GitHubLogo from "../../img/GitHub-logo.png";
import LinkedInLogo from "../../img/LinkedIn-logo.png";

export class Contact extends Component {
	render() {
		return (
			<Page>
				<div className="Contact" id="Contact">
					<h1>Contact</h1>

					<table className="contactInfo">
						<tbody>
							<tr>
								<td>
									<a
										href="mailto:adonis.stavridis@gmail.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="contactLogo"
											src={GMailLogo}
											alt="GMail-logo"
										/>
									</a>
								</td>
								<td>
									<a
										href="mailto:adonis.stavridis@gmail.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										adonis.stavridis@gmail.com
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<a
										href="https://github.com/Adonis-Stavridis"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="contactLogo"
											src={GitHubLogo}
											alt="GitHub-logo"
										/>
									</a>
								</td>
								<td>
									<a
										href="https://github.com/Adonis-Stavridis"
										target="_blank"
										rel="noopener noreferrer"
									>
										Adonis-Stavridis
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<a
										href="https://www.linkedin.com/in/adonis-stavridis/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="contactLogo"
											src={LinkedInLogo}
											alt="LinkedIn-logo"
										/>
									</a>
								</td>
								<td>
									<a
										href="https://www.linkedin.com/in/adonis-stavridis/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Adonis Stavridis
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Page>
		);
	}
}

export default Contact;
