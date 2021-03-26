const { Test, Question, Answer } = require('../models');
const S = require('sequelize');

const testController = {
    getAll(req, res) {
        Test.findAll({})
            .then(test => res.send(test))
    },
    getOne(req, res) {
        Test.findByPk(req.params.id, {
            include: {
                model: Question,
                limit: 7,
                order: S.literal('random()'),
                where: { active: true },
                include: {
                    model: Answer,
                    limit: 4,
                },
            },
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