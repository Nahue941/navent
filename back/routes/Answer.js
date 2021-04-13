const express = require('express');
const answerController = require('../controllers/answer');
const router = express.Router();

router.post('/', answerController.createAnswer);
router.put('/:id', answerController.editAnswer);
router.delete('/:id', answerController.deleteAnswer);

module.exports = router;