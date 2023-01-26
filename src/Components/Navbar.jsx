import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../Styles/Navbar.module.css";

const Navbar = () => { 
  return (
    <div className={styles.nav}>
      <div className={styles.first}>
        <h2 className={styles.head}>TheCocktailDB</h2>
      </div> 

      <div className={styles.second}>
        <Link className={styles.f} to={"/"}>Home</Link>
        <Link className={styles.s} to={"/about"}>About</Link>
      </div>
    </div>
  )
}

export default Navbar;
