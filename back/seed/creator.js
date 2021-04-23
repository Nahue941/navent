//const userId = Number(process.argv[2]);


//questions y answers son arrays de preguntas y respuestas donde el indice cada question coincide con el indice de la correct-answer de esa pregunta.
//kAnswers son la cantidad de respuestas posibles que quiero agregarle a cada pregunta. Por defecto son 4
//`testId` hace referencia al test al que se le van a asignar las preguntas y las respuestas.
//`idQuestion` indica a partir de que id empiezan a sumarse las preguntas
const createQuestionsAndAnswers = (questions, answers, testId, idQuestion = 1, kAnswers = 4) => {
  if (!testId || typeof testId !== "number") {
    console.log('Es necesario agregar el código de id del test al que se le quieren vincular las respuestas');
    return;
  }
  if (questions.length < 5 || questions.length !== answers.length) {
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

let createQuestionsAndAnswersOrder = (questions, answers, testId, idQuestion = 1) => {
  const questionsMade = [], answersMade = [];
  for (let i = 0; i < questions.length; i++) {
    questionsMade.push({
      testId: testId,
      question: questions[i],
    })

    for (let j=0; j < answers[i].length; j++){
      answersMade.push({
        questionId: idQuestion + i,
        answer: answers[i][j],
        correct: j === 0,
      })
    }

  }
  return [questionsMade, answersMade];
}


/* 
ARRAYS DE PRUEBA
let questions = ['Donde estudiamos?', 'Cuanto tiempo se estudia?', 'De donde es Nahuel', 'Como se llama mi perro?', 'Cuantos anios tiene nahuel?'];
let answers = ['En P5', '4 Meses', 'Ituzaingo', 'Lito', '26 años'];
 */

let questions = ['¿Cuánto es 2 + 2?', '¿Cúal es el resultado de restar 10 a 25?', '¿Cuánto es 2 elevado a la 8?', '¿Cúal es el resultado de la siguiente operación? \n50-10*5', '¿Cúal es la raíz cuadrada de 2?', '¿Cuánto es 0.1 * 10^4?', 'Si Juan tiene 2 manzanas y Pedro, su amigo, le pide 1 con la promesa que se la va a devolver en 3 días.  ¿Cúal es el valor de la constante de Plank?', '¿Cuánto es 2 + 6 - 5?', '¿Cuánto es 2*2-3?', '¿Qué base tiene el código binario? ', '¿Qué base tiene el código hexadecimal?'];

let answers = ['4', '15', '256', '0', 'Ninguna es correcta', '1000', '6.626 070 15 × 10^-34 J.s', '3', '1', '2', '16'];

questions = ['¿Cúal es código ASCII del siguiente carácter? \'A\'',
'¿Cúal es código ASCII del siguiente carácter? \'$\'',
'¿Cúal es código ASCII del siguiente carácter? \'p\'',
'¿Cúal es código ASCII del salto de linea?',
'¿Cúal es código ASCII del siguiente carácter? \'&\'',
'¿Cúal es código ASCII del siguiente carácter? \'[\'',
'¿Cúal es código ASCII del siguiente carácter? \'Z\'',
'¿Cúal es código ASCII del siguiente carácter? \'?\'',
'¿Cúal es código ASCII del siguiente carácter? \';\'',
'¿Cúal es código ASCII del carácter nulo?',
'¿Cúal es código ASCII del siguiente carácter? \'0\'',
'¿Cúal es código ASCII del carácter de espacio?',
'¿Cúal es código ASCII del siguiente carácter? \'m\'',
'¿Cúal es código ASCII del siguiente carácter? \'|\'',
'¿Cúal es código ASCII del siguiente carácter? \'#\''];
answers = ['65','36','112','13','38','91','90','63','59','0','48','32','109','124','35'];


let question = [
  'Using an attribute selector, how would you select an <a> element with a "title" attribute?',
  'CSS grid and flexbox are now becoming a more popular way to create page layouts. However, floats are still commonly used, especially when working with an older code base, or it you need to support older browser version. What are two valid techniques used to clear floats?',
  'When adding transparency styles, what is the difference between using the opacity property versus the background property with an rgba() value?',
  `What is true of block and inline elements?`,
  `What is the line-height property primarily used for?`,
  `Three of these choices are true about class selectors. Which is NOT true?`,
  `There are many properties that can be used to align elements and create page layouts such as float, position, flexbox and grid. Of these four properties, which one should be used to align a global navigation bar which stays fixed at the top of the page?`,
  `When elements overlap, they are ordered on the z-axis (i.e., which element covers another). The z-index property can be used to specify the z-order of overlapping elements. Which set of statements about the z-index property are true?`,
  ` Which of the following is true of the SVG image format?`,
  `To change the color of an SVG using CSS, which property is used?`,
  `When using position: fixed, what will the element always be positioned relative to?`,
  `When using media queries, media types are used to target a device category. Which choice lists current valid media types?`,

]

let answer = [
  [
    `a[title]{...}`,
    `a > title {...}`,
    `a.title {...}`,
    `a=title {...}`
  ],
  [
    `Use the "clearfix hack" on the parent element or use the overflow property with a value other than "visible." t`,
    `Use the "clearfix hack" on the floated element and add a float to the parent element.`,
    `Use the overflow property on the floated element or the "clearfix hack" on either the floated or parent element.`,
    `Use the "clearfix hack" on the floated element or the overflow property on the parent element.`,
  ],
  [
    `Opacity specifies the level of transparency of an element, including its content. Background with an rgba() value applies transparency to the background color only.t`,
    ` Opacity specifies the level of transparency of the child elements. Background with an rgba() value applies transparency to the background color only.`,
    `Opacity applies transparency to the background color only. Background with an rgba() value specifies the level of transparency of an element, as a whole, including its content.`,
    `Opacity applies transparency to the parent and child elements. Background with an rgba() value specifies the level of transparency of the parent element only.`,
  ],
  [
    `By default, block elements span the entire width of its container; inline elements are the same height and width as the content contained between their tags. t`,
    `By default, block elements are the same height and width as the content container between their tags; inline elements span the entire width of its container.`,
    `A <nav> element is an example of an inline element. <header> is an example of a block element.`,
    `A <span> is an example of a block element. <div> is an example of an inline element.`,
  ],
  [
    `to control the height of the space between two lines of content t`,
    `to control the height of the space between heading elements`,
    `to control the height of the character size`,
    `to control the width of the space between characters`,
  ],
  [
    `Classes can be used multiple times per page but not within the same element. t `,
    `Multiple classes can be used within the same element.`,
    `The same class can be used multiple times per page.`,
    `Class selectors with a leading period`,
  ],
  [
    `position t`,
    `flexbox`,
    `grid`,
    `float`,
  ],
  [
    `Larger z-index values appear on top of elements with a lower z-index value. Negative and positive numbers can be used. z-index can only be used on positioned elements. t`,
    `Smaller z-index values appear on top of elements with a larger z-index value. Negative and positive numbers can be used. z-index must also be used with positioned elements.`,
    `Larger z-index values appear on top of elements with a lower z-index value. Only positive numbers can be used. z-index must also be used with positioned elements.`,
    `Smaller z-index values appear on top of elements with a larger z-index value. Negative and positive numbers can be used. z-index can be used with or without positioned elements.`,
  ],
  [
    `SVGs can be created as a vector graphic or coded using SVG specific elements such as <svg>, <line>, and <ellipse>. t`,
    `CSS can be applied to SVGs but JavaScript cannot be.`,
    `SVGs work best for creating 3D graphics.`,
    `SVGs are a HAML-based markup language for creating vector graphics.`,
  ],
  [
    `Use fill to set the color inside the object and stroke to set the color of the border.t`,
    `Use background-fill to set the color inside the object and stroke or border to set the color of the border.`,
    `The color cannot be changed with CSS.`,
    `Use fill or background to set the color inside the object and stroke to set the color of the border.`,
  ],
  [
    `the viewport t`,
    `the closest element with position: relative`,
    `the parent element`,
    `the wrapper element`,
  ],
  [
    `print, screen, aural`,
    `print, screen, television`,
    `print, screen, speech t`,
    `print, speech, device`,
  ],
]


let questions = [
  `What is the purpose of the <track> tag, and when should it be used?`,
  `What are the best examples of void elements?`,
  `In HTML5, which tag or tags embed a webpage inside of a webpage?`,
  `Where do <header> and <footer> tags typically occur?`,
  `What is the best way to apply bold styling to text?`,
  `When is the <link> tag used?`,
  `The "value" attribute is associated with which set of tags?`,
  ` When should you use the <aside> element?`,
  `With which tags is the <source> element associated?`,
  `What is NOT a valid attribute for the <textarea> element?`,
  `What is the purpose of the <samp> element?`,
  `When should you use <ol> and <ul> elements?`,
  `What is the difference between the post and get methods in a form?`,
  `What is the difference between the <div> and <span> tags?`,
]

let answers = [
  [
    `The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <audio> and <video> tag. t`,
    `The <track> tag is used for specifying subtitles. It is typically applied as a child of the <audio> and <video> tags.`,
    `The <track> tag is used for specifying subtitles. It is typically applied as a child of the <video> tag.`,
    `The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <video> tag.`,
  ],
  [
    `<wbr><base><source> t`,
    `<link><meta><title>`,
    `<input><br><p>`,
    `<area><embed><strong>`,
  ],
  [
    `<iframe>`,
    `<iframe>, <frame>, and <frameset>`,
    `<frame>`,
    `<frame> and <frameset>`,
  ],
  [
    `as children of <body>, <article>, and <section> tags`,
    `as children of <body>, <article>, <aside>, and <section> tags`,
    `as children of <body>, <article>, <aside>, <nav>, and <section> tags`,
    `as children of <body>, <article>, <table>, and <section> tags`,
  ],
  [
    `<strong>`,
    `Use CSS.`,
    `<bold>`,
    `<b>`,
  ],
  [
    `when linking style sheets and favicons`,
    `when linking style sheets, JavaScript, and icons for mobile apps`,
    `when linking style sheets, favicons, and preloading assets`,
    `when linking style sheets, external URLs, and favicons`,
  ],
  [
    `<li><input><option>`,
    `<button><input><form>`,
    `<input><label><meter>`,
    `<input><option><textarea>`,
  ],
  [
    `when the content can be removed without detracting from the page's message`,
    `for anything you want to move to the side, like a pull quote box, a sidebar, or an image with text wrapping around it`,
    `for anything in parentheses`,
    `for anything in a sidebar`,
  ],
  [
    `<picture>, <audio>, and <video>`,
    `<svg>, <picture>, <audio>, and <video>`,
    `It is interchangeable with the src attribute, so any element which uses src may use <source>`,
    `<audio> and <video>`,
  ],
  [
    `max`,
    `readonly`,
    `form`,
    `spellcheck`,
  ],
  [
    `It identifies sample output from a computer program.`,
    `It connects the web browser to a SA-MP server.`,
    `It identifies enclosed text as a sampler or an example.`,
    `It uses a simple application messaging protocol to connect the browser to a texting device.`,
  ],
  [
    `Use <ul> when you want a bulleted list and <ol> when you want a numbered list.`,
    `Use <ul> when you have a list of items in which the order of the items matters. Use <ol> when you have a list of items that could go in any order.`,
    `Use <ol> when you want a bulleted list and <ul> when you want a numbered list.`,
    `Use <ol> when you have a list of items in which the order of the items matters. Use <ul> when you have a list of items that could go in any order.`,
  ],
  [
    `With post, data is included in the form body when send to the server. With get, the data goes through the URL.`,
    `post is used for sending information to the server. get is used for retrieving form information from the server.`,
    `get is used for sending information to the server. post is used for retrieving form information from the server.`,
    `With get, data is included in the form body when send to the server. With post, the data goes through the URL.`,
  ],
  [
    `<div> is used where a generic block-level tag is needed, while <span> is used where a generic inline tag is needed.`,
    `<div> is used for major divisions on a page, while <span> is used to span across columns.`,
    `<div> is the industry-standard default tag, but you could use <span> if you prefer.`,
    `<div> is used where a generic inline tag is needed, while <span> is used where a generic block-level tag is needed.`,
  ]
]



