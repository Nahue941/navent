import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CreateForm = ({ skillId }) => {
  const [newTest, setNewTest] = useState({ 
    skillId, 
    questions: [] 
  });
  const [newQuestions, setNewQuestions] = useState({});
  const [newAnswers, setNewAnswers] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
     {/*  //si newTest.questions.length === 0 */}
      <form onSubmit={handleSubmit}>
        <h3>Descripcion del test</h3>
        <input></input>
        <h3>Tiempo para contestar una pregunta en segundos</h3>
        <input></input>
        <h3>Dias necesarios a esperar para poder volver a intertar el test</h3>
        <input></input>
        <h3>Cantidad de preguntas totales que el usaurio verá cuando se le tome el test. Es la cantidad de preguntas mínimas que tienen que cargarse para el test</h3>
        <input></input>
        <h3>Cantidad de respuestas por pregunta que el usuario verá al momento de realizar el test. Es la cantidad de respuetas mínimas que deben cargarse para cada pregunta.</h3>
        <input></input>
        {/* renderizo el form de preguntas */}



      </form>
    </div>

  )
}

export default CreateForm;


