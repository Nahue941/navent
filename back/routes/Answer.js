const express = require('express');
const answerController = require('../controllers/answer');
const router = express.Router();

router.post('/:id', answerController.createAnswer);
router.put('/:id/updateCorrect', answerController.updateCorrect);
router.put('/:id', answerController.editAnswer);
router.delete('/:id', answerController.deleteAnswer);

module.exports = router;