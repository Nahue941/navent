const { Question, Answer } = require('../models');

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
                testId: Number(req.params.testId)
            });
            res.status(201).send(question);
        } catch (error) {
            next(error);
        }
    },
    async editQuestion(req, res, next) {
        try {
            const updatedQuestion = await Question.update(
                req.body,
                {
                    where: {
                        id: req.params.id
                    },
                    returning:true
                });
            res.send(updatedQuestion);
        } catch (error) {
            next(error);
        }
    },
    async deleteQuestion(req, res, next) {
        try {
            const deletedQuestion = await Question.update(
                { active: false },
                {
                    where: {
                        id: req.params.id
                    }
                });
            res.send(200);
        } catch (error) {
            next(error);
        }
    }

}

module.exports = questionController

