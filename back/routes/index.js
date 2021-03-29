const express = require('express');
const router = express.Router();
const questionRoutes = require('./Question')
const testRoutes = require('./Test')


router.get('/', (req, res, next) => {
  res.send('Rutas andando');
});

router.use('/question', questionRoutes);
router.use('/test', testRoutes);

module.exports = router;
