import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/search.module.scss';
import { allSkills } from '../state/skills/actions';
import Skill from '../components/Skill';
import style from '../styles/skills.module.scss';
import { MdSearch } from 'react-icons/md';

const Search = () => {
  const [input, setInput] = useState('');
  const skills = useSelector((state) => state.skill.allSkills);
  const skillName = [...skills.map((x) => x.name.toLowerCase())];
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setSearch(skillName.includes(input.toLowerCase()) ? input : null);
  }, [skillName.includes(input.toLowerCase()) ? input : null, '1']);

  console.log(search, 'soy search');
  useEffect(() => {
    dispatch(allSkills());
  }, [dispatch]);

  return (
    <>
      <form>
        <div className={styles.centerRow}>
          <h1 className={styles.colorIcon}>
            <MdSearch />
          </h1>

          <input
            type="text"
            placeholder="Buscar Skills"
            value={input}
            onChange={handleChange}
          />
          {search? 
          skills?.map((skill) => skill.name.toLowerCase()==[search]? <Skill key={skill.id} skill={skill} />:null)
            : null}
        </div>
      </form>
    </>
  );
};

export default Search;
