const express = require("express");
const router = express.Router();
const skillController = require('../controllers/skill')

router.get('/all', skillController.getAll);
router.get('/:limit', skillController.getIndex);
router.get('/:id', skillController.getOne);
router.put('/:id', skillController.addTest);

module.exports = router