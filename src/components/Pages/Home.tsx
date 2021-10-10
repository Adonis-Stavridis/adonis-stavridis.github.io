import { Component } from "react";
import { Page } from "../Page";

import "../../css/Home.scss";

export class Home extends Component {
	render() {
		return (
			<Page>
				<div className="Home" id="Home">
					<div className="homeContent">
						<h1>{/*Hello There!*/}</h1>
					</div>
				</div>
			</Page>
		);
	}
}

export default Home;
