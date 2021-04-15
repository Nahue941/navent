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
          <Button color="blue" value="editar test" />
        </Link>
      ) : (
        <Link to={`/admin/skill/create/${skill.id}`}>
          <Button color="blue" value="crear test" />
        </Link>
      )}
    </div>
  );
};

export default Skill;
