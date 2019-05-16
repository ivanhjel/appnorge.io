import Link from "components/Link";
import Title from "components/Title";
import constants from "config/constants";
import React, { Component } from "react";
import "./FrontPage.scss";

class FrontPage extends Component {
  render() {
    return (
      <div className="front-page">
        <div className="front-page__content">
          <Title>
            Hele App Norge
            <br />i en Slack!
          </Title>
          <Link url={constants.inviteURL}>Bli med!</Link>
        </div>
      </div>
    );
  }
}

export default FrontPage;
