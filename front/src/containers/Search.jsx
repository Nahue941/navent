import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getSingleMovie } from "../../state/singleMovie";
//get all tests
// import { getMoviesRequest, getLanding } from "../../state/movies";
//get all tests
import styles from '../styles/search.module.scss';

import { MdSearch } from 'react-icons/md';
//Intelligent search component, NEED FORMAT

const Search = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
    // dispatch(getMoviesRequest(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(getMoviesRequest(input));
  };

  // const handleClick = (id) => {
  //     dispatch(getSingleMovie(id))
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.centerRow}>

          <h1 className={styles.colorIcon} >
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
          
        </div>
      </form>
    </>
  );
};

export default Search;
