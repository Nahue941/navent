const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.saveResult);
router.get('/:id', userController.allResults)

module.exports = router;
