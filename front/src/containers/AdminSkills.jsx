import React, { useEffect, useState } from 'react';
import Skill from '../components/Skill';
import { useDispatch, useSelector } from 'react-redux';
import { allSkills } from '../state/skills/actions';
import style from '../styles/skills.module.scss';
import Search from './Search';

const AdminSkills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skill.allSkills);
  const [currentPage, setCurrentPage] = useState(1)
  let pagination = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  useEffect(() => {
    dispatch(allSkills(30));
  }, []);

  // useEffect(() => {
  //   for (let i = 1; i <= 20; i++) {
  //     pagination = [...pagination, i];
  //   }
  //   console.log(pagination);
  // }, [])

  const handlePagination = (e,i) => {
    const limit = i*30
    dispatch(allSkills(limit))
    setCurrentPage(i)
  }

  return (
    <>
      <br />
      <div className={`${style.skillsCenter}`}>
        <div>
          <h1 style={{ color: 'blue', fontSize: '320%' }}>Skills</h1>
        </div>
        {/* <div className={`${style.iconSearch}`}>
          <Search />
        </div> */}
      </div>
      <div className={style.container}>
        {skills?.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
      <div className={style.pagination}>
          {pagination?.map((i) => (
             <h4 style={{border: currentPage == i && '2px solid blue'}} onClick={(e) => handlePagination(e,i)} key={i}>{i}</h4>
          ))}       
      </div>
    </>
  );
};

export default AdminSkills;
