const express = require("express");
const router = express.Router();
const skillController = require('../controllers/skill')

router.get('/:limit', skillController.getAll);
router.get('/:id', skillController.getOne);
router.put('/:id', skillController.addTest);

module.exports = router