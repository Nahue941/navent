const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/result', userController.saveResult);
router.get('/:name', userController.searchByName);


module.exports = router;
