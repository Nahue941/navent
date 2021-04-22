import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/search.module.scss';
import { allSkills } from '../state/skills/actions';
import Skill from '../components/Skill';
import style from '../styles/skills.module.scss';
import { MdSearch } from 'react-icons/md';

const Search = () => {
  const [input, setInput] = useState('');
  const skills = useSelector((state) => state.skill.allSkills);
  const dispatch = useDispatch();
  const skillName = [...skills.map(x => (x.name).toLowerCase())]
  const handleChange = (e) => {
    console.log(skillName.includes((e.target.value).toLowerCase())? (skillName, "SOY EL SKILL") : null)
    setInput(e.target.value);
    console.log(e.target.value);
    dispatch(allSkills(input))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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

          <Link to="/admin/skill/search">
            <input
              type="text"
              placeholder="Buscar Skills"
              value={input}
              onChange={handleChange}
            />
          </Link>

          <Route path="/admin/skill/search">
          <div className={style.container}>
            {skills?.map((skill) => (
              <Skill key={skill.id} skill={skill} />
            ))}
          </div>

          </Route>

        </div>
      </form>
    </>
  );
};

export default Search;
