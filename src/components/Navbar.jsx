import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';


const Navbar = ({icon, title}) => {
  return (
    <nav className="nav bg-dark">
      <i className={icon} /> <h1>{title}</h1>

      <Link to='/' > Home</Link>
      <Link to='/about' > About</Link>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string,
  props: PropTypes.string,
};
export default Navbar;
