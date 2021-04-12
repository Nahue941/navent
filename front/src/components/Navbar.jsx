import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.scss';
import Button from '../components/UI/Button';
import { useDispatch } from 'react-redux';
import {useHistory} from "react-router-dom"
import {logout} from "../state/user/actions"
const Navbar = () => {
  const logged = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch()
  const history = useHistory()
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
          {logged && (
            <Button type="button" value="Logout" color="rgb(233, 0, 102)" onClick={() => {
              dispatch(logout())
              history.push("/")
            }}/>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
