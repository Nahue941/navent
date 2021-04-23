const { Answer } = require('../models');
const { Op } = require('sequelize');

const answerController = {
  async createAnswer(req, res, next) {
    try {
      const newAnswer = await Answer.create({
        ...req.body,
        testId: req.params.id,
      });
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  },
  async updateCorrect(req, res, next) {
    try {
      await Answer.update(
        { correct: false },
        {
          where: {
            id: { [Op.not]: req.params.id },
            questionId:req.body.questionId
          },
        },
      );
      const updatedAnswer = await Answer.update({correct:true}, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      res.send(updatedAnswer);
    } catch (error) {
      next(error);
    }
  },


  async editAnswer (req,res,next){
    try {
      const updatedAnswer = await Answer.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      res.send(updatedAnswer);
    } catch (error) {
      next(error);
    }
  },

  async deleteAnswer(req, res, next) {
    try {
      const deletedAnswer = await Answer.findByPk(req.params.id);
      const wasDeleted = deletedAnswer.destroy();
      if (wasDeleted) res.send(200);
      else res.send(400);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = answerController;
