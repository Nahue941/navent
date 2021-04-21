const express = require("express");
const router = express.Router();
const skillController = require('../controllers/skill')

router.get('/skill', skillController.getAll)

module.exports = router