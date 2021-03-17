import React from 'react'
import { Link } from "react-router-dom";
import styles from "./NavStyles";

const Navbar = () => {
    return (
      <nav style={styles.navStyles}>
        <Link to="/about" style={styles.linkStyles}>
          <p>About</p>
        </Link>
  
        <Link to="/portfolio" style={styles.linkStyles}>
          <p>Portfolio</p>
        </Link>
  
        <Link to="/contact" style={styles.linkStyles}>
          <p>Contact</p>
        </Link>
      </nav>
    );
  };

export default Navbar
