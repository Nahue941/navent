//const userId = Number(process.argv[2]);


//questions y answers son arrays de preguntas y respuestas donde el indice cada question coincide con el indice de la correct-answer de esa pregunta.
//kAnswers son la cantidad de respuestas posibles que quiero agregarle a cada pregunta. Por defecto son 4
//`testId` hace referencia al test al que se le van a asignar las preguntas y las respuestas.
//`idQuestion` indica a partir de que id empiezan a sumarse las preguntas
const createQuestionsAndAnswers = (questions, answers, testId, idQuestion = 1, kAnswers = 4) => {
  if (!testId || typeof testId !== "number") {
    console.log('Es necesario agregar el número de id del test al que se le quieren vincular las respuestas');
    return;
  }
  if (questions.length > 5 || questions.length !== answers.length) {
    console.log('Se necesitan más de 4 preguntas para un test. \nLa cantidad de preguntas tiene que ser igual a la cantidad de respuestas.');
    return;
  }
  if (kAnswers > questions.length) {
    console.log('La cantidad de respuestas por pregunta no puede ser mayor a la cantidad de preguntas disponibles')
  }

  const questionsMade = [], answersMade = [];

  for (let i = 0; i < questions.length; i++) {
    questionsMade.push({
      testId: testId,
      question: questions[i],
    })

    let indexInsertedAnsToExclude = [i]
    for (let j = 0; j < kAnswers; j++) {


      answersMade.push({
        questionId: idQuestion + i,
        answer: j == 0 ? answers[i] : answers[searchRandomAns(indexInsertedAnsToExclude, questions.length)],
        correct: j == 0
      })
      console.log(`en la posicion i:${i} y j:${j}, el array tiene: ${indexInsertedAnsToExclude}`)
    }
  }
  return [questionsMade, answersMade]
}

//retorna un entero random que no se encuentre en el array pasado por parámetro.
const searchRandomAns = (indexInsertedAns, range) => {
  let rand = null
  //la condicion de busqueda es que el numero que obtengo no tiene que estar en el array de numeros que ya salieron.
  while (rand === null || indexInsertedAns.includes(rand)) {
    rand = Math.round(Math.random() * (range - 1));
  }
  //agrego al array de numeros que ya salieron el numero que acaba de salir para evitar repeticiones
  indexInsertedAns.push(rand);
  return rand;
}


/* 
ARRAYS DE PRUEBA
let questions = ['Donde estudiamos?', 'Cuanto tiempo se estudia?', 'De donde es Nahuel', 'Como se llama mi perro?', 'Cuantos anios tiene nahuel?'];
let answers = ['En P5', '4 Meses', 'Ituzaingo', 'Lito', '26 años'];
 */