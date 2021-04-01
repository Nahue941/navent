import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.scss';

const Navbar = () => {
  const logged = useSelector((state) => state.user.isAuth);

  return (
    <div  className={styles.background}> 
    <div className={styles.navbar}>
      <div className={styles.container}>
      <Link to="/">
        <img
          className={styles.logo}
          src={"http://navent.com/es/wp-content/uploads/Navent-isologo.svg"}
          alt="logo"
        />
      </Link>
      {!logged ? (
        <Link to="/login" className={styles.link}> 

          <input type="button" value="Login"  className={styles.link} /> 
        </Link>
      ) : (
        <Link to="/test">
          <button className={styles.button}>Test</button>
        </Link>
      )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
