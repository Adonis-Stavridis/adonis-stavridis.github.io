import React, { Component } from "react";
import Page from "../Page";

import "../../css/Contact.scss";

import HomeLogo from "../../img/Home-logo.png";
import PhoneLogo from "../../img/Phone-logo.png";
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
                  <img className="contactLogo" src={HomeLogo} alt="Home-logo" />
                </td>
                <td>
                  <a
                    href="https://goo.gl/maps/DXnkN3G2Ny3HFoK78"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    12 Place Saint-Etienne, 67000
                    <br /> Strasbourg, France
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="contactLogo"
                    src={GMailLogo}
                    alt="GMail-logo"
                  />
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
                  <img
                    className="contactLogo"
                    src={PhoneLogo}
                    alt="Phone-logo"
                  />
                </td>
                <td>
                  <a href="tel:+33782505580">(+33) 7 82 50 55 80</a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="contactLogo"
                    src={GitHubLogo}
                    alt="GitHub-logo"
                  />
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
                  <img
                    className="contactLogo"
                    src={LinkedInLogo}
                    alt="LinkedIn-logo"
                  />
                </td>
                <td>
                  <a
                    href="https://www.linkedin.com/in/adonis-stavridis-profile/"
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
