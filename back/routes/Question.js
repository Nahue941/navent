const express = require("express");
const router = express.Router();
const questionController = require('../controllers/question');

router.get('/:id', questionController.getOne)
router.post('/:id', questionController.createQuestion)
router.put('/:id', questionController.editQuestion)
router.delete('/:id', questionController.deleteQuestion)

module.exports = router;