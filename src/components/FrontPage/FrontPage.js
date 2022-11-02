import React, { Component } from "react";
import constants from "../../config/constants";
import Link from "../Link";
import Title from "../Title";
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
