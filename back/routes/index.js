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

module.exports = router;
