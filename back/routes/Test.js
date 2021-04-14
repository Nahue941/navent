const express = require("express");
const router = express.Router();
const testController = require('../controllers/test')

router.get('/all/:userId', testController.getAll);
router.get('/:id', testController.getOne);
router.get('/:id/:userId', testController.getOneByUser);
router.post('/', testController.createTest);
router.put('/:id', testController.editTest);
router.delete(':id', testController.deleteTest);

module.exports = router