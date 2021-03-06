import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logOut } from '../state/user/actions'
import styles from '../styles/navbar.module.scss';

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const logged = useSelector((state) => state.user.isAuth);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logOut());
    history.push('/');
  }


  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <Link to={logged ? "/test" : "/"}>
            <img
              className={styles.logo}
              src={
                'https://www.bumeran.com.ar/candidate/static/media/bumeran.296e6bc2.svg'
              }
              alt="logo"
            />
          </Link>
          {! (user?.id) ? (
            <Link to="/login" className={styles.link}>
              <input type="button" value="Login" className={styles.link} />
            </Link>
          ) : (
            <Link to="/" className={styles.link}>
              <button onClick={handleClick} className={styles.link}>Log Out</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
