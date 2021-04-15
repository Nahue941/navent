import React, { useEffect } from 'react';
import Button from './UI/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//

const EditTestButton = ({ skillId }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(editTest(skillId))
    }, [dispatch])

  return (
    <div>
      <h3>{skill.name}</h3>
      {skill.hasTest ? (
        <Link to={`/admin/skill/edit/${skill.id}`} >
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

export default EditTestButton;