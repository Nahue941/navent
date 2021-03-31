const express = require('express');
const router = express.Router();
const questionRoutes = require('./Question');
const testRoutes = require('./Test');
const loginRoutes = require('./Login');

router.get('/', (req, res, next) => {
  res.send('Rutas andando');
});

router.use('/question', questionRoutes);
router.use('/test', testRoutes);
router.use('/login', loginRoutes);

module.exports = router;
