import React, { Component } from "react";
import '../css/Page.css';

export class Page extends Component {
  render() {
    return <div className="Page">{this.props.children}</div>;
  }
}

export default Page;
