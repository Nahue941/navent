const { Test, Question, Answer, User, Skill } = require('../models');
const testArray = require('./testSeed');
const questionArray = require('./questionSeed');
const answerArray = require('./answerSeed');
const userArray = require('./userSeed');
const skillArray = require('./skillSeed');

/** Al crear una tabla que contiene un FK. El método bulkCreate revisa que 
 *  dicho id exista en la tabla a la cual quiero relacionar. Por ende se debe
 *  controlar el orden en que se crean las tablas. Primero debo crear las que no 
 *  tienen relación con ningunga otra tabla (en su interior no tienen FK), 
 *  y luego el resto.
 *  Orden de creación:
 * 
 *  1-Test
 *  2-Questions
 *  3-Answers
 *  4-Skill (No es necesario antes de Test ya que para la db no tienen relacion)
 * 
 *  *El orden no necesariamente debe ser este pero un orden posible.
 */



let testPromise = () => Test.bulkCreate(testArray)
  .then(res => {
    console.log(`\n-->Test creados`);
    return res;
  });

let questionPromise = () => Question.bulkCreate(questionArray)
  .then(res => {
    console.log(`-->Questions creadas`);
    return res;
  });

let answerPromise = () => Answer.bulkCreate(answerArray)
  .then(res => {
    console.log(`-->Answers creadas`);
    return res;
  });

  let skillPromise = () => Skill.bulkCreate(skillArray)
  .then(res => {
    console.log(`-->Skills creadas`);
    return res;
  });
/* let userPromise = () => User.bulkCreate(userArray)
  .then(res => {
    console.log(`-->Usuario/s creado/s`);
    return res;
  }); */





console.log('inciando seed...');
testPromise()
  .then(() => questionPromise())
  .then(() => answerPromise())
  .then(() => skillPromise())
  .then(() => console.log('\n----Seed terminado----'))
  .then(() => process.exit())
  .catch(e => console.error(e))