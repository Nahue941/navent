const { Test, Question } = require('../models');

const testController = {
    getAll(req, res) {
        Test.findAll({
            include: Question,
            where: {
                active: true
            }
        })
        .then(test => res.send(test))
    },
    getOne(req, res) {
        Test.findByPk(req.params.id, {
            include: [Question, Answer],
            where: {
                active: true
            }
        })
        .then(test => res.send(test))
    },
    createTest(req, res) {
        Test.create(req.body)
        .then(test => res.status(201).send(test))
    },
    editTest(req, res) {
        Test.findByPk(req.params.id)
        .then(test => test.update(req.body))
        .then(updatedTest => res.send(updatedTest))
    },
    deleteTest(req, res) {
        Test.findByPk(req.params.id)
        .then(test => test.update({
            active: false
        }))
        .then(() => res.sendStatus(200))
    }
}

module.exports = testController;