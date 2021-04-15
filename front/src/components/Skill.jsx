import React, { useEffect } from 'react';
import Button from './UI/Button';
import { Link } from 'react-router-dom';
const Skill = ({ skill }) => {
  console.log(skill,"soy skill")
  return (
    <div>
      <h3>{skill.name}</h3>
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
