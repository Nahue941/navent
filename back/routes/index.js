const express = require('express');
const router = express.Router();
const questionRoutes = require('./Question');
const testRoutes = require('./Test');
const loginRoutes = require('./Login');
const registerRoutes = require('./Register');
const userRoutes = require('./User')
const answerRoutes = require('./Answer');


router.use('/question', questionRoutes);
router.use('/test', testRoutes);
router.use('/login', loginRoutes);
router.use('/register', registerRoutes);
router.use('/result' ,  userRoutes)
router.use('/answer', answerRoutes);

//Ruta provisoria. Supuestamente nos vamos a alimentar de una API de Navent
router.get(`/skill`, (req, res, next) => {
  const skillsArray = [
    {
      id: 1,
      name: "Javascript",
      hasTest: false
    },
    {
      id: 2,
      name: "Node",
      hasTest: false
    },
    {
      id: 3,
      name: "Test prueba 1",
      hasTest: true
    },
    {
      id: 4,
      name: "Capitales-Paises",
      hasTest: true
    },
    {
      id: 5,
      name: "React",
      hasTest: false
    },
    {
      id: 6,
      name: "Matemáticas",
      hasTest: true
    },
    {
      id: 7,
      name: "Carácteres ASCII",
      hasTest: true
    },
    {
      id: 8,
      name: "CSS",
      hasTest: false
    }
  ]
  res.send(skillsArray);
})


module.exports = router;
