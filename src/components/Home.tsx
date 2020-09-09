import React, { Component } from "react";
import Page from "./Page";

export class Home extends Component {
  render() {
    return (
      <Page>
        <div className="Home">
          <h1>Hello world !</h1>
          <p>This website is still in the works !</p>
        </div>
      </Page>
    );
  }
}

export default Home;
