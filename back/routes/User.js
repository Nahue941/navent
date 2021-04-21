const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/result', userController.saveResult);
router.get('/result/:id', userController.allResults)
router.get('/:name', userController.searchByName);


module.exports = router;
