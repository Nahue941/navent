const { Test, Question, Answer } = require('../models');
const S = require('sequelize');

const testController = {
    async getAll(req, res, next) {
        try {
            const userId = req.params.userId;
            const data = await Test.findAll();
            const tests = await Test.getRemainingDays(data, userId);
            res.send(tests);
        } catch (error) {
            next(error);
        }
    },
    async getOne(req, res, next) {
        try {
            const testToFind = await Test.findByPk(req.params.id);
            const test = await Test.findByPk(req.params.id, {
                include: {
                    model: Question,
                    limit: testToFind.qtyQuestions, //trae una menos porque más adelante agrega la correcta
                    order: S.literal('random()'),
                    where: { active: true },
                    include: [
                        {
                            model: Answer,
                            where: { correct: false },
                            order: S.literal('random()'),
                            limit: testToFind.qtyAnswers - 1
                        }
                    ],
                },
            });
            const testWithAllAnswers = await Promise.all(
                test.insertCorrectAnswersToQuestion()
            );

            res.send(testWithAllAnswers);
        } catch (error) {
            next(error);
        }
    },
    async getOneByUser(req, res, next) {
        try {
            const userId = req.params.userId;
            const test = await Test.findByPk(req.params.id
            );
            const array = [test]
            const data = await Test.getRemainingDays(array, userId);
            res.send(data);

        }
        catch (error) {
            next(error);
        }
    },
    async createTest(req, res, next) {
        try {
            const test = await Test.create(req.body);
            res.status(201).send(test)
        } catch (error) {
            next(error);
        }
    },
    async editTest(req, res, next) {
        try {
            const updatedTest = await Test.update(
                req.body,
                {
                    where: {
                        id: req.params.id
                    }
                });
            res.send(updatedTest);
        } catch (error) {
            next(error);
        }
    },
    async deleteTest(req, res, next) {
        try {
            const test = await Test.update(
                { active: false },
                {
                    where: {
                        id: req.params.id
                    }
                });
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    },
    async getTestToEdit(req, res, next) {
        try {
            const test = await Test.findOne({
                where: {
                    skillId: req.params.skillId
                },
                include: {
                    model: Question,
                    include: {
                        model: Answer,
                    },
                },
            });
            res.send(test);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = testController;