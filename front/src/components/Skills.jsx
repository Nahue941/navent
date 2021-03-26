import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Skills = () => {
  const skills = [
    { name: 'Js1', question: 'question1', answer: 'answer1' },
    { name: 'Js2', question: 'question2', answer: 'answer2' },
    { name: 'Js3', question: 'question3', answer: 'answer3' },
  ];
  return (
    <div>
      <h1>Esto es un test de prueba</h1>
      {tests.map((test) => {
        return (
          <div key={test.name}>
            <h2>{test.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
