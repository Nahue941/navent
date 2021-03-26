import React from 'react';
import styles from '../styles/navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <button>Log in</button>
      <button>Main menu</button>
      <button>Register</button>
      <h1 className={styles.logo}>LOGO</h1>
    </div>
  );
};

export default Navbar;
