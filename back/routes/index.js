const express = require('express');
const router = express.Router();
const questionRoutes = require('./Question');
const testRoutes = require('./Test');
const loginRoutes = require('./Login');
const registerRoutes = require('./Register');
const userRoutes = require('./User')
const answerRoutes = require('./Answer');
const meRoutes = require('./Me');
const skillRoutes = require('./Skill')
const tokenMiddleware = require('./tokenMiddleware');


router.use('/question', questionRoutes);
router.use('/test', testRoutes);
router.use('/login', loginRoutes);
router.use('/register', registerRoutes);
router.use('/user' ,  userRoutes)
router.use('/answer', answerRoutes);
router.use('/me', tokenMiddleware, meRoutes);
router.use('/skill', skillRoutes);


module.exports = router;
