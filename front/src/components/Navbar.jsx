import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img
          className={styles.logo}
          src={process.env.PUBLIC_URL + '/Navent.png'}
          alt="logo"
        />
      </Link>
      <Link to="/login">
        <button className={styles.button}>Login</button>
      </Link>
      <Link to="/register">
        <button className={styles.button}>Register</button>
      </Link>
    </div>
  );
};

export default Navbar;
