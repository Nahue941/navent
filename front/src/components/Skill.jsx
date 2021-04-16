import React, { useEffect } from 'react';
import Button from './UI/Button';
import { Link } from 'react-router-dom';
import style from '../styles/skills.module.scss';


const Skill = ({ skill }) => {

  return (
    <div className={skill.id % 2 ? style.skills2 : style.skills}>
      {skill.name}
      {skill.hasTest ? (
        <Link to={`/admin/skill/edit/${skill.id}`}>
          <button>Editar Test</button>
        </Link>
      ) : (
        <Link to={`/admin/skill/create/${skill.id}`}>
        <button>Crear Test</button>
        </Link>
      )}
    </div>
  );
};

export default Skill;
