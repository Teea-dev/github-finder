import React from "react";
import PropTypes from "prop-types";
const Navbar = ({icon, title}) => {
  return (
    <nav className="nav bg-dark">
      <i className={icon} /> <h1>{title}</h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  props: PropTypes.string.isRequired,
};
export default Navbar;
