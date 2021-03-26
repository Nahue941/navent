const { Question, Answer } = require('../models'); //revisar si están bien requeridos

const questionController = {
    async getOne(req, res, next) {
        try {
            const question = await Question.findByPk(req.params.id, { include: [Answer] });
            res.send(question);
        } catch (error) {
            next(error);
        }
    },
    async createQuestion(req, res, next) {
        try {
            const question = await Question.create({
                ...req.body,
                testId: req.params.id
            });
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    },
    async editQuestion(req, res, next) {
        try {
            const question = await Question.findByPk(req.params.id);
            const editedQuestion = await question.update(req.body);
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    },
    async deleteQuestion(req, res, next) {
        try {
            const question = await Question.findByPk(req.params.id);
            const updatedQuestion = await question.update({ active: false })
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }

}

module.exports = questionController

