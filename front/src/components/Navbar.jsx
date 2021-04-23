import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logOut } from '../state/user/actions'
import styles from '../styles/navbar.module.scss';
import { AiOutlineUser } from 'react-icons/ai'
import Search from '../containers/Search';

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const logged = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logOut());
    localStorage.setItem("token", "")
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

          <div>
            <Search/>
          </div>

          {! (user?.id) ? (
            <Link to="/login" className={styles.link}>
              <input type="button" value="Login" className={styles.link} />
            </Link>
          ) : (
            <>
              <h1>Bienvenido/a, {user.name}</h1>
            <div className={styles.logged}>
            <Link to= {`/profile/${user.id}`}>
              <div className={styles.profileIcon}>
              <AiOutlineUser color={'blue'} size={25}/>
              </div>
             </Link>
            <Link to="/" className={styles.link}>
              <button onClick={handleClick} className={styles.link}>Log Out</button>
            </Link>
            </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

// {movies ?
//   movies.slice(1).map((p) => {
//      return (
//        <div key={p.imdbID} className="centerCar">
//          <Link
//            onClick={() => handleClick(p.imdbID)}
//            to={`/movie/:${p.imdbID}`}
//          >
//            <h3> {p.Title} </h3>
//            <img src={p.Poster} width="110" height="130" />
//          </Link>
//        </div>
//      );
//    })
//  : null}
