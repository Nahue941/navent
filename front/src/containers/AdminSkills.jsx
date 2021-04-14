import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Skill from '../components/Skill';
import { useDispatch, useSelector } from 'react-redux';
import { allSkills } from '../state/skills/actions';
const AdminSkills = () => {
  const dispatch = useDispatch();

  const skills = useSelector((state) => state.skill.allSkills);

  useEffect(() => {
    dispatch(allSkills());
  }, [dispatch]);

  return (
    <div>
      <h3>Admin</h3>
      {skills?.map((skill) => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default AdminSkills;
