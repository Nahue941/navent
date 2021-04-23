import React, { useEffect, useState } from 'react';
import Button from './UI/Button';
import { Link } from 'react-router-dom';
import style from '../styles/skills.module.scss';
import { FaPencilAlt, FaPlus } from 'react-icons/fa';

const Skill = ({ skill }) => {
  return (
    <div className={style.skill}>
      {skill.name}
      <br />
      {skill.hasTest ? (
        <Link to={`/admin/skill/edit/${skill.pId}`}>
          <FaPencilAlt />
        </Link>
      ) : (
        <Link to={`/admin/skill/create/${skill.pId}/${skill.name}`}>
          <FaPlus />
        </Link>
      )}
    </div>
  );
};

export default Skill;
