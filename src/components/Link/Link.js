import PropTypes from "prop-types";
import React from "react";
import "./Link.scss";

const Link = (props) => (
  <div className="link">
    <a className="link__content" href={props.url} rel="noreferrer nofollow">
      {props.children}
    </a>
  </div>
);

Link.propTypes = {
  url: PropTypes.string,
};

export default Link;
