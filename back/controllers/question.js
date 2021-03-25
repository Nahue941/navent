const { Question, Test, Answer } = require('../models'); //revisar si están bien requeridos

const questionController = {
    getOne(req, res) {
        Question.findByPk(req.params.id, {
            include: [Test, Answer]
        })
        .then(question => res.send(question)) 
    },
    createQuestion(req, res) {
        let foundTest;
        Test.findByPk(req.params.id)
        .then(test => foundTest = test)
        .then(() => Question.create(req.body))
        .then(question => foundTest.addQuestion(question))
        .then(() => res.sendStatus(200))
    },
    editQuestion(req, res) {
        Question.findByPk(req.params.id)
        .then(question => question.update(req.body))
        .then(() => res.sendStatus(200))
    },
    deleteQuestion(req, res) {
        Question.findByPk(req.params.id)
        .then(question => question.update({
            active: false
        }))
        .then(() => res.sendStatus(200))
    }

}

module.exports = questionController

