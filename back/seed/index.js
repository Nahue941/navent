const { Test, Question, Answer } = require('../models');
const testArray = require('./testSeed');
const questionArray = require('./questionSeed');
const answerArray = require('./answerSeed');

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



console.log('inciando seed...');
testPromise()
  .then(() => questionPromise() )
  .then(() => answerPromise() )
  .then(() => console.log('\n----Seed terminado----'))
  .then(() => process.exit())
  .catch(e => console.error(e))