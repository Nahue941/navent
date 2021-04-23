import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/search.module.scss';
import { allSkills } from '../state/skills/actions';
import Skill from '../components/Skill';
import { MdSearch } from 'react-icons/md';
import style from '../styles/skills.module.scss';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import inputStyle from '../styles/form.module.css';

const Search = () => {
  const [input, setInput] = useState('');
  const skills = useSelector((state) => state.skill.allSkills);
  const skillName = [...skills.map((x) => x.name.toLowerCase())];
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);
  const handleChange = (e) => {
    setSearching(true);
    setInput(e.target.value);
  };

  useEffect(() => {
    setSearch(skillName.includes(input.toLowerCase()) ? input : null);
  }, [skillName.includes(input.toLowerCase()) ? input : null]);

  useEffect(() => {
    dispatch(allSkills());
  }, [dispatch]);

  return (
    <>
      <form>
        <div className={styles.centerRow}>
          <div>
            <h1 className={styles.colorIcon}>
              <MdSearch />
            </h1>
          </div>
          <div>
            <input
              className={inputStyle.input}
              type="text"
              placeholder="Buscar Skills"
              value={input}
              onChange={handleChange}
            />
          </div>

          <div className={style.container}>
            {search ? (
              skills?.map((skill) =>
                skill.name.toLowerCase() == [search] ? (
                  <>
                    <div className={styles.skillBox}>
                      <Skill key={skill.id} skill={skill} />
                    </div>
                  </>
                ) : null,
              )
            ) : searching && input.length > 0 ? (
              <div className={styles.loading}>
                <LoadingSpinner />
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
