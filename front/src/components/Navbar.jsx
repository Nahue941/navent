import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.scss';

const Navbar = () => {
  const logged = useSelector((state) => state.user.isAuth);

  return (
    <>
        <div className={styles.navbar}>
          <div className={styles.container}>
            <Link to="/test">
              <img
                className={styles.logo}
                src={
                  'https://www.bumeran.com.ar/candidate/static/media/bumeran.296e6bc2.svg'
                }
                alt="logo"
              />
            </Link>
            {!logged && (
              <Link to="/login" className={styles.link}>
                <input type="button" value="Login" className={styles.link} />
              </Link>
            ) }
          </div>
        </div>
      </>
   
  );
};

export default Navbar;
