import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const logged = useSelector((state) => state.user.isAuth);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img
          className={styles.logo}
          src={process.env.PUBLIC_URL + '/Navent.png'}
          alt="logo"
        />
      </Link>
      {!logged ? (
        <Link to="/register">
          <button className={styles.button}>Register</button>
        </Link>
      ) : (
        <Link to="/login">
          <button className={styles.button}>Login</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
