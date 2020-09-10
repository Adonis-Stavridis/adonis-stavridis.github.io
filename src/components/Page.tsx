import React, { Component } from "react";

import "../css/Page.scss";

export class Page extends Component {
  render() {
    return (
      <div className="Page">
        <div className="Content">{this.props.children}</div>
      </div>
    );
  }
}

export default Page;
