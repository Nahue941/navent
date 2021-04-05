import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.scss';

const Navbar = () => {
  const logged = useSelector((state) => state.user.isAuth);

  return (
<<<<<<< HEAD
    <>
        <div className={styles.navbar}>
          <div className={styles.container}>
            <Link to="/">
              <img
                className={styles.logo}
                src={
                  'https://www.bumeran.com.ar/candidate/static/media/bumeran.296e6bc2.svg'
                }
                alt="logo"
              />
            </Link>
            {!logged ? (
              <Link to="/login" className={styles.link}>
                <input type="button" value="Login" className={styles.link} />
              </Link>
            ) : (
              <Link to="/test">
                <button className={styles.button}>Test</button>
              </Link>
            )}
          </div>
        </div>
      </>
   
=======
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
>>>>>>> development
  );
};

export default Navbar;
