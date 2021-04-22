import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getSingleMovie } from "../../state/singleMovie";
//get all tests
// import { getMoviesRequest, getLanding } from "../../state/movies";
//get all tests
import styles from '../styles/search.module.scss';
import { allSkills } from '../state/skills/actions';
import Skill from '../components/Skill';
import style from '../styles/skills.module.scss';
import { MdSearch } from 'react-icons/md';
//Intelligent search component, NEED FORMAT

const Search = () => {
  const [input, setInput] = useState('');
  const skills = useSelector((state) => state.skill.allSkills); //nuevo
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
    // dispatch(getMoviesRequest(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(getMoviesRequest(input));
  };

  // const handleClick = (id) => {
  //     dispatch(getSingleMovie(id))
  // }

  useEffect(() => {
    dispatch(allSkills());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.centerRow}>
          <h1 className={styles.colorIcon}>
            <MdSearch />
          </h1>

          <Link to="/admin/skill">
            <input
              type="text"
              placeholder="Buscar Skills"
              value={input}
              onChange={handleChange}
            />
          </Link>

          <br />
          <div className={`${style.skillsCenter}`}>
            <div>
              <h1 style={{ color: 'blue', fontSize: '320%' }}>Skills</h1>
            </div>

          </div>
          <div className={style.container}>
            {skills?.map((skill) => (
              <Skill key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
//login : si esta logueado y es admin, mostrame logout : sino mostrame bienvenido y el icono)}
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
