import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from '../styles/skills.module.scss'
import { allSkills } from '../state/skills/actions'
import Button from '../components/UI/Button'
import {createTest } from '../state/test/actions'
 

const CreateForm = ({ skillId }) => {

  const history = useHistory()
  const dispatch = useDispatch()
  const [newQuestions, setNewQuestions] = useState({});
  const [newAnswers, setNewAnswers] = useState({});
  const skills = useSelector((state) => state.skill?.allSkills)
  const [newTest, setNewTest] = useState({ 
    skillId,
    name: skills?.[skillId-1].name
  });
  
  useEffect(() => {
    dispatch(allSkills())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTest(newTest))
    .then(() => history.push(`/admin/skill/edit/${skillId}`))
  }

  const handleChange = (e) => {
    e.preventDefault()
    setNewTest({...newTest, [e.target.name]: e.target.value})
  }


  return (
    <div className={style.form}>
     {/*  //si newTest.questions.length === 0 */}
     <br/>
      <form onSubmit={handleSubmit}>
        <h3>Descripcion del test</h3>
        <input className={style.input}  name='description' onChange={handleChange}></input>
        <br/>
        <br/>
        <h3>Tiempo para contestar una pregunta en segundos</h3>
        <input className={style.input} name='timeToComplete' onChange={handleChange}></input>
        <br/>
        <br/>
        <h3>Dias necesarios a esperar para poder volver a intertar el test</h3>
        <input className={style.input}  name='daysToReMade' onChange={handleChange} ></input>
        <br/>
        <br/>
        <h3>Cantidad de preguntas totales que el usuario verá cuando se le tome el test. Es la cantidad de preguntas mínimas que tienen que cargarse para el test</h3>
        <input className={style.input}  name='qtyQuestions' onChange={handleChange}></input>
        <br/>
        <br/>
        <h3>Cantidad de respuestas por pregunta que el usuario verá al momento de realizar el test. Es la cantidad de respuetas mínimas que deben cargarse para cada pregunta.</h3>
        <input className={style.input}  name='qtyAnswers' onChange={handleChange}></input>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button value="Crear" type="submit" color="#eb0064"/>
        <br/>
        <br/>
        {/* renderizo el form de preguntas */}



      </form>
    </div>

  )
}

export default CreateForm;


