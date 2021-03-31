const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/', userController.login);
router.post('/register', userController.register);

module.exports = router;
